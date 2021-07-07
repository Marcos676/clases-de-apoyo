/* console.log(56); // imprime cosas en pantalla 

var numero = 55;    //numero o number

//console.log(numero); 


var nombre = "fulano"; //string  //cadena de texto

console.log(nombre);


var verdadero = true;    //booleanos verdadero
var falso = false;   //booleanos falso

console.log(verdadero);

var sinDato;

console.log(sinDato);    //devuelve undefined */





/* var color = "violeta"

console.log(color);

var color = "azul"

console.log(color); */



/* let color = 'verde' //declarando una variable
console.log(color);

color = 'naranja' //cambio el valor a una variable
console.log(color);

color = 'azul'
console.log(color); */


/*  //const es una constante y no se le puede cambiar el tipo de dato
console.log(color);


color = "marron"
console.log(color); */



//console.log(8 == "8"); //evalua el valor
//console.log(8 === "8"); //tambien te evalua el tipo de dato


//console.log(8 != "8")
//console.log(8 !== "8")  //tambien te evalua el tipo de dato



let colores = ["azul", "verde", "naranja", 45, true]

//console.log(colores[1]);

//console.log(colores.length);


let alumnx = { 
    nombre : "fulana",                       //en un objeto literal asignamos valores a las porpiedades con ":"
    edad : 25,                               // si tiene mas de una propiedad se pone una coma(,) al final del dato
    estudia: true
    //key : value
}

//console.log(alumnx.edad);


//Ejemplo, si quiero para cambiar la contraseña y tengo restricciones

/* let contrasenia = "12"

//console.log(contrasenia.length);

//la contraseña tiene que ser mayor a 3 pero menor a 20
if ((contrasenia.length > 3)&&(contrasenia.length < 20)){ 

    console.log("puede cambiar la contraseña");

} else {

    console.log("no puede cambiar la contraseña");

} */



function hola (n1, n2) {
   
    let resultado = n1 + n2


    return resultado

}

console.log(   hola(7,3)   );

