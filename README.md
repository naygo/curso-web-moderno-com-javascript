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

## Operadores

| Nome | Símbolo |
| ------ | ----------- |
| Atribuição | = |
| Destructuring | { } ou [ ] depois de uma palavra reservada |
| Aritméticos | <p>+ &nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp; * &nbsp;&nbsp;&nbsp; / &nbsp;&nbsp;&nbsp; % &nbsp;&nbsp;&nbsp; **</p> |
| Relacionais | <p>== &nbsp;&nbsp;&nbsp; === &nbsp;&nbsp;&nbsp; != &nbsp;&nbsp;&nbsp; !== &nbsp;&nbsp;&nbsp; > &nbsp;&nbsp;&nbsp; >= &nbsp;&nbsp;&nbsp; < &nbsp;&nbsp;&nbsp;<=</p>|
| Lógicos | <p>&& &nbsp;&nbsp;&nbsp; &#124;&#124; &nbsp;&nbsp;&nbsp; !!(var1 ^ var2) &nbsp;&nbsp;&nbsp; !== &nbsp;&nbsp;&nbsp; > &nbsp;&nbsp;&nbsp; >= &nbsp;&nbsp;&nbsp; < &nbsp;&nbsp;&nbsp;<=</p> |
| Unários | ++ &nbsp;&nbsp;&nbsp; -- |
| Ternários | ? |


### Atribuição
```js
    const a = 7
    let b = 3

    b += a // b = b + a
    b -= 4 // b = b - 4
    b *= 2 // b = b * 2
    b /= 2 // b = b / 2
    b %= 2 // b = b % 2
```

### Destructuring
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

### Aritméticos
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

### Relacionais

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

### Lógicos

+ **Tabela verdade:**
    - V _and_ V = V
    - V _and_ F = F
    - F _and_ F = F
    - Basta um ser falso para tudo ser falso.
        - Operador: **&&**
    <p>&nbsp;</p>
    - V _or_ V = V
    - V _or_ F = V
    - F _or_ F = F
    - Baste um verdadeiro para tudo ser verdadeiro.
        - Operador: **||**
    <p>&nbsp;</p>
    - V _xor_ V = F
    - V _xor_ F = V
    - F _xor_ V = V
    - F _xor_ F = F
    - Os dois tem de ser diferentes para o resultado ser verdadeiro.
    - Operador: **!=** ou **!!(var1 ^ var2)** _bitwise xor_
    <p>&nbsp;</p> 
    - **Negação lógica:**
        - !V = F
        - !F = V
            - Operador: **!**

### Unários

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
### Ternários

+ Três operandos, composto por três partes:
    - 1ª: expressão que retorna true ou false
    - 2ª: o que será retornado caso a expressão seja verdadeira
    - 3ª: o que será retornado caso a expressão for falsa
    - Operador: **?**

Exemplo:
```js
const resultado = nota => nota >= 7 ? 'Aprovado': 'Reprovado'
```

## Tratamento de erros

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
