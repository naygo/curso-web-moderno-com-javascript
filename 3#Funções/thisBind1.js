const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao) // se tirar o this da erro
    }
}

pessoa.falar()

const falar = pessoa.falar
falar() // conflito entre paradigmas OO e funcional

// bind amarra determinado objeto para ele ser o dono da execução de um método sempre que for chamado
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()
