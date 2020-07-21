const jogos = ['Minecraft', 'LoL', 'GTA V', 'Overcooked']
console.log('Array: ' + jogos)

// ---> POP - remove o último elemento do array
jogos.pop()
console.log('POP: ' + jogos)

//---> PUSH - adiciona elemento ao final do array
jogos.push('Among Us')
console.log('PUSH: ' + jogos)

// ---> SHIFT - remove o primeiro elemento
jogos.shift() 
console.log('SHIFT: ' + jogos)

// ---> UNSHIFT - adiciona elemento no ínicio do array
jogos.unshift('Tomb Raider') 
console.log('UNSHIFT: ' + jogos)

// ---> SPLICE - splice pode adicionar e remover elementos
// estrutura = splice(indice inicial, quantos vao ser excluidos, elementos adicionados)
jogos.splice(2, 0, 'Crash', 'Mario') // adicionando
console.log('SPLICE 1: ' + jogos)

jogos.splice(3, 1) // elemento de indice 1 removido
console.log('SPLICE 2: ' + jogos)

jogos.splice(1, 1, 'Jogo 1', 'Jogo 2') // removendo e adicionando elementos
console.log('SPLICE 3: ' + jogos)

// ---> SLICE - cria um novo array a partir de indices
// estrutura slice(índice inicial, índice final)
jogos.push('Jogo1', 'Jogo2', 'Jogo3')
console.log('Array: ' + jogos)

const algunsJogos1 = jogos.slice(2)
console.log('SLICE 1:' + algunsJogos1)

const algunsJogos2 = jogos.slice(1, 3)
console.log('SLICE 2:' + algunsJogos2)



