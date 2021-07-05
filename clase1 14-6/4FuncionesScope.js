//                                  FUNCIONES

/*
Funciones declarada
*/

// La siguiente función suma los valores que recibe por parámetros

function sumar(a,b) { //la función sumar recibe dos parametros
    return a + b //devuelve la suma de los parametros
} 

let resultadoDeLaSuma = sumar(2,5);           // ejecuto la función enviando los parametros correspondiente asignando a la variable resultadoDeLaSuma el valor devuelo por la función

//console.log(resultadoDeLaSuma) //devuelve 7

/*
Funciones expresada
Son funciones anónimas que se asignan como valor de una variable
*/

let coordenadas = function(lat,long) {        //la funcion anónima (sin nombre) se le asigna como valor a la variable coordenadas
    return 'Las coordenadas son ' + lat + ' de latitud sur y ' + long + ' de longitud oeste' 
}

let miCasa = coordenadas("34°36'","58°26")

//console.log(miCasa)



/*
                                        Scope (alcance)
*/

let nombre = "Gaby"

function miNombreEs() {
    return nombre //toma la variable del scope global
}

//console.log(miNombreEs()) //ejecuto la función y veo su resultado por consola

var miProfesion = "programador"; //declaro una variable en el scope global

function miProfesionEs() {
    var miProfesion = "profesor"; //declaro una variable con el mismo nombre en el scope local
    return miProfesion
}

//.log(miProfesionEs()); //al ejecutar la función, la misma devuelve profesor, porque prioriza el scope local

//console.log(miProfesion); //devuelve progamador, porque toma el valor de variable global

