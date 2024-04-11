function calcularPerimetro(a,b) {
    return 2*(a+b);
}


let lad1;
let lad2;



while (true) {
    lad1= prompt("Ingrese un numero");
    if (lad1 === null) {
        break;
    }
    if (lad1.trim() === '') {
        alert('Ingrese una cadeno no vacía')
        continue;
    }
    lad1= Number(lad1);
    if(isNaN(lad1)) {
        alert('Ingrese un numero')
        continue;
    }

    break;
}
while (true) {
lad2= prompt(" Ingrese el segundo numero");
if (lad2 === null) {
    break;
}
if (lad2.trim() === '') {
    alert('Ingrese una cadeno no vacía')
    continue;
}
lad2= Number(lad2);
if(isNaN(lad2)) {
    alert('Ingrese un numero')
    continue;
}

break;
}
let perimetro = calcularPerimetro(lad1,lad2);
alert("El perimetro: " + perimetro);