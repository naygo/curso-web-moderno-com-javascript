function Pessoa() {
    this.idade = 0

    const self = this // dessa maneira o this não varia, o self sempre aponta para pessoa
    setInterval(function() {
      self.idade++
      console.log(self.idade)  
    }/*.bind(this)*/, 1000)
}

new Pessoa