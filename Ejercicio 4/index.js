// 4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.
function esPar(numero) {
    if(numero % 2 === 0) {
        console.log('El numero es par');
        return;
    }else{
        console.log('El numero es impar');
        return;
    }
}
let numero;

while (true) {
    numero=prompt('Ingrese un numer')
    if(numero === null){
        break;
    }
    if (numero.trim() === '') {
        alert('Ingrese una cadeno no vacía')
        continue;
    }
    numero= Number(numero);
    if(isNaN(numero)) {
        alert('Ingrese un numero')
        continue;
    }
    if(!Number.isInteger(numero)){
        alert('Ingrese un numero entero');
        continue;
    }
    esPar(numero);
    break;
}

