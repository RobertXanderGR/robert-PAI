const plataforma = {
    nombre: "IntelFlix",
    plan: "Premium",
    usuario: {
        nombre: "Luis",
        edad: 20,
    },
    perfiles: [
        {
            nombre: "Miguel Angel",
            favoritos: ["Dark", "Braking Bad"],
            historial: ["Dark"],
        },
        {
            nombre: "Juliana",
            favoritos: ["Gossip Girl", "Stranger Things"],
            historial: [],
        },
    ],
};

//Paso 1:
let usuarioPrincipal = plataforma.usuario.nombre;
console.log(`Usuario principal: ${usuarioPrincipal}`);

//Paso 2:
let nuevoPlan = "Estándar";
if (nuevoPlan !== plataforma.plan) {
    plataforma.plan = nuevoPlan;
    console.log(`El plan ha sido cambiado a: ${plataforma.plan}`);
} else {
    console.log("El plan es el mismo que el actual.");
}

//Paso 3:
let nuevoFavorito = "La Casa de Papel";
let favoritoExiste = false;

for (let i = 0; i < plataforma.perfiles[0].favoritos.length; i++) {
    temp = plataforma.perfiles[0].favoritos[i];
    if (temp === nuevoFavorito) {
        favoritoExiste = true;
        break;
    }
}

if (!favoritoExiste) {
    plataforma.perfiles[0].favoritos.push(nuevoFavorito);
    console.log(`Se ha agregado a favoritos: ${nuevoFavorito}`);
} else {
    console.log(`${nuevoFavorito} ya está en favoritos.`);
}

//Paso 4:
if (plataforma.perfiles[1].historial.length !== 0) {
    console.log(`Historial de ${plataforma.perfiles[1].nombre}:`);
    for (let i = 0; i < plataforma.perfiles[1].historial.length; i++) {
        console.log(plataforma.perfiles[1].historial[i]);
    }
} else {
    console.log(`El historial de ${plataforma.perfiles[1].nombre} está vacío.`);
}

//Paso 5:
if (plataforma.usuario.edad >= 18) {
    console.log(`${plataforma.usuario.nombre} es mayor de edad.`);
} else {
    console.log(`${plataforma.usuario.nombre} es menor de edad.`);
}