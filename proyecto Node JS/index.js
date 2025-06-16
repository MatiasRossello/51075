import antlr4, { CharStreams, CommonTokenStream } from "antlr4";
import fs from "fs";
import readline from "readline";
import archy from "archy";

import MatiasLexer from "./generated/MatiasLexer.js";
import MatiasParser from "./generated/MatiasParser.js";
import CustomMatiasVisitor from "./CustomMatiasVisitor.js";

const COLORS = {
  reset: "\x1b[0m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  cyan: "\x1b[36m",
};

function colorize(text, color) {
  return `${color}${text}${COLORS.reset}`;
}

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
    console.error(colorize("No se generaron tokens.", COLORS.red));
    return false;
  }

  console.log(colorize("\nTabla de Tokens y Lexemas:", COLORS.cyan));
  console.log(colorize("------------------------------------------------------------", COLORS.yellow));
  console.log(colorize("| Lexema                   | Token                         |", COLORS.yellow));
  console.log(colorize("------------------------------------------------------------", COLORS.yellow));
  for (let token of tokens) {
    const tokenType =
      MatiasLexer.symbolicNames[token.type] || `UNKNOWN (${token.type})`;
    const lexema = token.text;
    console.log(`| ${lexema.padEnd(24)} | ${tokenType.padEnd(30)}|`);
  }
  console.log(colorize("------------------------------------------------------------", COLORS.yellow));
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
    console.log(colorize("\nContenido del archivo input.txt:", COLORS.cyan));
    console.log(colorize("------------------------------------------------------------", COLORS.yellow));
    console.log(input);
    console.log(colorize("------------------------------------------------------------", COLORS.yellow));
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
    console.error(colorize("\nError léxico detectado:", COLORS.red));
    for (const err of lexErrors) {
      console.error(
        colorize(
          `Error léxico en línea ${err.line}:${err.column} - ${err.msg}`,
          COLORS.red
        )
      );
    }
    return;
  }

  if (syntaxErrors.length > 0) {
    console.error(colorize("\nError sintáctico detectado:", COLORS.red));
    for (const err of syntaxErrors) {
      console.error(
        colorize(
          `Error sintáctico en línea ${err.line}:${err.column} - ${err.msg}`,
          COLORS.red
        )
      );
    }
    return;
  }

  console.log(colorize("\nEntrada válida.", COLORS.green));

  mostrarTablaTokens(input);

  console.log(colorize("\nÁrbol de análisis sintáctico:\n", COLORS.cyan));
  console.log(archy(toArchy(tree, parser)));

  const visitor = new CustomMatiasVisitor();

  console.log(colorize("\n--- Traducción a JavaScript ---", COLORS.cyan));
  const jsCode = visitor.translateToJS(tree);
  console.log(colorize(jsCode, COLORS.green));
  console.log(colorize("--- Fin de Traducción ---", COLORS.cyan));

  visitor.executeJS();
}

main();
