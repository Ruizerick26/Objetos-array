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

// Congelar Objetos
// Uso de freeze
const perfilUsuario = {
    nombre: "María",
    apellido: "Gómez",
    edad: 28,
    detalles: {
        ciudad: "Guayaquil",
        telefono: "3025698",
        direccion: "Avenida Principal 123"
    }
};

Object.freeze(perfilUsuario);
console.log('Uso del freeze: ' + Object.isFrozen(perfilUsuario));
perfilUsuario.foto = "t.ly/AbCd";
console.log(perfilUsuario);
console.log("\n")

// Uso de seal
const empleado = {
    nombre: "Ana",
    apellido: "González",
    cargo: "Desarrollador de Software",
    departamento: "Tecnología",
    detalles: {
        salario: 60000,
        fechaContratacion: "01/02/2022",
        ubicacion: "Ciudad de México"
    }
};

Object.seal(empleado);
console.log('Uso del seal: '+ Object.isSealed(empleado));
empleado.detalles.salario = 65000;
console.log(empleado)
console.log("\n")

// Copiar dos objetos
console.log("Copiar Elementos")
const informacionPersonal = {
    nombre: "David",
    apellido: "Simba",
    edad: 28
};

const informacionSocial = {
    direccion: {
        ciudad: "Quito",
        telefono: "38401928",
        calle: "Avenida Maldonado"
    },
    amigos: ['Erick', 'Gylmar', 'Ismael'],
    activo: true,
};

const informacionCompleta = { ...informacionPersonal, ...informacionSocial };

console.log(informacionCompleta);