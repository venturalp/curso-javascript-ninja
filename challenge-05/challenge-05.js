/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
const minhaVariavel = [1,2,3,'a', 'b', 'c']

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function minhaFuncao(arr) {
  return arr
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(minhaFuncao(minhaVariavel)[1])

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function pegaValor(arr, index) {
  return arr[index]
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
const arrDiferente = [1, false, {foo:'bar'}, [1,2,3], 'Testando']

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(pegaValor(arrDiferente, 0))
console.log(pegaValor(arrDiferente, 1))
console.log(pegaValor(arrDiferente, 2))
console.log(pegaValor(arrDiferente, 3))
console.log(pegaValor(arrDiferente, 4))

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(bookName) {
  const allBooks = {
    "Segredos do Ninja Javascript": {
      quantidadePaginas: 55,
      autor: 'Guilherme Ventura JS',
      editora: 'Darkside'
    },
    "Segredos do Ninja React": {
      quantidadePaginas: 102,
      autor: 'Guilherme Ventura React',
      editora: 'Darkside'
    },
    "Segredos do Ninja CSS": {
      quantidadePaginas: 5,
      autor: 'Guilherme Ventura CSS',
      editora: 'Darkside'
    }
  }

  return allBooks[bookName] || allBooks
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book('Segredos do Ninja ABC'))

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/

const myBook = book('Segredos do Ninja CSS')
console.log(`O livro Segredos do Ninja CSS tem ${myBook.quantidadePaginas} páginas!`)
/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(`O autor do livro Segredos do Ninja CSS é ${myBook.autor}.`)

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(`O livre Segredos do Ninja CSS foi publicado pela editora ${myBook.editora}.`)
