let dobro = function(a){
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // O return esta implícito.
console.log(dobro(Math.PI))

let ola = function(){
    
}

ola = () => 'Olá'
ola = _ => 'Olá' // Possui um param
console.log(ola())