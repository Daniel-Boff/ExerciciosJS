function soBoaNoticia(nota) {
    if(nota >= 7){
       console.log('Aprovado com ' + nota) 
    }
}

soBoaNoticia(8.3)
soBoaNoticia(5.7)

function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log('É verdade... ' + valor)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(4.7)
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([1, 2])
seForVerdadeEuFalo({})