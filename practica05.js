let usuario = "Juan Perez";
let mensaje = "No hay sistema";
let prioridad = "media";

const ticket = {
  id: "TCK-001",
  titulo: "Error en impresora",
  estado: "abierto",
  prioridad: "alta",
  area: "Sistemas",
  fecha: "2024-06-15-10:30:00",
  creador: {
    nombre: "Robert",
    email: "robert@mail.com",
  },
  asignados: ["Andres", "Ana"],
  comentarios: [
    { usuario: "Andres", mensaje: "Revisando el equipo." },
    { usuario: "Ana", mensaje: "Falta tóner." },
  ],
};

// Punto 1
console.log(`Ticket: ${ticket.titulo} Estado: ${ticket.estado}`);

// Punto 2
if (ticket.estado === "abierto") {
  ticket.estado = "cerrado";
}
console.log(`Ticket: ${ticket.titulo} Estado: ${ticket.estado}`);

// Punto 3
if (mensaje !== undefined || mensaje !== null || mensaje !== "") {
  ticket.asignados.push(usuario);
  ticket.comentarios.push({ usuario, mensaje });
} else {
  console.log("No se puede agregar el comentario vacío.");
}

// Punto 4
if (ticket.asignados.length > 0) {
  for (let i = 0; i < ticket.asignados.length; i++) {
    console.log(`Asignado a: ${ticket.asignados[i]}`);
  }
} else {
  console.log("No hay asignados al ticket.");
}

// Punto 5
if (prioridad === "alta" || prioridad === "media" || prioridad === "baja") {
  ticket.prioridad = prioridad;
  console.log(`Prioridad del ticket: ${ticket.prioridad}`);
} else {
  console.log("Prioridad no válida.");
}

// Punto 6
for (let i = 0; i < ticket.comentarios.length; i++) {
  let temp = ticket.comentarios[i];
  if (temp.usuario === "Ana") {
    console.log("Ana ya dejo un comentario.");
    break;
  } else {
    console.log("...");
  }
}
