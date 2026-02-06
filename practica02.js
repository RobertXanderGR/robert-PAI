const producto ={
    nombre: "Nvidia RTX 3080",
    precio: 700,
    cantidad: 2
}

const subototal = producto.precio * producto.cantidad;
const impuesto = subototal * 0.16;
const total = subototal + impuesto;

console.log(subototal, impuesto, total);