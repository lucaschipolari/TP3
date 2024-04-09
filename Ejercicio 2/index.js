// 2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

// Mostrar la longitud del arreglo.
// Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
// Añade en última posición la ciudad de París.
// Escribe por pantalla el elemento que ocupa la segunda posición.
// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.



let ciudades = []
while(true){
    let ciudad = prompt('Ingrese una ciudad');
    
    if (ciudad === null) {
        break; 
    }
    if(ciudad.trim() === ''){
        alert('Ingrese una ciudad');
        continue;
    }
    ciudades.push(ciudad);
    
}
console.log(ciudades);
document.write(`<p>El arreglo tiene ${ciudades.length} elementos</p>`);

for(let i=0; i<ciudades.length; i++){
    if(i===0){
        document.write(`<li>Elemento 1er posicion ${ciudades[i]}</li>`);
    }
    if(i===2){
        document.write(`<li>Elemente 3er posicion ${ciudades[i]}</li>`);
    }
    if(i===ciudades.length-1){
        document.write(`<li>Elemente ultima posicion ${ciudades[i]}</li>`);
    }
}

ciudades.push('Paris');

document.write(`<li>Elemente ultima posicion ${ciudades[ciudades.length-1]}</li>`);

document.write('<h1>Arreglo de ciudades</h1>')

for(let ciudad of ciudades){
    document.write(`<li>${ciudad}</li>`);
}