// 3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.

let listadoCantidad = [];

for (let index = 0; index < 50; index++) {
    let dado1 = Math.floor(Math.random() * 6) + 1;
    let dado2 = Math.floor(Math.random() * 6) + 1;
    let sum = dado1 + dado2;
    listadoCantidad.push(sum);
}

//console.log(listadoCantidad);
let nums= [2,3,4,5,6,7,8,9,10,11,12]
let aux = [];

for (let index = 2; index <= 12; index++) {
    let sum = 0;   
    for (let j = 0; j < listadoCantidad.length; j++) {
        if(index === listadoCantidad[j]){
            sum++;
        }
        
    }
    aux.push(sum);  
}

//console.log(aux);

document.write('<table><tbody>');
document.write('<tr><td>Suma</td><td>Apariciones</td></tr>');
document.write('<tr>');
for (let i = 0; i < aux.length; i++){
    document.write(`<td>${nums[i]}</td>`);
    document.write(`<td>${aux[i]}</td>`);
    document.write('</tr>');
}
document.write('</tbody></table>');

//En caso de utilizar objetos xd

let contador = {};

for (let index = 0; index < listadoCantidad.length; index++) {
    let elemento = listadoCantidad[index];
    contador[elemento] = (contador[elemento] || 0)+1;

}
//console.log(contador);