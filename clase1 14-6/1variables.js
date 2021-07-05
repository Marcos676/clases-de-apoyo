
 console.log(56); // imprime lo que se le pase por consola

 console.log('hola mundo!'); //string: cadena de texto (se escribe la palabra entre comillas simples)

  console.log("hola mundo!"); //string: cadena de texto (se escribe la palabra entre comillas dobles)

  //VARIABLES

//puedo guardar los valores en una variable

//declarando con 'var'

var nombre; //declaro una variable usando la palabra reservada 'var'
nombre = "Juan"; //le asigno el valor "Juan" a la variable 'nombre' utilizando el operador de asignación '='

var color = "blanco"; //puedo declarar y a la vez asignarle valor a la variable
color = "azul"; //puedo asignarle otro valor a la variable 'color'
var color = "rojo"; //cuando declaro una variable con 'var' puedo volver a declararla con el mismo nombre e incluso cambiarle su valor




//declarando con 'let'

let apellido; //declaro una variable usando la palabra reservada 'let'
apellido = "Gonzalez"; //le asigno el valor "Gonzalez" a la variable 'apellido utilizando el operador de asignación '='
apellido = "Fernandez"; //puedo asignarle otro valor a la variable 'apellido'

// OJO!!!
// let apellido; //no puedo volver a declarar con el mismo nombre una variable que ya ha sido declarada




//declarando con 'const'   de constante
const DNI = 72365476234     // una vez declarada con un valor, este no se puede cambiar
DNI = 72365476234           //no se puede
const DNI = 72365476234     //no se puede


//Particularidad de var

if(true){
    var varEnIf = "estoy en un if"
}

console.log(varEnIf) //Puedo acceder a la variable declarada con var


if(true){
    let varEnIf = "estoy en un if"
}

console.log(varEnIf) // No puedo acceder a la variable declarada con let   con const tampoco se puede

