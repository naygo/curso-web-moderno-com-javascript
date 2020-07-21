function criarProduto(nome, preco) {
    return  {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Biscoto', 10.79))
console.log(criarProduto('Vassoura', 17.90))