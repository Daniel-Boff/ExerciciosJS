function teste1(num) {
    if(num > 7) // Para usar varias setença de codigo tem que usar chaves.
        console.log(num)

    console.log('Final')
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7)
        ; // Não usar ";" nas estruturas de controle
        // Definicao na bloco "if"
    {
        console.log(num)
    }
}

teste2(6)
teste2(8)