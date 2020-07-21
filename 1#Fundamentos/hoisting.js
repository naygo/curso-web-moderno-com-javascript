console.log('a = ', a)
var a  = 2 // sofre o hoisting e é declarada antes da linha 1
console.log('a = ', a)

// isto acima é como se fosse o seguinte:
/*

var a
console.log('a = ', a)
var a  = 2
console.log('a = ', a)

*/