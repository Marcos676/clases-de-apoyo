                                    /* VARIABLES */

//Diferencias entre var, let, const

//let y var


//con var
var varNombre = "fulano"
console.log(varNombre);

var varNombre = "mengano"//se puede declarar otra vez la misma variable pero sobreescribe el valor anterior
console.log(varNombre);

varNombre = "mengano" //tambien se le puede cambiar el valor de la variable declarada con var solo refiriendo su nombre
console.log(varNombre);



//con let
let letNombre = "fulano"
console.log(letNombre);

let letNombre = "mengano" //Identifier 'letNombre' has already been declared       El identificador 'letNombre' ya ha sido declarado
console.log(letNombre);

letNombre = "mengano" // la unica forma de cambiar es el valor es refiriendo a la variable y asignandole otro valor
console.log(letNombre);


//con const
const constNombre = "fulano"
console.log(constNombre);

/* const constNombre = "mengano"//tampoco se puede volver a declarar la misma variable
console.log(constNombre); */

constNombre = "mengano"// directamente nos e puede cambiar el valor de una variable declarada con const
console.log(constNombre); // Assignment to constant variable.         Asignación a variable constante.




//Característica de var
if (1 === 1) {
    var varEnIf = "soy un var declarada dentro de un if"  //con var podemos acceder a una variable que fue declarada dentro de la estructura de un if
}

//console.log(varEnIf); //Se puede acceder a la variable


if (1 === 1) {
    let letEnIf = "soy un let declarada dentro de un if"  //con let y const no se puede
}

//console.log(letEnIf);   // no se puede acceder a la variable
//En consola aparece el siguiente error:  letEnIf is not defined    letEnIf no esta definido













                            /* OPEREADORES */


//ARITMETICOS

//signo +

console.log(5 + 4) //suma, devuelve 9
console.log("5" + 4) //en este caso los numeros no se suman sino que se concatenan, devuelve 54



// incremento

let i = 1; //declaro la variable i y le asigno el valor 1
i++ //incrementa el valor de i en una unidad, que sería lo mismo que i = i + 1
console.log(i) //devuelve 2

// decremento

i-- //decrementa el valor de i en una unidad, que sería lo mismo que i = i - 1
console.log(i) //devuelve 1





//DE COMPARACION

/*
simple ==
solo compara valores
*/

//igualdad
console.log("\ "); //devuelve un salto de linea
console.log(2 == 2); //devuelve true
console.log(2 == "2"); //devuelve true
console.log(2 == 3); //devuelve false
console.log(2 == "3"); //devuelve false

//desigualdad
console.log("\ "); //devuelve un salto de linea
console.log(2 != 2); //devuelve false
console.log(2 != "2"); //devuelve false
console.log(2 != 3); //devuelve true
console.log(2 != "3"); //devuelve true

/*
estricta ===
compara valores y tipos de datos
*/

//igualdad
console.log("\ "); //devuelve un salto de linea
console.log(2 === 2); //devuelve true
console.log(2 === "2"); //devuelve false
console.log(2 === 3); //devuelve false
console.log(2 === "3"); //devuelve false

//desigualdad
console.log("\ "); //devuelve un salto de linea
console.log(2 !== 2); //devuelve false
console.log(2 !== "2"); //devuelve true
console.log(2 !== 3); //devuelve true
console.log(2 !== "3"); //devuelve true




//LOGICOS

/*
permiten combinar valores booleanos. Tambien devuelve un booleano
*/

//operador AND (&&) - y

console.log((4 > 3) && (3 != 2)); //si ambas comparaciones son verdaderas, el resultado será true
console.log((2 > 3) && (3 != 2)); //si una de la dos comparaciones es falsa, el resultado será false
console.log((2 > 3) && (3 === 2)); //si ambas comparaciones son falsas, el resultado será false

console.log("\ "); //devuelve un salto de linea

//operador OR (||) - o

console.log((4 > 3) || (3 != 2)); //si ambas comparaciones son verdaderas, el resultado será true
console.log((2 > 3) || (3 != 2)); //si una de la dos comparaciones es verdadera, el resultado será true
console.log((2 > 3) || (3 === 2)); //si ambas comparaciones son falsas, el resultado será false

console.log("\ "); //devuelve un salto de linea

//operador NOT (!) - no

console.log(!false) // devuelve true
console.log(!(10 === 10)); // devuelve false

console.log("\ "); //devuelve un salto de linea

//DE CONCATENACION

/*
Sirve para unir cadenas de texto o string
*/

let nombre = "Manuel";
let apellido = "Garcia";

let nombreCompleto = nombre + " " + apellido; //devuelve Manuel Garcia

/*
Si se mezclan tipos de datos, todos se convertirán a string
*/

console.log("M" + 1); // devuelve M1
console.log("1" + 1); // devuelve 11
console.log(2 + "2"); // devuelve 22
console.log("verdadero" + false); // devuelve verdaerofalse
console.log(true + "falso"); //devuelve truefalso
console.log(true + false); // devuelve 1