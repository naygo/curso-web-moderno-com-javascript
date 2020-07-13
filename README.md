# Anotações

## JavaScript: Fundamentos

| Tipo | Descrição |
| ------ | ----------- |
| var   | escopo global e de função |
| let | escopo global, de função e de bloco |
| const    | utilizar para variavéis que não irão mudar de valor |


* Texto entre aspas simples ('') = texto híbrido, texto em qualquer linguagem
* Uma mesma variavél pode armazenar diversos tipos


```diff
- Number = função
+ number = tipo
```


* JSON -  é uma versão textual de um objeto
<br>

* Variáveis VAR tem escopo de função e global
* Variáveis LET tem escopo de função, global e de bloco
    - FUJA do escopo GLOBAL!


+ HOISTING - jogar para cima
    - a leitura de código normalmente é feita de cima para baixo, em JS isso não acontece 100%
    - não há motivo para utlizar essa estratégia

* Notação Ponto - acessar membros

### Operadores

| Nome | Símbolo |
| ------ | ----------- |
| Atribuição | = |
| Destructuring | { } ou [ ] depois de uma palavra reservada |
| Aritméticos | <p>+ &nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp; * &nbsp;&nbsp;&nbsp; / &nbsp;&nbsp;&nbsp; % &nbsp;&nbsp;&nbsp; **</p> |
| Relacionais | <p>== &nbsp;&nbsp;&nbsp; === &nbsp;&nbsp;&nbsp; != &nbsp;&nbsp;&nbsp; !== &nbsp;&nbsp;&nbsp; > &nbsp;&nbsp;&nbsp; >= &nbsp;&nbsp;&nbsp; < &nbsp;&nbsp;&nbsp;<=</p>|
| Lógicos | <p>&& &nbsp;&nbsp;&nbsp; &#124;&#124; &nbsp;&nbsp;&nbsp; !!(var1 ^ var2) &nbsp;&nbsp;&nbsp; !== &nbsp;&nbsp;&nbsp; > &nbsp;&nbsp;&nbsp; >= &nbsp;&nbsp;&nbsp; < &nbsp;&nbsp;&nbsp;<=</p> |
| Unários | ++ &nbsp;&nbsp;&nbsp; -- |
| Ternários | ? |


#### Atribuição
```js
const a = 7
let b = 3

b += a // b = b + a
b -= 4 // b = b - 4
b *= 2 // b = b * 2
b /= 2 // b = b / 2
b %= 2 // b = b % 2
```

#### Destructuring
+ Novo recurso do ES2015;
+ Ele tira da estrutura alguma coisa;
    - É uma forma de extrair atributos de um objeto

Destructuring em **objetos**:

```js
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 123
    }
}
// extrair a variavél nome e idade
const { nome, idade } = pessoa

// extraindo atributos do endereço
const { endereco: { logradouro, numero} } = pessoa
```

Destructuring em **arrays**:
```js
const [a] = [10]

const [n1, , n3, , n5, n6 = 0] = [10, 7, 8, 9]

const [,[, nota]] = [[, 8, 8], [9, 6, 8]]
```

Destructuring com **objetos em funções**:

```js
function rand({ min = 0, max = 1000 }) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 40 }
console.log(rand(obj))
```

Destructuring com **arrays em funções**:

```js
function rand([ min = 0, max = 100 ]) {
    if(min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([ 50, 40 ]))
```

#### Aritméticos
+ Operadores binários, ou seja, operam com dois operandos.

```js
const [ a, b, c, d ] = [ 3, 5, 1, 15 ]

const soma = a + b + c + d
const subtracao = b - d
const multiplicacao =  a * b
const exponenciacao = a ** b
const divisao = d / a
const modulo = a % 2

console.log(-divisao) 
// operador unário, vai converter o valor de divisão para negativo
```

#### Relacionais

+ Resultados sempre serão true ou false.

Exemplos:
```js
console.log('01)', '1' == 1) // true
console.log('02)', '1' === 1) // false
console.log('03)', '3' != 3) // false
console.log('04)', '3' !== 1) // true

console.log('05)', 3 < 2) // false
console.log('06)', 3 > 2) // true
console.log('07)', 3 <= 2) // false
console.log('08)', 3 >= 2) // true

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2) // false
console.log('10)', d1 == d2) // false
console.log('11)', d1.getTime() === d2.getTime()) // true

console.log('12)', undefined == null) // true
console.log('13)', undefined === null) // false
```

#### Lógicos

_Tabela verdade:_
+ AND (&&)
    - V _and_ V = V
    - V _and_ F = F
    - F _and_ F = F
    - Basta um ser falso para tudo ser falso.

+ OR (||)
    - V _or_ V = V
    - V _or_ F = V
    - F _or_ F = F
    - Baste um verdadeiro para tudo ser verdadeiro.
       
+ XOR (!= ou !!(var1 ^ var2))
    - V _xor_ V = F
    - V _xor_ F = V
    - F _xor_ V = V
    - F _xor_ F = F
    - Os dois tem de ser diferentes para o resultado ser verdadeiro.
     
+ Negação lógica (!)
    - !V = F
    - !F = V
        

#### Unários

+ Apenas um operando
    - Pós-fixada
    - Pré-fixada (precedência maior)

```js
let num1 = 1
let num2 = 2

num1++ // pós-fixada
--num1 // pré-fixada

// Exemplo de precedência
console.log(++num1 === num2--) // true
// 1º ++   2º ===  3º --
```
#### Ternários

+ Três operandos, composto por três partes:
    - 1ª: expressão que retorna true ou false
    - 2ª: o que será retornado caso a expressão seja verdadeira
    - 3ª: o que será retornado caso a expressão for falsa
    - Operador: **?**

Exemplo:
```js
const resultado = nota => nota >= 7 ? 'Aprovado': 'Reprovado'
```

### Tratamento de erros

+ try
+ catch
+ throw
+ finally

```js
function tratarErro(erro) {
    throw new Erro('Tratando erro...')
}

try {
    console.log('Há algum erro?')
} catch (e) {
    tratarErro(e)
} finally {
    console.log('Executa de qualquer maneira')
}
```

## Estruturas de controle

+ Estruturas de condição:
    - if
    ```js
    if(condition) {}
    ```
    - if/else
    ```js
    if(condition) {

    } else { }
    ```
    - if/else if...
    ```js
    if(condition) {

    } else if(condition) {

    }
    ```
    - switch
    ```js
    switch(value) {
        case 1:
        case 2:
            ...
        break
    }
    ```

+ Estruturas de repetição:
    - while 
    ```js
    while(condition) {
        
    }
    ```
    - do/while
    ```js
    do {
        
    } while(condition)
    ```
    - for
    ```js
    for(let i = 0; i < cont.length; i++) {
        
    }
    ```
    - for/in
    ```js
    for(let i in variavel) {
        
    }
    ```

### Usando Break/Continue
+ Desvio de fluxo.
+ Funcionam dentro de laços _for_ e _while_.
+ Usar só quando necessário.
    - break: para o laço mais próximo
    - continue: pula quando encontrar a condição

Exemplos:

```js
for(x in nums) {
    if(x == 5) break

    console.log(`${x} = ${nums[x]}`)
} // quando o índice for 5, o laço 'for' irá parar
```
```js
for(y in nums) {
    if(y == 5) continue

    console.log(`${y} = ${nums[y]}`)
} // índice 5 não será exibido
```

## JavaScript: Função

+ Função JS é First-Class Object (Citizens) || Higher-order function
    - Função como dado

```js
// criar de forma literal
function Fun1() { }

// armazenar em variável
const Fun2 = function() { }

// armazenar em array
const Fun3 = [function() { }]

// armazenar em um atributo de um objeto
const obj = {}
obj.falar = function() { }

// passar função como parametro
function run(fun) {
    fun()
}

// uma função pode retornar/conter uma função
function soma() {
    return function() {
        
    }
}
```

<kbd>Parâmetros e retornos são opcionais</kbd>

+ Uma função pode não ter parâmetros, mas mesmo assim pode receber parâmetros
    - Use **arguments**. Exemplo:
    ```js
    function Soma() {
        let soma = 0
        for(i in arguments) {
            soma += arguments[i]
        }
        return soma
    }
    console.log(Soma(1, 2, 3))
    ```

### Parâmetros Padrão
+ Quatro estratégias
    - ||
    - var !== undefined ? var : 1 
    - 1 in arguments ? b : 1
    - isNaN(c) ? 1 : c
<br>

+ ES2015
    - Definir já nos parâmetros
        - function Soma(a = 1, b = 1, c = 1)

### This

+ O **this** pode variar.
    - Acessa alguma coisa do contexto de execução.
    - Dependendo de como uma função é chamada o _this_ varia.
    - O _this_ vai ser definido no momento que a função for definida.

#### Bind

+  O **bind** amarra determinado objeto para ele ser o dono da execução de um método sempre que for chamado
```js
const falarDePessoa = pessoa.falar.bind(pessoa)
``` 

+ Além de usar o bind para driblar o this que varia, é possível atribuir à umma constate o this, assim a constatnte sempre irá apontar para o objeto que deseja. Exemplo:
```js
function Pessoa() {
    const self = this 
}
``` 

### Arrow Functions

+ É usado uma seta <kbd>=></kbd>, ao invés da palavra <kbd>function</kbd>.
+ São sempre **funções anônimas**.
+ Ajuda em casos em que o _this_ vaira.
<br>

+ A criação de uma **arrow function** consistem em 3 “passos”:
    - Os parênteses, que é por onde a função recebe os argumentos (assim como na function tradicional);
    - A “seta” <kbd>=></kbd> - responsável pelo nome “arrow” function;
    - E as chaves: o bloco de código que representa o corpo da função.
+ Porém ela possui algumas variações. Exemplos:

```js
dobro = (a) => {
    return 2 * a 
}
// ou com retorno implicito
dobro = (a) => 2 * a 

ola = () => 'Ola' // função sem parâmetro
```

### Funções anônimas
 + Exemplos de funções anônimas:
    - Variáveis recebendo uma função
    ```js
    const variavel = function() { }
    ```
    - Enviar funções chamando uma função
    ```js
    funcao(a, b, function() { })
    ```
    - Funções dentro de um contexto de objeto
    ```js
    const variavel = {
        atributo: function() { }
    }
    ```
    - Funções arrow
    ```js
    funcao(a, b, (x, y) => x * y )
    ```

### Funções Callback
+ Chamar de volta
    - Uma função é passada, algum evento acontece e a função é chamada de volta para fazer alguma coisa
    - Uma função que é chamda quando um evento acontecer. Exemplo:
    ```js
    const doces = ["Pirulito", "Bala", "Chiclete"]

    function imprimir(nome, indice) {
        console.log(`${indice + 1}. ${nome}`)
    }

    doces.forEach(imprimir)
    ```
    - Pra cada elemento percorrido no array _(evento)_ a função imprimir é chamada _(callback)_.

### Funções construtoras
+ Usar _'this'_ torna o atributo público.
 - Outro tipo de declaração _(let, const)_, dentro de funções, torna os atributos privados.

### Declaração de funções

+ Function declaration - tradicional
```js
function soma(x ,y) {
    return x + y
}
```
+ Function expression
```js
const sub = function(x, y) {
    return x - y
}
```
+ Named function expression
```js
const mult = function mult(x, y) {
    return x * y
}
```

<kbd> Importante:</kbd> JS carrega todas as funções antes de executar o código, ouseja, colocar funções antes ou depois de serem utilizadas não faz diferença. Porém isso só é possível com funções do tipo _function declaration_.

### Contexto Léxico
+ Contexto onde as coisas foram declaradas dentro da linguagem.
+ Mesmo que chamada longe do local onde foi definida, as funções carregam o contexto onde foram escritas.

    #### Closures
    - Escopo criado quando uma função é definida.
        - Esse escopo permite o acesso e manipulação de variáveis externas à função.

### Função Factory

+ Função que retorna um objeto.
    - Um molde para evitar repetições de criação de objetos.
    - Parecida com classe.

    #### Classe vs Função Factory
    - Diferença: a função factory tem mais noção do contexto léxico onde ela é criada.
    - Porque o _this_ na função factory não é necessário.

### IIFE
+ Immediately Invoked Function Expression
    - Função auto-invocada
```js
(function () {
    
})()
```
### Call & Apply
+ Estudar melhor depois.



