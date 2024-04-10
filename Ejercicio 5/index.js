// 5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

function esMayuscula(letra) {
  return letra === letra.toUpperCase();
}

function esMinuscula(letra) {
  return letra === letra.toLowerCase();
}
function esNumero(letra) {
    return letra == Number(letra);
}
function composicion(cadena) {
  let may = 0;
  let min = 0;
  for (let index = 0; index < cadena.length; index++) {
    let letraActual = cadena.charAt(index);

    if (esMayuscula(letraActual)) {
      may = 1;
    }
    if (esMinuscula(letraActual)) {
      min = 1;
    }
   
  }
  if (min === 1 && may === 1) {
    return alert("Esta cadena está formada por mayúsculas y minúsculas");
  } else if (min === 1 && may === 0) {
    return alert("Esta cadena está formada por minúsculas");
  } else if (min === 0 && may === 1) {
    return alert("Esta cadena está formada por mayúsculas");
  }
  
}
function contieneNumeros(cadena) {
    for (let i = 0; i < cadena.length; i++) {
      if (!isNaN(parseInt(cadena[i]))) {
        return true; // Si encontramos un número, retornamos true y salimos de la función
      }
    }
    return false; // Si recorrimos toda la cadena y no encontramos números, retornamos false
  }

let cadena;
while(true){
    cadena = prompt("Ingrese la cadena");
    if (cadena === null){
        break;
    }
    if (cadena.trim() === ""){
        alert("La cadena no puede estar vacía");
        continue;
    }
    if (contieneNumeros(cadena)){
        alert("Esta cadena no puede contener números");
        continue;
    }
    composicion(cadena);
    break;
}

    
