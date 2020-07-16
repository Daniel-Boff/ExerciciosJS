function tratarErroELancar(erro){
    //throw new Error('SISTEMA COMPROMETIDO')
    //throw 10
    //throw true
    //throw 'Mensagem Automatica'
    throw {
        name: erro.name,
        msg: erro.massage,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name. toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally{
        console.log('final')
    }
}
    
const obj = {nome: 'Roberto'}
imprimirNomeGritado(obj)