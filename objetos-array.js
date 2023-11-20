// USO DEL THIS
'use strict';

const user = {
    name:"Martin",
    lastName:"Jimenez",
    age:19,
    address:{
        city:"Quito",
        telephone:"095688564",
        street:"Velasteguí"
    },
    Friends:['Anthony','Jose','Isabella','Luan'],
    state:true,
    sendMail (){
        return `send mail to ${this.Friends[0]}`
    },
    sendNotification: ()=>{
        return `send notification to ${this.Friends[3]}`
    }
}

console.log(user.sendMail());
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