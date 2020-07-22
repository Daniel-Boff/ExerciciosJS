const fabricantes = ["Mercedes","Audi","BMW", "Fiat", "Fiat", "Fiat", "Fiat", "Fiat", "Fiat", "Fiat"]

function imprimir(nome, indece){
    console.log(`${indece +1}. ${nome} `)

}
fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))