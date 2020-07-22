function criarProduto(nome, preco, inscricao){
    return {
        nome,
        preco,
        inscricao,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2990.76, 002))
console.log(criarProduto("iPad", 1989.89, 003)) 