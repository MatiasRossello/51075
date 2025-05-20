// Generated from c:/Users/matia/Desktop/Analizador Sintactico/51075/proyecto Node JS/Matias.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class MatiasLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		SEGUN=1, HACER=2, FINSEGUN=3, CASO=4, DEFECTO=5, IMPRIMIR=6, SALIR=7, 
		LLAVE_ABRE=8, LLAVE_CIERRA=9, DOS_PUNTOS=10, PUNTO_Y_COMA=11, PAR_ABRE=12, 
		PAR_CIERRA=13, CADENA=14, NUMERO=15, WS=16;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"SEGUN", "HACER", "FINSEGUN", "CASO", "DEFECTO", "IMPRIMIR", "SALIR", 
			"LLAVE_ABRE", "LLAVE_CIERRA", "DOS_PUNTOS", "PUNTO_Y_COMA", "PAR_ABRE", 
			"PAR_CIERRA", "CADENA", "NUMERO", "LETRA", "DIGITO", "SIMBOLO", "LETRA_CON_ACENTO", 
			"CARACTER", "WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'segun'", "'hacer'", "'finsegun'", "'caso'", "'defecto'", "'imprimir'", 
			"'salir'", "'{'", "'}'", "':'", "';'", "'('", "')'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "SEGUN", "HACER", "FINSEGUN", "CASO", "DEFECTO", "IMPRIMIR", "SALIR", 
			"LLAVE_ABRE", "LLAVE_CIERRA", "DOS_PUNTOS", "PUNTO_Y_COMA", "PAR_ABRE", 
			"PAR_CIERRA", "CADENA", "NUMERO", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public MatiasLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "Matias.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\u0004\u0000\u0010\u008b\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002"+
		"\u0001\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002"+
		"\u0004\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002"+
		"\u0007\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002"+
		"\u000b\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e"+
		"\u0002\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011"+
		"\u0002\u0012\u0007\u0012\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014"+
		"\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0001\t\u0001\t\u0001"+
		"\n\u0001\n\u0001\u000b\u0001\u000b\u0001\f\u0001\f\u0001\r\u0001\r\u0005"+
		"\rk\b\r\n\r\f\rn\t\r\u0001\r\u0001\r\u0001\u000e\u0004\u000es\b\u000e"+
		"\u000b\u000e\f\u000et\u0001\u000f\u0001\u000f\u0001\u0010\u0001\u0010"+
		"\u0001\u0011\u0001\u0011\u0001\u0012\u0001\u0012\u0001\u0013\u0001\u0013"+
		"\u0001\u0013\u0001\u0013\u0003\u0013\u0083\b\u0013\u0001\u0014\u0004\u0014"+
		"\u0086\b\u0014\u000b\u0014\f\u0014\u0087\u0001\u0014\u0001\u0014\u0000"+
		"\u0000\u0015\u0001\u0001\u0003\u0002\u0005\u0003\u0007\u0004\t\u0005\u000b"+
		"\u0006\r\u0007\u000f\b\u0011\t\u0013\n\u0015\u000b\u0017\f\u0019\r\u001b"+
		"\u000e\u001d\u000f\u001f\u0000!\u0000#\u0000%\u0000\'\u0000)\u0010\u0001"+
		"\u0000\u0005\u0002\u0000AZaz\u0001\u000009\u0005\u0000 !,,..:;??\n\u0000"+
		"\u00c1\u00c1\u00c9\u00c9\u00cd\u00cd\u00d3\u00d3\u00da\u00da\u00e1\u00e1"+
		"\u00e9\u00e9\u00ed\u00ed\u00f3\u00f3\u00fa\u00fa\u0003\u0000\t\n\r\r "+
		" \u008b\u0000\u0001\u0001\u0000\u0000\u0000\u0000\u0003\u0001\u0000\u0000"+
		"\u0000\u0000\u0005\u0001\u0000\u0000\u0000\u0000\u0007\u0001\u0000\u0000"+
		"\u0000\u0000\t\u0001\u0000\u0000\u0000\u0000\u000b\u0001\u0000\u0000\u0000"+
		"\u0000\r\u0001\u0000\u0000\u0000\u0000\u000f\u0001\u0000\u0000\u0000\u0000"+
		"\u0011\u0001\u0000\u0000\u0000\u0000\u0013\u0001\u0000\u0000\u0000\u0000"+
		"\u0015\u0001\u0000\u0000\u0000\u0000\u0017\u0001\u0000\u0000\u0000\u0000"+
		"\u0019\u0001\u0000\u0000\u0000\u0000\u001b\u0001\u0000\u0000\u0000\u0000"+
		"\u001d\u0001\u0000\u0000\u0000\u0000)\u0001\u0000\u0000\u0000\u0001+\u0001"+
		"\u0000\u0000\u0000\u00031\u0001\u0000\u0000\u0000\u00057\u0001\u0000\u0000"+
		"\u0000\u0007@\u0001\u0000\u0000\u0000\tE\u0001\u0000\u0000\u0000\u000b"+
		"M\u0001\u0000\u0000\u0000\rV\u0001\u0000\u0000\u0000\u000f\\\u0001\u0000"+
		"\u0000\u0000\u0011^\u0001\u0000\u0000\u0000\u0013`\u0001\u0000\u0000\u0000"+
		"\u0015b\u0001\u0000\u0000\u0000\u0017d\u0001\u0000\u0000\u0000\u0019f"+
		"\u0001\u0000\u0000\u0000\u001bh\u0001\u0000\u0000\u0000\u001dr\u0001\u0000"+
		"\u0000\u0000\u001fv\u0001\u0000\u0000\u0000!x\u0001\u0000\u0000\u0000"+
		"#z\u0001\u0000\u0000\u0000%|\u0001\u0000\u0000\u0000\'\u0082\u0001\u0000"+
		"\u0000\u0000)\u0085\u0001\u0000\u0000\u0000+,\u0005s\u0000\u0000,-\u0005"+
		"e\u0000\u0000-.\u0005g\u0000\u0000./\u0005u\u0000\u0000/0\u0005n\u0000"+
		"\u00000\u0002\u0001\u0000\u0000\u000012\u0005h\u0000\u000023\u0005a\u0000"+
		"\u000034\u0005c\u0000\u000045\u0005e\u0000\u000056\u0005r\u0000\u0000"+
		"6\u0004\u0001\u0000\u0000\u000078\u0005f\u0000\u000089\u0005i\u0000\u0000"+
		"9:\u0005n\u0000\u0000:;\u0005s\u0000\u0000;<\u0005e\u0000\u0000<=\u0005"+
		"g\u0000\u0000=>\u0005u\u0000\u0000>?\u0005n\u0000\u0000?\u0006\u0001\u0000"+
		"\u0000\u0000@A\u0005c\u0000\u0000AB\u0005a\u0000\u0000BC\u0005s\u0000"+
		"\u0000CD\u0005o\u0000\u0000D\b\u0001\u0000\u0000\u0000EF\u0005d\u0000"+
		"\u0000FG\u0005e\u0000\u0000GH\u0005f\u0000\u0000HI\u0005e\u0000\u0000"+
		"IJ\u0005c\u0000\u0000JK\u0005t\u0000\u0000KL\u0005o\u0000\u0000L\n\u0001"+
		"\u0000\u0000\u0000MN\u0005i\u0000\u0000NO\u0005m\u0000\u0000OP\u0005p"+
		"\u0000\u0000PQ\u0005r\u0000\u0000QR\u0005i\u0000\u0000RS\u0005m\u0000"+
		"\u0000ST\u0005i\u0000\u0000TU\u0005r\u0000\u0000U\f\u0001\u0000\u0000"+
		"\u0000VW\u0005s\u0000\u0000WX\u0005a\u0000\u0000XY\u0005l\u0000\u0000"+
		"YZ\u0005i\u0000\u0000Z[\u0005r\u0000\u0000[\u000e\u0001\u0000\u0000\u0000"+
		"\\]\u0005{\u0000\u0000]\u0010\u0001\u0000\u0000\u0000^_\u0005}\u0000\u0000"+
		"_\u0012\u0001\u0000\u0000\u0000`a\u0005:\u0000\u0000a\u0014\u0001\u0000"+
		"\u0000\u0000bc\u0005;\u0000\u0000c\u0016\u0001\u0000\u0000\u0000de\u0005"+
		"(\u0000\u0000e\u0018\u0001\u0000\u0000\u0000fg\u0005)\u0000\u0000g\u001a"+
		"\u0001\u0000\u0000\u0000hl\u0005\"\u0000\u0000ik\u0003\'\u0013\u0000j"+
		"i\u0001\u0000\u0000\u0000kn\u0001\u0000\u0000\u0000lj\u0001\u0000\u0000"+
		"\u0000lm\u0001\u0000\u0000\u0000mo\u0001\u0000\u0000\u0000nl\u0001\u0000"+
		"\u0000\u0000op\u0005\"\u0000\u0000p\u001c\u0001\u0000\u0000\u0000qs\u0003"+
		"!\u0010\u0000rq\u0001\u0000\u0000\u0000st\u0001\u0000\u0000\u0000tr\u0001"+
		"\u0000\u0000\u0000tu\u0001\u0000\u0000\u0000u\u001e\u0001\u0000\u0000"+
		"\u0000vw\u0007\u0000\u0000\u0000w \u0001\u0000\u0000\u0000xy\u0007\u0001"+
		"\u0000\u0000y\"\u0001\u0000\u0000\u0000z{\u0007\u0002\u0000\u0000{$\u0001"+
		"\u0000\u0000\u0000|}\u0007\u0003\u0000\u0000}&\u0001\u0000\u0000\u0000"+
		"~\u0083\u0003\u001f\u000f\u0000\u007f\u0083\u0003%\u0012\u0000\u0080\u0083"+
		"\u0003!\u0010\u0000\u0081\u0083\u0003#\u0011\u0000\u0082~\u0001\u0000"+
		"\u0000\u0000\u0082\u007f\u0001\u0000\u0000\u0000\u0082\u0080\u0001\u0000"+
		"\u0000\u0000\u0082\u0081\u0001\u0000\u0000\u0000\u0083(\u0001\u0000\u0000"+
		"\u0000\u0084\u0086\u0007\u0004\u0000\u0000\u0085\u0084\u0001\u0000\u0000"+
		"\u0000\u0086\u0087\u0001\u0000\u0000\u0000\u0087\u0085\u0001\u0000\u0000"+
		"\u0000\u0087\u0088\u0001\u0000\u0000\u0000\u0088\u0089\u0001\u0000\u0000"+
		"\u0000\u0089\u008a\u0006\u0014\u0000\u0000\u008a*\u0001\u0000\u0000\u0000"+
		"\u0005\u0000lt\u0082\u0087\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}