// Passagem por valor e por referência

const a = {name: 'Teste'}
const b = a // b recebe o mesmo endereço que a possui, onde está o objeto

console.log(a, b)

b.name = 'Opa'
console.log(a, b)

let c = 3 // 3 é um tipo primitivo, então pe feita uma cópia do valor, ou contrário do teste acima
let d = c
d++
console.log(c, d)

/* -------------------------------------------------- */

let valor // não inicializada
console.log(valor)

valor = null // ausência de valor
console.log(valor)
// console.log(valor.toString()) // Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined de forma explicíta
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)




