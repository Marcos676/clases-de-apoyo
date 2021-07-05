/* let numeros = [ 7, 3 ,6, 56 ]

let masCinco = numeros.map( (numero) => numero * 3 )


 let menoresADiez = numeros.filter( (numero) => {
    numero > 100000
 })

menoresADiez ? console.log(menoresADiez) : null

console.log(numeros);

console.log(menoresADiez)

 */


/* let objeto = {
   edad: 87,
   suma: (n1, n2) => n1 + n2,
   name: "Roberto"
}

let { edad, suma, name } = objeto

console.log(suma('hola ', 'mundo'));

let numeros = [ 7, 3 ,6, 56 ]

//let siete = numeros[0]

let [siete, , seis] = numeros

console.log(siete); */


/* let objeto = {
   edad: 87,
   suma: (n1, n2) => n1 + n2,
   name: "Roberto"
}

let objeto2 = {
   color: 'rojo',
   resta: (n1, n2) => n1 - n2,
   apellido: "gutierrez"
}

let todoJunto = {
   ...objeto,
   ...objeto2
}

console.log(todoJunto); */

/* let numeros = [ 7, 3 ,6, 56 ]
let numeros2 = [ 5, 53 ,46, 356 ]

let todo = [ ...numeros, ...numeros2 ]

console.log(todo) */