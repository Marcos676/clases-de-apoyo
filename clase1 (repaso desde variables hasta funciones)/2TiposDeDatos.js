// TIPOS DE DATOS

//STRING

/*
-> Son cadenas de caracteres o cadenas de texto
*/

let pais = 'Argentina'; //se escribe la palabra entre comillas
let capital = "Buenos Aires"; //tambien se pueden usar comillas dobles y tantas palabras como se necesite dentro de las comillas

//NUMBER

/*
-> Números enteros o decimales
*/

let habitantes = 44490000; //se escribe solo numeros sin comillas
let superficie = 2.78; //los decimales se separan usando un punto (.)

let dolar = '160' //un número entre comillas es intepretado como un string

//BOOLEAN

/*
-> Expresión booleana, es decir verdadero o falso
*/

let verdadero = true //expresión verdadera
let falso = false //expresión falsa

let vive = 'true' //la palabra true entre comillas es interpretada como string
let ejercita = 'false' //la palabra false entre comillas es interpretada como string


let valorCero = 0; //el numero cero puede evaluarse como false
let sinPalabras = "" //un string vacio (ojo, sin espacios), tambien se puede evaluar como false

/*
Anteponiendo un signo de exclamación (!), expresamos lo contraio
*/
/* 
console.log(!valorCero); //muestra consola true
console.log(!sinPalabras) //muestra en consola true
 */




// TIPOS ESPECIALES DE DATOS, O ESTADOS

/*
null : es sinónimo de vacío
*/

let nulo = null; //se lo puede dar como valor a una variable

console.log(nulo) //mostrará en pantalla null

/*
undefined : es decir, indefinido. Se suele percibir este estado cuando una variable no tiene un valor asignado
*/

let indefinido;

console.log(indefinido) //mostrará en pantalla undefined

/*
NaN : Not A Number, (no es un número)
*/


console.log("abc" * 3) //muestra en consola NaN porque un string no se puede multiplicar por un numero