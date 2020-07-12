function Soma() {
    let soma = 0
    for(i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(Soma())
console.log(Soma(1))
console.log(Soma(1.1, 2.2, 3.3))
console.log(Soma(1.1, 2.2, "Teste"))

console.log(Soma('a', 'b', 'c')) 
// com soma iniciado com 0, é esperado que o 0 seja concatenado também
