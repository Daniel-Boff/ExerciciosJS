const notas = [7.7, 8.9, 3.5, 5.6, 9.7]

for (let i in notas) {
    console.log(i, notas[i] )

}

console.log(' ')//Espaço entre os resultados.

const pessoa = {
    nome: 'Dolores',
    sobrenome: 'Silva',
    idade: 32,
    peso: '72Kg'
}
for (atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
//console.log(atributo)