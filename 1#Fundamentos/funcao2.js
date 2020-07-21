// Armazenando uma função em uma variável
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma função arrow em uma variável
const soma = (a, b) => {
    return a + b
}

console.log(soma(4, 9))

// Retorno implícito 
const subtracao = (a, b) => a - b // função de única linha, única sentença de código
console.log(subtracao(5,2))

const imprimirTexto = a => console.log(a)
imprimirTexto('Show de bola!')