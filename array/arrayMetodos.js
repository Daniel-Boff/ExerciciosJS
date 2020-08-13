const pilotos = ['Vettel', 'Alonso', 'Leclerc', 'Raikkonen']
pilotos.pop() // remove o ultimo!
console.log(pilotos)

pilotos.push('Verstappen') // adiciona em ultimo!
console.log(pilotos)

pilotos.shift() // remove o primeiro!
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona em primeiro!
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2,0, 'Bottas', 'Vettel')
console.log(pilotos)

// remover
pilotos.splice(3, 1) 
console.log(pilotos)

const algunsPilotos1 = pilotos.splice(2) // novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.splice(1, 4)
console.log(algunsPilotos2)