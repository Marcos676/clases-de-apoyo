const fs = require("fs");

module.exports = {
    leerJSON: () => JSON.parse(fs.readFileSync("./data/estudiantes.json", "utf-8")),

    guardarJSON: (data) => fs.writeFileSync("./data/estudiantes.json", JSON.stringify(data, null, 2), "utf-8" )
}

