let saldo = 1000;

function cajero(opcion, monto) {
    switch (opcion) {
        case 'consultar':
            console.log(`Su saldo actual es: $${saldo}`);
            break;
        case 'depositar':
            saldo += monto;
            console.log(`Ha depositado: $${monto}. Su nuevo saldo es: $${saldo}`);
            break;
        case 'retirar':
            if (monto > saldo || monto <= 0) {
                console.log('Fondos insuficientes para realizar el retiro.');
            } else {
                saldo -= monto;
                console.log(`Ha retirado: $${monto}. Su nuevo saldo es: $${saldo}`);
            }
    }
}

cajero('consultar');
cajero('depositar', 500);
cajero('retirar', 200);
cajero('retirar', 2000);
cajero('consultar');