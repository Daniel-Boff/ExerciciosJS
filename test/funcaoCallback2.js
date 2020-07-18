const notas = [7.7, 9.6, 5.4, 8.3, 7.4, 4.7, 8.8, 5.5, 5, 4.4, 3.4]

// Sem Callback
let notasBaixas1 = []
for (let i in notas){
    if (notas[i] < 7){
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1)

// Com Callback
notasbaixas2 = notas.filter(function (nota) {
    return nota < 7
})
console.log(notasbaixas2)

// Com arrow

const notasbaixas3 = notas.filter (nota => nota < 7)
console.log(notasbaixas3)