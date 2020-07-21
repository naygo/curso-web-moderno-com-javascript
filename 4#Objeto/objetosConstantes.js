/**
 * Porque os atributos de um objeto associado à
 * uma constante são alterados? 
 */

const pessoa = { nome: 'João' }
// pessoa -> 123 (endereço de memória) -> {...} (objeto)
pessoa.nome = 'Pedro' // a constante continua apontando para 123
console.log(pessoa)

// pessoa -> 456
//pessoa = {nome: 'Ana'} // Erro!

Object.freeze(pessoa) // objeto congelado, torna o objeto em si constante
pessoa.nome = 'Maria' 
pessoa.end = 'Rua ABC'
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'Nayla', idade: 19 })
console.log(pessoaConstante)