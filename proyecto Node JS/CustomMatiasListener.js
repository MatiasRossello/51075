import MatiasVisitor from './generated/MatiasVisitor.js';

class CustomMatiasVisitor extends MatiasVisitor {
    visitProg(ctx) {

        for (let i = 0; i < ctx.instruccion().length; i++) {
            this.visit(ctx.instruccion(i));
        }
    }

    visitInstruccion(ctx) {
        return this.visit(ctx.seleccion());
    }

    visitSeleccion(ctx) {
        const exprValue = this.visit(ctx.expresion());

        let casoEncontrado = false;
        for (let i = 0; i < ctx.caso().length; i++) {
            const casoCtx = ctx.caso(i);
            const constante = this.visit(casoCtx.constante());

            if (constante === exprValue) {
                this.visitCaso(casoCtx);
                casoEncontrado = true;
                break;
            }
        }

        if (!casoEncontrado && ctx.caso_defecto()) {
            this.visit(ctx.caso_defecto());
        }
    }

    visitCaso(ctx) {
        for (let i = 0; i < ctx.sentencia().length; i++) {
            this.visit(ctx.sentencia(i));
        }
    }

    visitCaso_defecto(ctx) {
        for (let i = 0; i < ctx.sentencia().length; i++) {
            this.visit(ctx.sentencia(i));
        }
    }

    visitSentencia(ctx) {
        if (ctx.salida()) {
            for (let i = 0; i < ctx.salida().length; i++) {
                this.visit(ctx.salida(i));
            }
        } else if (ctx.terminar()) {
            this.visit(ctx.terminar());
        }
    }

    visitSalida(ctx) {
        const texto = ctx.CADENA().getText();
        console.log(texto.slice(1, -1));
    }

    visitTerminar(ctx) {
        console.log("Terminando ejecución.");
    }

    visitExpresion(ctx) {
        return this.visit(ctx.constante());
    }

    visitConstante(ctx) {
        if (ctx.CADENA()) {
            return ctx.CADENA().getText().slice(1, -1);
        } else if (ctx.NUMERO()) {
            return Number(ctx.NUMERO().getText());
        }
    }
}

export default CustomMatiasVisitor;
