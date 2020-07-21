let comparaComThis = function(param) {
    console.log(this === param)
}
comparaComThis(global)

console.log('----------')
const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

console.log('----------')
let comparaComThisArrow = param => console.log(this === param) // definida dentro de um módulo do node
// dessa maneira, o dono do this é o módulo
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

console.log('----------')
// usando bind dentro de um arrow para tentar mudar o this
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
    // resultado = a arrow é mais forte, ela não muda
comparaComThisArrow(module.exports)
