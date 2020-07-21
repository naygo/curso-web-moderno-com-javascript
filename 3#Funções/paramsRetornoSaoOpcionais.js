function Area(largura, altura) {
    const area = largura * altura

    if(area > 20) {
        console.log(`Valor acima do permitido ${area}.m2`)
    } else {
        return area
    }
}

console.log(Area(2, 2))
console.log(Area(2))
console.log(Area())
console.log(Area(2, 3, 17, 22, 44))
console.log(Area(5, 5))
