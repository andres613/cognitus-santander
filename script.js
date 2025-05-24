/*
let primerNumero;
primerNumero = '5';

let segundoNumero = 6;
let tercerNumero = 5;

console.log(primerNumero + segundoNumero)
console.log(tercerNumero + segundoNumero)
*/


const boton = document.getElementById('calc');

function sumar() {
    let primerNumero = parseInt(prompt('Ingrese primer número:'));
    let segundoNumero = parseInt(prompt('Ingrese segundo número:'));
    let resultado = primerNumero + segundoNumero;

    alert('El resultado es: ' + resultado)
}

boton.addEventListener('click', sumar);




