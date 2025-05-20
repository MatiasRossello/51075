// Generated from c:/Users/matia/Analizadores/Carpeta para entrega/Proyecto-Analizador-Rossello/Matias.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import MatiasListener from './MatiasListener.js';
import MatiasVisitor from './MatiasVisitor.js';

const serializedATN = [4,1,16,84,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,1,0,4,0,22,8,0,11,0,12,0,23,1,0,
1,0,1,1,1,1,1,2,1,2,1,2,1,2,1,2,5,2,35,8,2,10,2,12,2,38,9,2,1,2,3,2,41,8,
2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,5,3,50,8,3,10,3,12,3,53,9,3,1,4,1,4,1,4,5,
4,58,8,4,10,4,12,4,61,9,4,1,5,4,5,64,8,5,11,5,12,5,65,1,5,3,5,69,8,5,1,6,
1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,8,1,8,1,9,1,9,1,9,0,0,10,0,2,4,6,8,10,
12,14,16,18,0,1,1,0,14,15,80,0,21,1,0,0,0,2,27,1,0,0,0,4,29,1,0,0,0,6,45,
1,0,0,0,8,54,1,0,0,0,10,68,1,0,0,0,12,70,1,0,0,0,14,76,1,0,0,0,16,79,1,0,
0,0,18,81,1,0,0,0,20,22,3,2,1,0,21,20,1,0,0,0,22,23,1,0,0,0,23,21,1,0,0,
0,23,24,1,0,0,0,24,25,1,0,0,0,25,26,5,0,0,1,26,1,1,0,0,0,27,28,3,4,2,0,28,
3,1,0,0,0,29,30,5,1,0,0,30,31,3,16,8,0,31,32,5,2,0,0,32,36,5,8,0,0,33,35,
3,6,3,0,34,33,1,0,0,0,35,38,1,0,0,0,36,34,1,0,0,0,36,37,1,0,0,0,37,40,1,
0,0,0,38,36,1,0,0,0,39,41,3,8,4,0,40,39,1,0,0,0,40,41,1,0,0,0,41,42,1,0,
0,0,42,43,5,9,0,0,43,44,5,3,0,0,44,5,1,0,0,0,45,46,5,4,0,0,46,47,3,18,9,
0,47,51,5,10,0,0,48,50,3,10,5,0,49,48,1,0,0,0,50,53,1,0,0,0,51,49,1,0,0,
0,51,52,1,0,0,0,52,7,1,0,0,0,53,51,1,0,0,0,54,55,5,5,0,0,55,59,5,10,0,0,
56,58,3,10,5,0,57,56,1,0,0,0,58,61,1,0,0,0,59,57,1,0,0,0,59,60,1,0,0,0,60,
9,1,0,0,0,61,59,1,0,0,0,62,64,3,12,6,0,63,62,1,0,0,0,64,65,1,0,0,0,65,63,
1,0,0,0,65,66,1,0,0,0,66,69,1,0,0,0,67,69,3,14,7,0,68,63,1,0,0,0,68,67,1,
0,0,0,69,11,1,0,0,0,70,71,5,6,0,0,71,72,5,12,0,0,72,73,5,14,0,0,73,74,5,
13,0,0,74,75,5,11,0,0,75,13,1,0,0,0,76,77,5,7,0,0,77,78,5,11,0,0,78,15,1,
0,0,0,79,80,3,18,9,0,80,17,1,0,0,0,81,82,7,0,0,0,82,19,1,0,0,0,7,23,36,40,
51,59,65,68];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class MatiasParser extends antlr4.Parser {

    static grammarFileName = "Matias.g4";
    static literalNames = [ null, "'segun'", "'hacer'", "'finsegun'", "'caso'", 
                            "'defecto'", "'imprimir'", "'salir'", "'{'", 
                            "'}'", "':'", "';'", "'('", "')'" ];
    static symbolicNames = [ null, "SEGUN", "HACER", "FINSEGUN", "CASO", 
                             "DEFECTO", "IMPRIMIR", "SALIR", "LLAVE_ABRE", 
                             "LLAVE_CIERRA", "DOS_PUNTOS", "PUNTO_Y_COMA", 
                             "PAR_ABRE", "PAR_CIERRA", "CADENA", "NUMERO", 
                             "WS" ];
    static ruleNames = [ "prog", "instruccion", "seleccion", "caso", "caso_defecto", 
                         "sentencia", "salida", "terminar", "expresion", 
                         "constante" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = MatiasParser.ruleNames;
        this.literalNames = MatiasParser.literalNames;
        this.symbolicNames = MatiasParser.symbolicNames;
    }



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, MatiasParser.RULE_prog);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 21; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 20;
	            this.instruccion();
	            this.state = 23; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1);
	        this.state = 25;
	        this.match(MatiasParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, MatiasParser.RULE_instruccion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 27;
	        this.seleccion();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	seleccion() {
	    let localctx = new SeleccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, MatiasParser.RULE_seleccion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 29;
	        this.match(MatiasParser.SEGUN);
	        this.state = 30;
	        this.expresion();
	        this.state = 31;
	        this.match(MatiasParser.HACER);
	        this.state = 32;
	        this.match(MatiasParser.LLAVE_ABRE);
	        this.state = 36;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===4) {
	            this.state = 33;
	            this.caso();
	            this.state = 38;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 40;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===5) {
	            this.state = 39;
	            this.caso_defecto();
	        }

	        this.state = 42;
	        this.match(MatiasParser.LLAVE_CIERRA);
	        this.state = 43;
	        this.match(MatiasParser.FINSEGUN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	caso() {
	    let localctx = new CasoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, MatiasParser.RULE_caso);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45;
	        this.match(MatiasParser.CASO);
	        this.state = 46;
	        this.constante();
	        this.state = 47;
	        this.match(MatiasParser.DOS_PUNTOS);
	        this.state = 51;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===6 || _la===7) {
	            this.state = 48;
	            this.sentencia();
	            this.state = 53;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	caso_defecto() {
	    let localctx = new Caso_defectoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, MatiasParser.RULE_caso_defecto);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 54;
	        this.match(MatiasParser.DEFECTO);
	        this.state = 55;
	        this.match(MatiasParser.DOS_PUNTOS);
	        this.state = 59;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===6 || _la===7) {
	            this.state = 56;
	            this.sentencia();
	            this.state = 61;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sentencia() {
	    let localctx = new SentenciaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, MatiasParser.RULE_sentencia);
	    try {
	        this.state = 68;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 6:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 63; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 62;
	            		this.salida();
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 65; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,5, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 67;
	            this.terminar();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	salida() {
	    let localctx = new SalidaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, MatiasParser.RULE_salida);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 70;
	        this.match(MatiasParser.IMPRIMIR);
	        this.state = 71;
	        this.match(MatiasParser.PAR_ABRE);
	        this.state = 72;
	        this.match(MatiasParser.CADENA);
	        this.state = 73;
	        this.match(MatiasParser.PAR_CIERRA);
	        this.state = 74;
	        this.match(MatiasParser.PUNTO_Y_COMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	terminar() {
	    let localctx = new TerminarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, MatiasParser.RULE_terminar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 76;
	        this.match(MatiasParser.SALIR);
	        this.state = 77;
	        this.match(MatiasParser.PUNTO_Y_COMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expresion() {
	    let localctx = new ExpresionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, MatiasParser.RULE_expresion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 79;
	        this.constante();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	constante() {
	    let localctx = new ConstanteContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, MatiasParser.RULE_constante);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 81;
	        _la = this._input.LA(1);
	        if(!(_la===14 || _la===15)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

MatiasParser.EOF = antlr4.Token.EOF;
MatiasParser.SEGUN = 1;
MatiasParser.HACER = 2;
MatiasParser.FINSEGUN = 3;
MatiasParser.CASO = 4;
MatiasParser.DEFECTO = 5;
MatiasParser.IMPRIMIR = 6;
MatiasParser.SALIR = 7;
MatiasParser.LLAVE_ABRE = 8;
MatiasParser.LLAVE_CIERRA = 9;
MatiasParser.DOS_PUNTOS = 10;
MatiasParser.PUNTO_Y_COMA = 11;
MatiasParser.PAR_ABRE = 12;
MatiasParser.PAR_CIERRA = 13;
MatiasParser.CADENA = 14;
MatiasParser.NUMERO = 15;
MatiasParser.WS = 16;

MatiasParser.RULE_prog = 0;
MatiasParser.RULE_instruccion = 1;
MatiasParser.RULE_seleccion = 2;
MatiasParser.RULE_caso = 3;
MatiasParser.RULE_caso_defecto = 4;
MatiasParser.RULE_sentencia = 5;
MatiasParser.RULE_salida = 6;
MatiasParser.RULE_terminar = 7;
MatiasParser.RULE_expresion = 8;
MatiasParser.RULE_constante = 9;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MatiasParser.RULE_prog;
    }

	EOF() {
	    return this.getToken(MatiasParser.EOF, 0);
	};

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MatiasListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MatiasListener ) {
	        listener.exitProg(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MatiasVisitor ) {
	        return visitor.visitProg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MatiasParser.RULE_instruccion;
    }

	seleccion() {
	    return this.getTypedRuleContext(SeleccionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MatiasListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MatiasListener ) {
	        listener.exitInstruccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MatiasVisitor ) {
	        return visitor.visitInstruccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SeleccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MatiasParser.RULE_seleccion;
    }

	SEGUN() {
	    return this.getToken(MatiasParser.SEGUN, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	HACER() {
	    return this.getToken(MatiasParser.HACER, 0);
	};

	LLAVE_ABRE() {
	    return this.getToken(MatiasParser.LLAVE_ABRE, 0);
	};

	LLAVE_CIERRA() {
	    return this.getToken(MatiasParser.LLAVE_CIERRA, 0);
	};

	FINSEGUN() {
	    return this.getToken(MatiasParser.FINSEGUN, 0);
	};

	caso = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CasoContext);
	    } else {
	        return this.getTypedRuleContext(CasoContext,i);
	    }
	};

	caso_defecto() {
	    return this.getTypedRuleContext(Caso_defectoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MatiasListener ) {
	        listener.enterSeleccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MatiasListener ) {
	        listener.exitSeleccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MatiasVisitor ) {
	        return visitor.visitSeleccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CasoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MatiasParser.RULE_caso;
    }

	CASO() {
	    return this.getToken(MatiasParser.CASO, 0);
	};

	constante() {
	    return this.getTypedRuleContext(ConstanteContext,0);
	};

	DOS_PUNTOS() {
	    return this.getToken(MatiasParser.DOS_PUNTOS, 0);
	};

	sentencia = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SentenciaContext);
	    } else {
	        return this.getTypedRuleContext(SentenciaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MatiasListener ) {
	        listener.enterCaso(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MatiasListener ) {
	        listener.exitCaso(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MatiasVisitor ) {
	        return visitor.visitCaso(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Caso_defectoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MatiasParser.RULE_caso_defecto;
    }

	DEFECTO() {
	    return this.getToken(MatiasParser.DEFECTO, 0);
	};

	DOS_PUNTOS() {
	    return this.getToken(MatiasParser.DOS_PUNTOS, 0);
	};

	sentencia = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SentenciaContext);
	    } else {
	        return this.getTypedRuleContext(SentenciaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MatiasListener ) {
	        listener.enterCaso_defecto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MatiasListener ) {
	        listener.exitCaso_defecto(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MatiasVisitor ) {
	        return visitor.visitCaso_defecto(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SentenciaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MatiasParser.RULE_sentencia;
    }

	salida = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SalidaContext);
	    } else {
	        return this.getTypedRuleContext(SalidaContext,i);
	    }
	};

	terminar() {
	    return this.getTypedRuleContext(TerminarContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MatiasListener ) {
	        listener.enterSentencia(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MatiasListener ) {
	        listener.exitSentencia(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MatiasVisitor ) {
	        return visitor.visitSentencia(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SalidaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MatiasParser.RULE_salida;
    }

	IMPRIMIR() {
	    return this.getToken(MatiasParser.IMPRIMIR, 0);
	};

	PAR_ABRE() {
	    return this.getToken(MatiasParser.PAR_ABRE, 0);
	};

	CADENA() {
	    return this.getToken(MatiasParser.CADENA, 0);
	};

	PAR_CIERRA() {
	    return this.getToken(MatiasParser.PAR_CIERRA, 0);
	};

	PUNTO_Y_COMA() {
	    return this.getToken(MatiasParser.PUNTO_Y_COMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MatiasListener ) {
	        listener.enterSalida(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MatiasListener ) {
	        listener.exitSalida(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MatiasVisitor ) {
	        return visitor.visitSalida(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TerminarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MatiasParser.RULE_terminar;
    }

	SALIR() {
	    return this.getToken(MatiasParser.SALIR, 0);
	};

	PUNTO_Y_COMA() {
	    return this.getToken(MatiasParser.PUNTO_Y_COMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MatiasListener ) {
	        listener.enterTerminar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MatiasListener ) {
	        listener.exitTerminar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MatiasVisitor ) {
	        return visitor.visitTerminar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpresionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MatiasParser.RULE_expresion;
    }

	constante() {
	    return this.getTypedRuleContext(ConstanteContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MatiasListener ) {
	        listener.enterExpresion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MatiasListener ) {
	        listener.exitExpresion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MatiasVisitor ) {
	        return visitor.visitExpresion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConstanteContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MatiasParser.RULE_constante;
    }

	CADENA() {
	    return this.getToken(MatiasParser.CADENA, 0);
	};

	NUMERO() {
	    return this.getToken(MatiasParser.NUMERO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MatiasListener ) {
	        listener.enterConstante(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MatiasListener ) {
	        listener.exitConstante(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MatiasVisitor ) {
	        return visitor.visitConstante(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




MatiasParser.ProgContext = ProgContext; 
MatiasParser.InstruccionContext = InstruccionContext; 
MatiasParser.SeleccionContext = SeleccionContext; 
MatiasParser.CasoContext = CasoContext; 
MatiasParser.Caso_defectoContext = Caso_defectoContext; 
MatiasParser.SentenciaContext = SentenciaContext; 
MatiasParser.SalidaContext = SalidaContext; 
MatiasParser.TerminarContext = TerminarContext; 
MatiasParser.ExpresionContext = ExpresionContext; 
MatiasParser.ConstanteContext = ConstanteContext; 
