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

//nombres abreviados de propiedades
let nombre = "Eli"
let edad = 29
let estatura = 1.68
let email = "elinavarroh@gmail.com"

const persona = {
    nombre,
    edad,
    estatura,
    email
}

console.log(persona)

//array fundamentos
let celulares = ["Samsung", "iPhone", "Huawei", "Xiaomi"]
let notas = [15.6,14,12,18,11]
let persona1 = ["Eli", 29, 1.68, "elinavarroh@gmail.com"]

console.log(celulares)
console.log("Cantidad de notas:", notas.length)
console.log(persona1[0])

// Ejemplo de el uso de métodos en arreglos, en este caso para gestionar una lista de tareas
// Lista inicial de tareas
let tareas = ["Hacer la compra", "Estudiar para el examen", "Hacer ejercicio"];
// Agregar una nueva tarea al final del arreglo
tareas.push("Limpiar la casa");
// Agregar una nueva tarea al principio del arreglo
tareas.unshift("Preparar el desayuno");
// Eliminar la última tarea del arreglo
let tareaEliminada = tareas.pop();
// Eliminar la primera tarea del arreglo
let primeraTarea = tareas.shift();
// Encontrar una tarea específica en el arreglo
let tareaEspecifica = tareas.find(tarea => tarea === "Estudiar para el examen");
// Encontrar el índice de una tarea específica en el arreglo
let indiceTarea = tareas.findIndex(tarea => tarea === "Ir al gym");
// Filtrar tareas que contienen la palabra "Hacer"
let tareasConHacer = tareas.filter(tarea => tarea.includes("Hacer"));
// Concatenar dos arreglos de tareas
let nuevasTareas = ["Ir al banco", "Revisar el correo"];let todasLasTareas = tareas.concat(nuevasTareas);
// Verificar si una tarea específica está incluida en el arreglo
let tareaIncluida = tareas.includes("Hacer compras");
// Verificar si al menos una tarea cumple cierta condición
let algunaTareaCompleja = tareas.some(tarea => tarea.length > 20);
// Invertir el orden de las tareas en el arreglo
tareas.reverse();
// Verificar si todas las tareas cumplen cierta condición
let todasLasTareasLargas = tareas.every(tarea => tarea.length > 5);
// Ordenar las tareas alfabéticamente
tareas.sort();
// Reducir el arreglo a una única cadena de texto
let tareasComoTexto = tareas.reduce((acumulador, tarea) => acumulador + ", " + tarea);
// Imprimir los resultados
console.log("Tareas después de push y unshift:", tareas);
console.log("Tarea eliminada con pop:", tareaEliminada);
console.log("Primera tarea eliminada con shift:", primeraTarea);
console.log("Tarea específica encontrada:", tareaEspecifica);
console.log("Índice de tarea específica:", indiceTarea);
console.log("Tareas que contienen 'Hacer':", tareasConHacer);
console.log("Todas las tareas:", todasLasTareas);
console.log("¿'Hacer la compra' incluida?:", tareaIncluida);
console.log("¿Alguna tarea compleja?:", algunaTareaCompleja);
console.log("Tareas invertidas:", tareas);
console.log("¿Todas las tareas son largas?:", todasLasTareasLargas);
console.log("Tareas ordenadas alfabéticamente:", tareas);
console.log("Tareas como texto:", tareasComoTexto);

//Ejemplo uso del this
// Definir un objeto Persona
let Persona = {
    nombre: "Juan",
    edad: 30,
    saludar: function() {
    console.log("Hola, soy " + this.nombre + " y tengo " + this.edad + " años.");
    }
    };
    
    // Llamar al método saludar
    Persona.saludar();
