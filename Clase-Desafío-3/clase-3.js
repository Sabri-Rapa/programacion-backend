// Y obtenga la siguiente información de dicho array
// A) Los nombres de los productos en un string separados por comas. (reduce + foreach + for)
// B) El precio total (reduce + for + foreach)
// C) El precio promedio (reduce + for + foreach)
// D) El producto con menor precio (for (aux))
// E) El producto con mayor precio (for (aux))
// F) Con los datos de los puntos A al E crear un objeto y representarlo por consola
// Const resultado = {a: 100, b: res2, c:  res3….}
// (Math.trunc)
// Aclaración: todos los valores monetarios serán expresados con 2 decimales

const productos = [
  { id: 1, nombre: "Escuadra", precio: 323.45 },
  { id: 2, nombre: "Calculadora", precio: 234.56 },
  { id: 3, nombre: "Globo Terráqueo", precio: 45.67 },
  { id: 4, nombre: "Paleta Pintura", precio: 456.78 },
  { id: 5, nombre: "Reloj", precio: 67.89 },
  { id: 6, nombre: "Agenda", precio: 78.9 },
];

function consigna(array) {
  let aux = [];
  let precioTotal = 0;
  let precioPromedio = 0;
  let precioMenor = array[0].precio;
  let precioMayor = 0;
  array.forEach((element) => {
    aux.push(element.nombre);

    precioTotal += element.precio;

    if (element.precio > precioMayor) precioMayor = element.precio;
  });

  precioPromedio = precioTotal / array.length;

  precioMenor = array.reduce((precioMenor, array) => {
    if (precioMenor.precio > array.precio) {
      return array;
    } else {
      return precioMenor;
    }
  }, array[0]);


  precioMayor = array.reduce((precioMayor, array) => {
    if (precioMayor.precio < array.precio) {
      return array;
    } else {
      return precioMayor;
    }
  }, array[0]);


  return {
    nombres: aux.toString(),
    precioTotal: parseFloat(precioTotal.toFixed(2)),
    precioPromedio: parseFloat(precioPromedio.toFixed(2)),
    precioMenor: precioMenor,
    precioMayor: precioMayor,
  };
}

// console.log(consigna(productos));


//-----------------------------------
// Realizar un proyecto en node.js que permita calcular cuántos años y días totales transcurrieron desde la fecha de tu nacimiento. Para ello utilizar la dependencia moment instalándola en forma local desde npm. Imprimir los resultados por consola. Hacer las modificaciones necesarias para que sólo se actualicen los patches para la librería recién instalada.

// Un ejemplo de salida:
// Hoy es 11/01/2021
// Nací el 29/11/1968
// Desde mi nacimiento han pasado 52 años.
// Desde mi nacimiento han pasado 19036 días.

// Ayuda:
// Utilizar los métodos diff y format de la librería moment.

const moment = require('moment')

const nacimiento = moment().format("15-02-1990", "DD-MM-YYYY")

console.log('Nací el', nacimiento)
console.log('Desde mi nacimiento han pasado ' + moment().diff(nacimiento, 'y'))
// console.log('Desde mi nacimiento han pasado ' + moment().diff(nacimiento, 'd'))

