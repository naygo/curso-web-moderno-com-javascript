function aula(nome, videoID) {
    this.nome = nome;
    this.videoID = videoID;
}

const aula1 = new aula('Bem vindo', 123);
const aula2 = new aula('Até breve', 456);
console.log(aula1, aula2);

// função que simula o operador new
function novo(f, ...params) {
   const obj = {}
   obj.__prop__ = f.prototype
    f.apply(obj, params)
   return obj
}
const aula3 = novo(aula, 'Bem vindo', 123)
const aula4 = novo(aula, 'Até breve', 456)
console.log(aula3, aula4)
