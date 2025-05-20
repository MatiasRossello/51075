Para hacer uso del analizador sintáctico seguir las siguientes reglas:



Para clonar el repositorio hay que correr el siguiente comando en CMD:

git clone https://github.com/MatiasRossello/51075.git

Si se quiere, abrir carpeta de proyecto en Visual Studio Code accediendo a
File -> Open Folder
Seleccionar la carpeta del proyecto titulada “proyecto Node JS”

Si se quiere visualizar el árbol generado por ANTLR hacer click sobre Matias.g4 y luego presionar F5 en el teclado

Para probar el funcionamiento del analizador abrir CMD sobre la carpeta del proyecto titulada “Proyecto-Analizador-Rosselló”
Ejecutar el comando “npm start”

Cada vez que se quiera cambiar el input se debera copiar el texto de los archivos “Input_Valido_1”,  “Input_Invalido_1”,  “Input_Valido_2”,   “Input_Invalido_2” 
y pegar el texto en el archivo “input.txt” contenido dentro de la carpeta “proyecto Node JS”

Por cada vez que se cambia el contenido del archivo “input.txt es muy importante guardar los cambios con CTRL + S”

**EJEMPLO DE USO**

https://youtu.be/rqUQpeg-L90




**DATOS SOBRE LOS INPUTS**

-----------------------------

INPUT: Input_Invalido_1

TIPO DE ERROR : Sintactico

ERRORES:

Falta ; luego de imprimir

Falta : luego de caso

------------------------------

INPUT: Input_Invalido_2

TIPO DE ERROR: Lexico

ERRORES:

Dice seguuun en vez de segun

Dice cazo en vez de caso

-----------------------------

