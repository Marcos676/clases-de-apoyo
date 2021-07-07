// OPERADORES

//ARITMETICOS

//signo +

console.log(5 + 4) //suma, devuelve 9
console.log("5" + 4) //en este caso los numeros no se suman sino que se concatenan, devuelve "54"

//signo -

console.log(5 - 4); //resta, devuelve 1

//signo *

console.log(5 * 4); //multiplicación, devuelve 20

//signo /

console.log(25 / 4); //división, devuelve 5

// incremento

let i = 1; //declaro la variable i y le asigno el valor 1
i++ //incrementa el valor de i en una unidad, que sería lo mismo que i = i + 1
console.log(i) //devuelve 2

// decremento

i-- //decrementa el valor de i en una unidad, que sería lo mismo que i = i - 1
console.log(i) //devuelve 1

// módulo

/*
El operador módulo es muy útil para identificar números pares, los cuales siempre devuelve 0 como resto cuando les aplica módulo de 2
*/

console.log(20 % 7) //devuelve el resto de la división, en este caso 6
console.log(20 % 2) //devuelve 0






//DE COMPARACION

/*
simple ==
solo compara valores
*/

//igualdad

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
console.log(2 === 2); //devuelve true
console.log(2 === "2"); //devuelve false
console.log(2 === 3); //devuelve false
console.log(2 === "3"); //devuelve false

//desigualdad
console.log(2 !== 2); //devuelve false
console.log(2 !== "2"); //devuelve true
console.log(2 !== 3); //devuelve true
console.log(2 !== "3"); //devuelve true


/*
En las comparaciones de mayor o igual que (>=) y menor o igual que (<=), siempre va primero el simbolo mayor (>) o menor (<) y luego el igual (=)
*/

//mayor que 
console.log(2 > 2); //devuelve false

//mayor e igual que 
console.log(2 >= 2); //devuelve true

//menor que 
console.log(2 < 3); //devuelve true

//menor o igual que 
console.log(2 <= 3); //devuelve true







//LOGICOS

/*
permiten combinar valores booleanos. Devuelve un booleano
*/

//operador AND (&&) - y

console.log((4 > 3) && (3 != 2)); //si ambas comparaciones son verdaderas, el resultado será true
console.log((2 > 3) && (3 != 2)); //si una de la dos comparaciones es falsa, el resultado será false
console.log((2 > 3) && (3 === 2)); //si ambas comparaciones son falsas, el resultado será false


//operador OR (||) - o

console.log((4 > 3) || (3 != 2)); //si ambas comparaciones son verdaderas, el resultado será true
console.log((2 > 3) || (3 != 2)); //si UNA de la dos comparaciones es verdadera, el resultado será true
console.log((2 > 3) || (3 === 2)); //si ambas comparaciones son falsas, el resultado será false


//operador NOT (!) - no

console.log(!false) // devuelve true
console.log(!(10 === 10)); // devuelve false





//DE CONCATENACION

/*
Sirve para unir cadenas de texto o string
*/

let nombre = "Manuel";
let apellido = "Garcia";

let nombreCompleto = nombre + " " + apellido; //devuelve Manuel Garcia

/*
Si se mezclan tipos de datos con un string todo se convertirán en un string
*/

console.log("M" + 1); // devuelve M1
console.log("1" + 1); // devuelve 11
console.log(2 + "2"); // devuelve 22
console.log("verdadero" + false); // devuelve verdaerofalse
console.log(true + "falso"); //devuelve truefalso
console.log(true + false); // devuelve 1