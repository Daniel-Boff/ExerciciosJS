// coleção dinamica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['Marca do produto'] = 'Generica'
produto.preco = 220
console.log(produto)

delete produto.preco
delete produto['Marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 57,
        endereco: {
            logradouro: "Rua ABC",
            numero: 1234
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: '20'
    },{
        nome: 'Ana',
        idade: 45
    }]
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = "Av Grande"

console.log(carro)