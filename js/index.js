import data from "./data.js";

do {
  let ced = parseInt(prompt("Cédula a consultar:"));
  let dataEstudiante = data.find((est) => est.cedula === ced);
  if (!dataEstudiante) alert("Estudiante no encontrado");
  else
    alert(`
    Datos del estudiante:
    Cédula: ${dataEstudiante.cedula}
    Nombres: ${dataEstudiante.nombre}
    Condición: ${dataEstudiante.condicion}
    Materia: ${dataEstudiante.materia}
    Sección: ${dataEstudiante.seccion}
    Profesor: ${dataEstudiante.profesor}
    Tarea 1: ${dataEstudiante.tarea1}
    Micro Maratón-1: ${dataEstudiante.microM1}
    Micro Maratón-2: ${dataEstudiante.microM2}
    Subtotal Parcial-1: ${dataEstudiante.subTotalParcial1}
    `);
} while (confirm("¿Desea buscar otro estudiante?"));
