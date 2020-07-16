let a = 3
global.b = 3
this.C =  456
this.d = false
this.e = 'Teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)


// criando um variavel maluca: sem var e let!
abc = 3 // não faça isso
console.log(global.abc)

//module.exports = {e:454, f: false, g: 'teste'}


//run time