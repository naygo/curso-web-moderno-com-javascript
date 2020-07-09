// par nome/valor
const saudacao = 'Opa' // contexto léxico 1
                      // em que local físico do meu código foi definido, nesse contexto neste arquivo

function exec() {
    const saudacao = 'Falaaa' // contexto léxico 2
    return saudacao
}

//const saudacao = 'Opa' 
/* 
Erro! Identificador já definido antes, se fosse 'var' até funcionaria, 
mas o valor seria sobrescrito
*/

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)

