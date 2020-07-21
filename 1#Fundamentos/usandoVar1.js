{
    {
        {
            {
                var sera = 'Será???'
            }
        }
    }
}
 
// Variavéis 'var' dentro de um bloco, que NÃO seja uma função, será visível para todos
console.log(sera)

function teste() {
    var local = 123
    console.log(local)
}
teste()
// console.log(local) // Erro! 'local is not defined'
