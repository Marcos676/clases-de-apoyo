//ARRAYS
/*
-> O tambien llamado arreglos, permiten almacenar varios datos del mismo o distinto tipo
-> Se declaran como variables a las que se asigna su valor dentro de corchetes [], donde cada elemento va separado por comas (,)
*/

let colores = [] // este es un array vacío
colores = ['celeste','blanco'] // el array contiene dos elementos: 'celeste' y 'blanco'
console.log(colores) //muestra por consola todo el contenido del array de una vez

let datosGeograficos = ['America del Sur',5,4361,'Buenos Aires',true] //un array puede contener varios tipos de datos
//los datos entre corchetes poseen posisiones siendo la primera 0 y luego ascendiendo
console.log(datosGeograficos) //muestra por consola el contenido del array

console.log(datosGeograficos[0]);//Para llamar a un solo dato del array, a continuacion de la variable se pone entre [] el índice del dato


//Indice del array se cuenta desde 0. La longitud desde 1. 
let notas = [3,4,5,6,7,8,9]//Este array tiene una LONGITUD de elementos 7 y un total de 6 INDICES
//          [0,1,2,3,4,5,6]   índices

console.log(notas.length); // me devuelve la cantidad de elementos que tiene un array

console.log(notas[0]); // devuelve el primer elemento, ya que el índice se empeza a contar desde 0




//      OBJETOS LITERALES

let republicaArgentina = {
    nombre : "Argentina",            //en un objeto literal asignamos valores a las porpiedades con ":"
    capital : "Buenos Aires",        // si tiene mas de una propiedad se pone una coma(,) al final del dato
    superficie : 2.78,
    poblacion : 44490000,
    monarquia : false,
    paisesLimitrofes : ['Bolivia', 'Brasil', 'Chile', 'Paraguay', 'Uruguay'] //una propiedad puede almacenar una array
    //key : value
}

console.log(republicaArgentina) //mostrará en consola todas las propiedades y sus correspondientes valores

/*
si quiero acceder al valor de una propiedad específica uso el 'dot notation', es decir un punto (.) luego del nombre del objeto literal, seguido del nombre del propiedad 
*/
console.log(republicaArgentina.capital) //mostrará en consola Buenos Aires



/*
se pueden asignar funciones como valor a las propiedades del objeto literal. Cuando esto sucede la propiedad se tranforma en un método del objeto.
*/

let persona = {
    nombre : "Jorge",
    saludar : function(){
        return 'Hola ' + this.nombre //la palabra reservada 'this' reemplaza al nombre del objeto
    }
}

console.log( persona.saludar() ) //para acceder al método saludar debemos ejecutarlo, es decir agregarle los paréntesis luego del nombre. En este caso mostrará en la consola:  Hola Jorge