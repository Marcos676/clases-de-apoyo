const fs = require('fs')
const process = require('process')
const { leerJSON } = require('./funcionalidades')

const estudiantes = leerJSON()

const comando = process.argv[2]// [node, app, crear, Homero ]

const nombre = process.argv[3]

switch (comando) {
    case 'listar':
        estudiantes.forEach(alumno => {
            console.log("El estudian " + alumno.estudiante + " estudia? " +  alumno.estudia);
        });

        break;
        case 'crear':
            let alumno = {
                estudiante: nombre,
                estudia: false
            }

            estudiantes.push(alumno)

            
            const listaEnString = JSON.stringify(estudiantes, null, 4)

            fs.writeFileSync('./data/estudiantes.json', listaEnString, 'utf-8')

            console.log("Se creo con exito");
            

            break;
    default:
        break;
}








for (/* 1 */let contador = 0;
    /* 2, 5 */contador < leerJSON().length;
   /* 4, 7 */contador++) {

  /* 3, 6 *///console.log(estududiantes[contador]);

}