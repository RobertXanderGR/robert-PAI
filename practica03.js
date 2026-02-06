const alumno = {
    nombre: "Robert",
    semestre: 6,
    calificacion1: 95,
    calificacion2: 80,
    calificacion3: 85
}

promedio = (alumno.calificacion1 + alumno.calificacion2 + alumno.calificacion3) / 3;

console.log(promedio, promedio >= 60);