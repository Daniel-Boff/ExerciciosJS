let valor // não inicializada
console.log(valor)

valor = null // ausencia de valor
console.log(valor)

//.log(valor.toString())// erro!

const produto = {}
console.log(produto.preco)
console.log(produto)


produto.preco = 3.58
console.log(produto)

produto.preco = undefined //evitarr atribuir undefined

console.log(!!produto.preco)
//delete produto.preco forma correta
console.log(produto)

produto.preco = null // Sem preço
console.log(!!produto.preco)
console.log(produto)
 // null para o programador 