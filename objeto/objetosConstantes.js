// pessoa -> 123 -> {...}
const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro' // atribuição "pessoa" não muda, somento "nome".
console.log(pessoa)

/* 
pessoa -> 456 -> {...} 
constante sempre apontara para codigo "123"
pessoa ={nome: 'Ana'}  <- vai da erro
*/

Object.freeze(pessoa) // congela o'objeto', sem qualquer alteração
pessoa.nome = 'Maria'
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'João'})
console.log(pessoaConstante)