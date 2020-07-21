const quaseArray = { 0: 'Nayla', 1: 'Gabriel', 2: 'Julia' }
console.log(quaseArray)

Object.defineProperty(quaseArray, 'toString', {
    value: function() { return Object.values(this) },
    enumerable: false
})

console.log(quaseArray[0])

const meuArray = ['Nayla', 'Gabriel', 'Julia']
console.log('---- Array falso VS Array original ----')
console.log(quaseArray.toString(), meuArray)