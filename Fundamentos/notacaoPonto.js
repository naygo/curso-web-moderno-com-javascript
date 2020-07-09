// MEMBROS são sempre acessados a partir da notação ponto '.'

console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'
// obj1['nome'] = 'Bola2' - fornece mais flexibilidade, porém não é muito recomendado
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome
    this.exec = function() {
        console.log('Exec...')
    }
} 
// com THIS é possível criar atributos e funções que serão expostas para fora quando for instaciada
const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()




