var numero = 1
{
    let numero = 2
    console.log('dentro = ', numero)
}

console.log('fora = ', numero)

console.log('-----------')
/* 
* Teste de escopo
*/

let num = 1
{
    let num = 2
    console.log('dentro = ', num)
}
console.log('fora = ', num)