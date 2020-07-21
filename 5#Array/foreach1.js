const aprovados = ['Nayla', 'Gabriel', 'João', 'Celson']

aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

aprovados.forEach((nome, indice) => console.log(`${indice+1}) ${nome}`))


const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)


