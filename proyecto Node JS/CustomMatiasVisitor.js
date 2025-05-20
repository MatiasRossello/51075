import MatiasVisitor from "./generated/MatiasVisitor.js";

class CustomMatiasVisitor extends MatiasVisitor {
  constructor() {
    super();
    this.shouldExit = false;
    this.jsTranslation = "";
    this.executionOutput = [];
    this.executeMode = true; // Flag to determine if we're in execution mode
  }

  // Translate the input to JavaScript
  translateToJS(ctx) {
    this.jsTranslation = "";
    // Reset state
    this.shouldExit = false;
    this.executionOutput = [];
    this.executeMode = false; // Set to false for translation mode
    this.visit(ctx);
    this.executeMode = true; // Reset to true
    return this.jsTranslation;
  }

  // Execute the pseudocode and return the output
  executePseudocode(ctx) {
    // Reset state before execution
    this.shouldExit = false;
    this.executionOutput = [];
    this.executeMode = true; // Set to true for execution mode

    console.log("Executing pseudocode...");

    // Visit the tree to execute the pseudocode
    this.visit(ctx);

    return this.executionOutput;
  }

  visitConstante(ctx) {
    if (ctx.CADENA()) {
      const text = ctx.CADENA().getText();
      return text.substring(1, text.length - 1);
    } else if (ctx.NUMERO()) {
      return Number(ctx.NUMERO().getText());
    }
    return null;
  }

  visitExpresion(ctx) {
    return this.visit(ctx.constante());
  }

  visitSentencia(ctx) {
    if (ctx.salida && ctx.salida().length > 0) {
      return this.visit(ctx.salida()[0]);
    } else if (ctx.terminar && ctx.terminar()) {
      return this.visit(ctx.terminar());
    }
    return null;
  }

  visitSalida(ctx) {
    if (!ctx || !ctx.CADENA) {
      return null;
    }
    const texto = ctx.CADENA().getText();
    const mensaje = texto.substring(1, texto.length - 1);
    return mensaje;
  }

  visitTerminar(ctx) {
    this.shouldExit = true;
    return "break";
  }

  visitCaso(ctx) {
    const valorCaso = this.visit(ctx.constante());
    const sentencias = ctx.sentencia();
    return { valorCaso, sentencias };
  }

  visitCaso_defecto(ctx) {
    const sentencias = ctx.sentencia();
    return sentencias;
  }

  extractSalidaMensaje(sentenciaCtx) {
    if (
      sentenciaCtx &&
      sentenciaCtx.salida &&
      sentenciaCtx.salida().length > 0
    ) {
      const salidaCtx = sentenciaCtx.salida()[0];
      if (salidaCtx && salidaCtx.CADENA) {
        const texto = salidaCtx.CADENA().getText();
        return texto.substring(1, texto.length - 1);
      }
    }
    return null;
  }

  generateJSforSeleccion(ctx) {
    const valorExpresion = this.visit(ctx.expresion());

    let js = `switch (${JSON.stringify(valorExpresion)}) {\n`;

    const casosCtx = ctx.caso();
    for (let casoCtx of casosCtx) {
      const { valorCaso, sentencias } = this.visitCaso(casoCtx);
      js += `  case ${JSON.stringify(valorCaso)}:\n`;

      for (let sentenciaCtx of sentencias) {
        const mensaje = this.extractSalidaMensaje(sentenciaCtx);
        if (mensaje !== null) {
          js += `    console.log(${JSON.stringify(mensaje)});\n`;
        } else if (sentenciaCtx.terminar && sentenciaCtx.terminar()) {
          js += `    break;\n`;
        }
      }
    }

    const defectoCtx = ctx.caso_defecto();
    if (defectoCtx) {
      js += `  default:\n`;
      const sentencias = defectoCtx.sentencia();
      for (let sentenciaCtx of sentencias) {
        const mensaje = this.extractSalidaMensaje(sentenciaCtx);
        if (mensaje !== null) {
          js += `    console.log(${JSON.stringify(mensaje)});\n`;
        } else if (sentenciaCtx.terminar && sentenciaCtx.terminar()) {
          js += `    break;\n`;
        }
      }
    }

    js += `}\n`;

    return js;
  }

  visitSeleccion(ctx) {
    if (!this.executeMode) {
      this.jsTranslation += this.generateJSforSeleccion(ctx);
      return;
    }

    const valorExpresion = this.visit(ctx.expresion());

    this.shouldExit = false;

    const casosCtx = ctx.caso();
    const defectoCtx = ctx.caso_defecto();

    let casoEncontrado = null;
    let casoEncontradoValor = null;

    for (let casoCtx of casosCtx) {
      const { valorCaso, sentencias } = this.visitCaso(casoCtx);

      if (valorExpresion === valorCaso) {
        casoEncontrado = sentencias;
        casoEncontradoValor = valorCaso;
        break;
      }
    }

    if (!casoEncontrado && defectoCtx) {
      casoEncontrado = this.visitCaso_defecto(defectoCtx);
    }

    if (casoEncontrado) {
      for (let sentenciaCtx of casoEncontrado) {
        // Process each statement directly here
        if (sentenciaCtx.salida && sentenciaCtx.salida().length > 0) {
          const salidaCtx = sentenciaCtx.salida()[0];
          const mensaje = this.visitSalida(salidaCtx);
          if (mensaje) {
            this.executionOutput.push(mensaje);
          }
        } else if (sentenciaCtx.terminar && sentenciaCtx.terminar()) {
          this.shouldExit = true;
        }

        if (this.shouldExit) {
          break;
        }
      }
    }
  }

  visitProg(ctx) {
    for (let instr of ctx.instruccion()) {
      this.visit(instr);
      if (this.shouldExit) {
        break;
      }
    }
  }

  visitInstruccion(ctx) {
    return this.visit(ctx.seleccion());
  }

  executeJS() {
    if (this.jsTranslation) {
      console.log("\n--- Resultado de JavaScript ---");
      try {
        const executeCode = new Function(this.jsTranslation);
        executeCode();
      } catch (error) {
        console.error("Error ejecutando JavaScript:", error);
      }
    }
  }
}

export default CustomMatiasVisitor;
