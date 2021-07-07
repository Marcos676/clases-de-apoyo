//Metodos de array
//Podemos decir que los metodos son herramientas que nos permiten manipular un array

//ARECORDATORIO:   Los Indices del array se cuenta desde 0. La longitud desde 1. 
let notas = [3,4,5,6,7,8,9]//Este array tiene una LONGITUD de elementos 7 y un total de 6 INDICES

// .push  AGREGA VALORES AL FINAL. SI SE GUARDA EN UNA VARIABLE TE DEVUELVE LA LONGITID DEL NUEVO ARRAY
//notas.push(1,4,4)// .push agregan + valores a una variable en el final
//notas.push(10)

// .unshift  AGREGA VALORES AL COMIENZO. SI SE GUARDA EN UNA VARIABLE TE DEVUELVE LA LONGITID DEL NUEVO ARRAY
//notas.unshift(1,5)// .shift agregan + valores a una variable al principio
//notas.unshift(10)

//.shift    QUITA EL PRIMER ELEMENTO. SI SE GUARDA EN UNA VARIABLE TE DEVUELVE EL VALOR QUE SE QUITO
//notas.shift()//quita el primer valor del array
//let extraidoShift = notas.pop() // tambien puedo guardar el valor extraido en una variable
//console.log(extraidoShift);

// .pop     QUITA EL ULTIMO ELEMENTO. SI SE GUARDA EN UNA VARIABLE TE DEVUELVE EL VALOR QUE SE QUITO
//notas.pop()// .pop quita el ultimo valor del array
//let extraidoPop = notas.pop()// tambien puedo guardar el valor extraido en una variable
//console.log(extraidoPop);

//console.log(notas);



let colores = ['rojo', 'azul', 'amarillo','rojo']

// .indexOf()
/* 
console.log(colores.indexOf('azul'));//devuelve el indice del texto a buscar dentro del array
let colorDeColor = colores.indexOf('amarillo')//puede guardarse la posicion en una variable
console.log(colorDeColor);
console.log(colores.indexOf('violeta'));// cuando el dato a buscar no aparece devuelve -1
 */

// .includes()
//como el indexOf pero devuelde booleanos. true si lo encuentra y false si no lo encuentra
/*
console.log(colores.includes('azul')); // devuelve true
console.log(colores.includes('azulado'));// devuelve false
 */

// .lastIndexOf()
//console.log(colores.lastIndexOf('rojo'));// hace lo mismo que el indexOf sin embargo comienza a buscar en sentido contrario

// .join()
//devuelve el array como string en forma de texto separado

console.log(typeof colores);
let color = colores.join()//si el () esta vacio lo separa con ","
console.log(color);
console.log(typeof color);
let color1 = colores.join(' - ')// en el () se le puede poner cualquier string ej:("-") que reemplace a la "," 
console.log(color1);