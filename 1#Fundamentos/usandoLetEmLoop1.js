// Ao contrário do 'var', este código da erro, porque o 'let' só fica visível dentro do código

for (let i = 0; i < 10; i++) {
    console.log(i)
}

console.log('i = ', i)