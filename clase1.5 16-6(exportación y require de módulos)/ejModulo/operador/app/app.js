//      "./"  para referenciar a la carpeta en la que este archivo esta parado, es decir, para decirle al codigo que vamos a empezar a buscar un archivo desde acá

//  "../" para salir de la carpeta en la que me encuentro

//el require se puede comenzar con un "./" o un "../"


let suma = require('../suma') //requiero un archivo que fue exportado


console.log(suma(2,3));//utilizo la funcion requerida de un archivo diferente (importada)