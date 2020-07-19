const moduloA = require('../../moduloA') //se as letras maúsculas não forem respeitadas no linux, não irá funcionar
console.log(moduloA.ola)

const saudacao = require('saudacao') // é buscado o index.js
console.log(saudacao.ola)

const c = require('./pastaC')
console.log(c.ola2)

// módulo core do node
const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia')
    res.end()
}).listen(8080)