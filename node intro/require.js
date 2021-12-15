// MÓDULOS NATIVOS:

// Require é uma maneira de chamar módulos que já são nativos do nodejs, ou até mesmo criar
// Path é um módulo já existente no nodejs segundo documentação
//const path = require('path');
//console.log(path.basename(__filename))
// Assim estou pedindo qual é o nome(filename) base(basename) do arquivo

// MEUS MÓDULOS:
// crio a constant com nome que quiser
// faço require com a localização do módulo criado (exports.js)
// e quando utilizado node  deve retornar o que está no módulo
const myModule = require('./exports.js')

console.log(myModule)