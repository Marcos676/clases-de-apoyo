const process = require("process");
const { leerJSON, guardarJSON } = require("./estudiantes");

let listaEstudiantes = leerJSON();

const comando = process.argv[2];

switch (comando) {
  case "listar":
    listaEstudiantes.forEach((estudiante) => {
      console.log(estudiante);
    });

    break;

  case "crear":
    let nombre = process.argv[3];
    let estudia = process.argv[4];

    if (estudia === "true") {
      estudia = true;
    } else if (estudia === "false") {
      estudia = false;
    } else {
      console.log("ehhh acá va un true o false !!");
      break;
    }

    let estudiante = {
      estudiante: nombre,
      estudia: estudia,
    };

    listaEstudiantes.push(estudiante);

    guardarJSON(listaEstudiantes);

    console.log("Se agrego con exito !!");

    break;

  case "borrar":
    let result = listaEstudiantes.find(
      (alumno) => alumno.estudiante === process.argv[3]
    );

    if (result) {
      let listaActualizada = listaEstudiantes.filter(
        (alumno) => alumno.estudiante !== process.argv[3]
      );

      guardarJSON(listaActualizada);

      console.log(`Se ha eliminado a ${process.argv[3]}`);
    } else {
      console.log("No se ah encontrado este estudiante");
    }

    break;

  default:
    break;
}