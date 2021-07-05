//  FUNCION CONSTRUCTORA

// Crea moldes para crear objetos literales. Buena práctica comenzar el nombre de la funcion con una letra mayuscula

function Mascota (nombre, edad, color){ // entre ( ) los párametros
    this.nombre = nombre // y se utiliza "this." para definir el nombre de la propiedad para esta funcion 
    this.edad = edad
    this.color = color
}



let mascota1 = new Mascota('Ropu', 4, 'negro')
console.log(mascota1);
//console.log('Su nombre es '+mascota1.nombre+', tiene '+mascota1.edad+' años de edad y es de color '+mascota1.color);

/* let mascota2 = new Mascota('Loki', 1, 'negro')
let loki = 'Su nombre es '+mascota2.nombre+', tiene '+mascota2.edad+' año de edad y es de color '+mascota2.color
console.log(loki);

let kira = new Mascota('Kira', 3, 'Marron')
console.log('Su nombre es '+kira.nombre+', tiene '+kira.edad+' años de edad y es de color '+kira.color); */