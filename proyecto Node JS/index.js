import antlr4, { CharStreams, CommonTokenStream } from "antlr4";
import fs from "fs";
import readline from "readline";
import archy from "archy";

import MatiasLexer from "./generated/MatiasLexer.js";
import MatiasParser from "./generated/MatiasParser.js";
import CustomMatiasVisitor from "./CustomMatiasVisitor.js";

async function leerCadena() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) => {
    rl.question("Ingrese una cadena: ", (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

function mostrarTablaTokens(input) {
  const lexer = new MatiasLexer(CharStreams.fromString(input));
  const tokens = lexer.getAllTokens();
  if (tokens.length === 0) {
    console.error("No se generaron tokens.");
    return false;
  }

  console.log("\nTabla de Tokens y Lexemas:");
  console.log("------------------------------------------------------------");
  console.log("| Lexema                   | Token                         |");
  console.log("------------------------------------------------------------");
  for (let token of tokens) {
    const tokenType =
      MatiasLexer.symbolicNames[token.type] || `UNKNOWN (${token.type})`;
    const lexema = token.text;
    console.log(`| ${lexema.padEnd(24)} | ${tokenType.padEnd(30)}|`);
  }
  console.log("------------------------------------------------------------");
  return true;
}

function toArchy(node, parser) {
  const label =
    node.ruleIndex !== undefined
      ? parser.ruleNames[node.ruleIndex]
      : node.getText().replace(/\n/g, "\\n");
  const nodes = node.children
    ? node.children.map((child) => toArchy(child, parser))
    : [];
  return { label, nodes };
}

async function main() {
  let input;
  try {
    input = fs.readFileSync("input.txt", "utf8");
    console.log("\nContenido del archivo input.txt:");
    console.log("------------------------------------------------------------");
    console.log(input);
    console.log("------------------------------------------------------------");
  } catch {
    input = await leerCadena();
  }

  const lexer = new MatiasLexer(CharStreams.fromString(input));
  const lexErrors = [];
  lexer.removeErrorListeners();
  lexer.addErrorListener({
    syntaxError(recognizer, offendingSymbol, line, column, msg) {
      lexErrors.push({ line, column, msg });
    },
  });

  const tokenStream = new CommonTokenStream(lexer);
  const parser = new MatiasParser(tokenStream);

  const syntaxErrors = [];
  parser.removeErrorListeners();
  parser.addErrorListener({
    syntaxError(recognizer, offendingSymbol, line, column, msg) {
      syntaxErrors.push({ line, column, msg });
    },
  });

  parser.buildParseTrees = true;
  const tree = parser.prog();

  if (lexErrors.length > 0) {
    console.error("\nError léxico detectado:");
    for (const err of lexErrors) {
      console.error(
        `Error léxico en línea ${err.line}:${err.column} - ${err.msg}`
      );
    }
    return;
  }

  if (syntaxErrors.length > 0) {
    console.error("\nError sintáctico detectado:");
    for (const err of syntaxErrors) {
      console.error(
        `Error sintáctico en línea ${err.line}:${err.column} - ${err.msg}`
      );
    }
    return;
  }

  console.log("\nEntrada válida.");

  mostrarTablaTokens(input);

  console.log("\nÁrbol de análisis sintáctico:\n");
  console.log(archy(toArchy(tree, parser)));

  const visitor = new CustomMatiasVisitor();

  console.log("\n--- Traducción a JavaScript ---");
  const jsCode = visitor.translateToJS(tree);
  console.log(jsCode);
  console.log("--- Fin de Traducción ---");

  visitor.executeJS();
}

main();
