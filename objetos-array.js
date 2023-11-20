//Rest vs Spread

//rest operator

const [auto,moto,...rest] = ['Chevrolet','Susuki','Ford','Nissan']
console.log(auto)
console.log(moto)
console.log(rest)

//Spread Operator

const carnes = ["Carne roja","pollo","pescado"]
const vegeteles = ["Zanahoria","Col","Brocoli","Calabaza"]

const comidas = [...carnes,...vegeteles]
console.log(comidas)
