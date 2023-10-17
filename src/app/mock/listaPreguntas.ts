import { Pregunta } from "../modelo/pregunta";

export const PREGUNTAS: Pregunta[] = [
    {pregunta: "¿Cómo se define TypeScript?", respuesta: "TypeScript es un lenguaje de programación de código abierto desarrollado por Microsoft que se basa en JavaScript."},
    {pregunta: "¿Cuál es la principal diferencia de TypeScript respecto de JavaScript?", respuesta:"TypeScript es un lenguaje de programación de tipado estático que requiere declarar tipos de datos, mientras que JavaScript es un lenguaje de tipado dinámico sin esta característica."},
    {pregunta: "Muestra la lista de tipos básicos de TypeScript.", respuesta: "number, string, boolean, null, undefined, object, symbol, any, void, never, array y tuple."},
    {pregunta: "¿Con qué tres elementos podemos crear un tipo personalizado en TypeScript?", respuesta: "Interfaces, Tipos (Type aliases) y Clases."},
    {pregunta: "¿Puedo ejecutar TypeScript en un navegador? Explica tu respuesta.", respuesta: "No, TypeScript no se puede ejecutar directamente en un navegador, ya que es un superset de JavaScript y requiere compilación a JavaScript antes de la ejecución en el navegador."},
    {pregunta: "Entonces, ¿cómo es que puedo ver con las herramientas del desarrollador del navegador los archivo ts?", respuesta: "Porque los navegadores modernos pueden cargar y mostrar los archivos .ts originales como parte de la depuración, pero la ejecución real en el navegador es con archivos JavaScript."},
    {pregunta: "¿Para qué sirve el archivo tsconfig.json?", respuesta: "Sirve para configurar y personalizar el comportamiento del compilador de TypeScript (tsc) en un proyecto"}

]