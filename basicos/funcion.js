//                                  FUNCIONES

/*
FUNCION DECLARADA
Son funciones que reciben un nombre formal y se cargan de inmediato en memoria
*/

// La siguiente función suma los valores que recibe por parámetros

function sumar(a,b) { //la función sumar recibe dos parametros
    return a + b //devuelve la suma de los parametros
} 

let resultadoDeLaSuma = sumar(2,5); // ejecuto la función enviando los parametros correspondiente asignando a la variable resultadoDeLaSuma el valor devuelo por la función

//console.log(resultadoDeLaSuma) //devuelve 7





/*
FUNCIÓN EXPRESADA
Son funciones anónimas que se asignan como valor de una variable
*/

let coordenadas = function(lat,long) { //la funcion anónima (sin nombre) se le asigna como valor a la variable coordenadas
    return 'Las coordenadas son ' + lat + ' de latitud sur y ' + long + ' de longitud oeste' 
}

let miCasa = coordenadas("34°36'","58°26")

//console.log(miCasa)