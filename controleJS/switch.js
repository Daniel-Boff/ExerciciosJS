const imprimirResultado = function(nota){
    switch (Math.floor(nota)) {
        case 10: 
        case 9:
            console.log('Quadro de Honra!', 'Sua nota foi: ' + nota )
            break
        case 8: case 7:
            console.log('Aprovado!', 'Sua nota foi: ' + nota)
            break
        case 6: case 5: case 4:
            console.log('Recuperação!', 'Sua nota foi: ' + nota)
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado!', 'Sua noita foi: ' + nota)
            break
        default: // Pode ficar em qualquer lugar, mas tenho que colocar o 'break'. 
            console.log('Nota Inválida...')
    }
    console.log(' ') // Posso colocar um espaço entre os resultados.
// E colocar outra mensagem generica.
}
imprimirResultado(10)
imprimirResultado(9.5)
imprimirResultado(6.7)
imprimirResultado(4.9)
imprimirResultado(3.6)
imprimirResultado(8)
imprimirResultado(11)