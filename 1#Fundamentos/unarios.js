let num1 = 1
let num2 = 2

num1++ // pós-fixada
console.log(num1)

--num1 // pré-fixada
console.log(num1)

console.log(++num1 === num2--)
// 1º ++   2º ===  3º --
console.log(num1 === num2)
