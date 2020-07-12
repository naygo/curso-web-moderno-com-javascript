// Função JS é First-Class Object (Citizens)
// Higher-order function

// criar de forma literal
function Fun1() {

}

// armazenar em variável
const Fun2 = function() {

}

// armazenar em array
const Fun3 = [function(a, b) {
    return a + b
}, Fun1, Fun2]
console.log(Fun3[0](2, 3))

// armazenar em um atributo de um objeto
const obj = {}
obj.falar = function() {
    return 'Opa'
}
console.log(obj.falar())

// passar função como parametro
function run(fun) {
    fun()
}
run(function() { console.log('Executando... ')})

// uma função pode retornar/conter uma função
function soma(a, b) {
    return function(c) {
        console.log(a + b +c)
    }
}
soma (2, 3)(4)
const cinco = soma(2, 3)
cinco(4)


