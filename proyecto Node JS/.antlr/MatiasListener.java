// Generated from c:/Users/matia/Desktop/Analizador Sintactico/51075/proyecto Node JS/Matias.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link MatiasParser}.
 */
public interface MatiasListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link MatiasParser#prog}.
	 * @param ctx the parse tree
	 */
	void enterProg(MatiasParser.ProgContext ctx);
	/**
	 * Exit a parse tree produced by {@link MatiasParser#prog}.
	 * @param ctx the parse tree
	 */
	void exitProg(MatiasParser.ProgContext ctx);
	/**
	 * Enter a parse tree produced by {@link MatiasParser#instruccion}.
	 * @param ctx the parse tree
	 */
	void enterInstruccion(MatiasParser.InstruccionContext ctx);
	/**
	 * Exit a parse tree produced by {@link MatiasParser#instruccion}.
	 * @param ctx the parse tree
	 */
	void exitInstruccion(MatiasParser.InstruccionContext ctx);
	/**
	 * Enter a parse tree produced by {@link MatiasParser#seleccion}.
	 * @param ctx the parse tree
	 */
	void enterSeleccion(MatiasParser.SeleccionContext ctx);
	/**
	 * Exit a parse tree produced by {@link MatiasParser#seleccion}.
	 * @param ctx the parse tree
	 */
	void exitSeleccion(MatiasParser.SeleccionContext ctx);
	/**
	 * Enter a parse tree produced by {@link MatiasParser#caso}.
	 * @param ctx the parse tree
	 */
	void enterCaso(MatiasParser.CasoContext ctx);
	/**
	 * Exit a parse tree produced by {@link MatiasParser#caso}.
	 * @param ctx the parse tree
	 */
	void exitCaso(MatiasParser.CasoContext ctx);
	/**
	 * Enter a parse tree produced by {@link MatiasParser#caso_defecto}.
	 * @param ctx the parse tree
	 */
	void enterCaso_defecto(MatiasParser.Caso_defectoContext ctx);
	/**
	 * Exit a parse tree produced by {@link MatiasParser#caso_defecto}.
	 * @param ctx the parse tree
	 */
	void exitCaso_defecto(MatiasParser.Caso_defectoContext ctx);
	/**
	 * Enter a parse tree produced by {@link MatiasParser#sentencia}.
	 * @param ctx the parse tree
	 */
	void enterSentencia(MatiasParser.SentenciaContext ctx);
	/**
	 * Exit a parse tree produced by {@link MatiasParser#sentencia}.
	 * @param ctx the parse tree
	 */
	void exitSentencia(MatiasParser.SentenciaContext ctx);
	/**
	 * Enter a parse tree produced by {@link MatiasParser#salida}.
	 * @param ctx the parse tree
	 */
	void enterSalida(MatiasParser.SalidaContext ctx);
	/**
	 * Exit a parse tree produced by {@link MatiasParser#salida}.
	 * @param ctx the parse tree
	 */
	void exitSalida(MatiasParser.SalidaContext ctx);
	/**
	 * Enter a parse tree produced by {@link MatiasParser#terminar}.
	 * @param ctx the parse tree
	 */
	void enterTerminar(MatiasParser.TerminarContext ctx);
	/**
	 * Exit a parse tree produced by {@link MatiasParser#terminar}.
	 * @param ctx the parse tree
	 */
	void exitTerminar(MatiasParser.TerminarContext ctx);
	/**
	 * Enter a parse tree produced by {@link MatiasParser#expresion}.
	 * @param ctx the parse tree
	 */
	void enterExpresion(MatiasParser.ExpresionContext ctx);
	/**
	 * Exit a parse tree produced by {@link MatiasParser#expresion}.
	 * @param ctx the parse tree
	 */
	void exitExpresion(MatiasParser.ExpresionContext ctx);
	/**
	 * Enter a parse tree produced by {@link MatiasParser#constante}.
	 * @param ctx the parse tree
	 */
	void enterConstante(MatiasParser.ConstanteContext ctx);
	/**
	 * Exit a parse tree produced by {@link MatiasParser#constante}.
	 * @param ctx the parse tree
	 */
	void exitConstante(MatiasParser.ConstanteContext ctx);
}