// estratégia número 1 para gerar valor padrão
function Soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1  
    return a + b + c
}   
console.log(Soma1(), Soma1(3), Soma1(1, 2, 3), Soma1(0, 0, 0))

// estratégia número 2, 3 e 4 para gerar valor padrão
function Soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c
}
console.log(Soma2(), Soma2(3), Soma2(1, 2, 3), Soma2(0, 0, 0))

// valor padrão do ES2015
function Soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}
console.log(Soma3(), Soma3(3), Soma3(1, 2, 3), Soma3(0, 0, 0))