//7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.


function tablaMultiplicar(numero) {
    document.write(`Tabla de multiplicar del ${numero}: `);
    for (let i = 1; i <= 10; i++) {
        document.write(`<br>`);
        document.write(`${numero} x ${i} = ${numero * i} `);
    }
}

let numeroUsuario;

while(true){

    numeroUsuario=parseInt(prompt("Ingresa un número para ver su tabla de multiplicar:"));
    if (isNaN(numeroUsuario)) {
        alert("Por favor, ingresa un número válido.");
    } else {
        tablaMultiplicar(numeroUsuario);
        break;
    }


}

