const imprimirResultado = function (nota){
    if (nota >= 7) {
        console.log('Aprovador!', 'Nota:' + nota)
    } else {
        console.log('Reprovado!', 'Nota:' + nota,'- Media:7')
    }
}

imprimirResultado(8.6)
imprimirResultado(7.4)
imprimirResultado(5.7)
imprimirResultado(6.9)

imprimirResultado('Epa!') // Cuidado!!!!!!!!!!!!!!
