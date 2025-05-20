grammar Matias;

prog
    : instruccion+ EOF
    ;

instruccion
    : seleccion
    ;

seleccion
    : SEGUN expresion HACER LLAVE_ABRE caso* caso_defecto? LLAVE_CIERRA FINSEGUN
    ;

caso
    : CASO constante DOS_PUNTOS sentencia*
    ;

caso_defecto
    : DEFECTO DOS_PUNTOS sentencia*
    ;

sentencia
    : salida+
    | terminar
    ;

salida
    : IMPRIMIR PAR_ABRE CADENA PAR_CIERRA PUNTO_Y_COMA
    ;

terminar
    : SALIR PUNTO_Y_COMA
    ;

expresion
    : constante
    ;

constante
    : CADENA
    | NUMERO
    ;

SEGUN: 'segun';
HACER: 'hacer';
FINSEGUN: 'finsegun';
CASO: 'caso';
DEFECTO: 'defecto';
IMPRIMIR: 'imprimir';
SALIR: 'salir';

LLAVE_ABRE: '{';
LLAVE_CIERRA: '}';
DOS_PUNTOS: ':';
PUNTO_Y_COMA: ';';
PAR_ABRE: '(';
PAR_CIERRA: ')';

CADENA: '"' (CARACTER)* '"';
NUMERO: DIGITO+;

fragment LETRA: [a-zA-Z];
fragment DIGITO: [0-9];
fragment SIMBOLO: '.' | ',' | '!' | '?' | ':' | ';' | ' ';
fragment LETRA_CON_ACENTO: 'á' | 'é' | 'í' | 'ó' | 'ú' | 'Á' | 'É' | 'Í' | 'Ó' | 'Ú';
fragment CARACTER: LETRA | LETRA_CON_ACENTO | DIGITO | SIMBOLO;

WS: [ \t\r\n]+ -> skip;

