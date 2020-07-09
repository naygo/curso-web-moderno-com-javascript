// fuja do escopo global!

var numero = 1
{
    var numero = 2 
    console.log('dentro = ', numero)
}
// valor foi sobrescrito, resultado = dois números 2 impressos
console.log('fora = ', numero) 





