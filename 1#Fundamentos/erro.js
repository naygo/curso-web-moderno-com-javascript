function tratarErroLancar (erro) {
    //throw new Error('Ocorreu um erro...')
    //throw 10
    //throw true
    //throw 'Mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase + '!!!')

    } catch (e) {
        tratarErroLancar(e)
    } finally {
        console.log('Final')
    }
}

const obj = { nome: 'Nayla' } // erro no 'nome'
imprimirNomeGritado(obj)
