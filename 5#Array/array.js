// é um objeto

console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana'] // notação literal
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length)

aprovados[9] = 'Gabriel' // todos os elementos até o indice 9 ficarão indefined
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() // ordena lista
console.log(aprovados)

delete aprovados[1] // coloca undefined neste posição
console.log(aprovados[1], aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1 , 0, 'Elemento 1', 'Elemento 1') 
// estrutura = splice(indice inicial, quantos vao ser excluidos, elementos adicionados)
// adiciona elementos em determinado indice
// remover um elemento em um array
// remove e adicionar elementos ao mesmo tempo
console.log(aprovados)