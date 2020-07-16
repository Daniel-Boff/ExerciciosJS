Number.prototype.entre = function(inicio, fim) {
    return this >= inicio && this <= fim
}
const imprimirResultado = function(nota){
    if (nota.entre(9, 10)){
        console.log('"Quadro de Honra" Nota Final: ' + nota)
    } else if (nota.entre(7, 8.99)) {
        console.log('Aprovado! Nota Final: ' + nota)
    } else if (nota.entre(4, 6.99)) {
        console.log('Recuperação! Nota Final: ' + nota)
    } else if (nota.entre(0, 3.99)) {
        console.log('Reprovado! Nota Final: ' + nota)
    } else {
        console.log('Nota Inválida...')
    }
    console.log('fim')
    console.log(' ')
}

imprimirResultado(8.7)
imprimirResultado(4.6)
imprimirResultado(7.5)
imprimirResultado(3.6)
imprimirResultado(9.8)
imprimirResultado(- 5)
imprimirResultado(12)