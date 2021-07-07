//Repaso

// con var puedo declarar una variable con el mismo nombre
var n1 = 1

console.log(n1);

var n1 = "bfhjk"

console.log(n1);


//además cuado acceder a ellas aunque esten declaradas dentro de un if
if (true) {
    var n2 = 7
}

console.log(n2);


//solo puedo cambiar el valor de las variables declaradas con let de esta forma
let n1 = 9

n1 = "gjggkh" //nombro a la variable y le asigno otro valor


//en las variables puedo guardar los resultados de las operaciones
let n1 = 1
let n2 = 2
let resultado = n2 + n1;


// cambiarles el valor utilizando su valor anterior en la misma
resultado = resultado / 2;

console.log(resultado);


//ejemplo de arrow function
let suma = (n1 , n2) => {
    return n1 + n2
}

console.log(suma( 14, 6));

//operador de negación   !    devuelve el contrario de true o false
console.log(!(9 <= 9));        

// == Compara los valores
// === comparacion estricta (además compara los tipod de datos)


if (9 === "9") {    //(la condición a evaluar)

    console.log("verdadero"); //el código que se ejecuta al cumplirse esta condición

} else if (9 > 10) {    //segunda condición

    console.log("verdadero 2");//el código que se ejecuta al cumplirse esta segunda condición

} else { //si no se cumple ninguna
    console.log("falso"); // se ejecuta este código
}



