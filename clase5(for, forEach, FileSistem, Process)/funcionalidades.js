const fs = require('fs');

const estudiates = {
    leerJSON: () => JSON.parse( fs.readFileSync('./data/estudiantes.json', 'utf-8') ),
}

module.exports = estudiates
