"use strict";
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if (array.length < 2) return array;

  let izq = [];
  let der = [];
  let eq = [];
  let piv = Math.floor(Math.random() * array.length);

  for (let i = 0; i < array.length; i++) {
    if (array[i] < array[piv]) {
      izq.push(array[i]);
    } else if (array[i] > array[piv]) {
      der.push(array[i]);
    } else {
      eq.push(array[i]);
    }
  }
  return quickSort(izq).concat(eq).concat(quickSort(der));
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  function unir(izq, der) {
    let nuevo = [];
    let i = 0;
    let j = 0;

    while (i < izq.length && j < der.length) {
      if (izq[i] < der[j]) {
        nuevo.push(izq[i]);
        i++;
      } else {
        nuevo.push(der[j]);
        j++;
      }
    }

    return nuevo.concat(izq.slice(i)).concat(der.slice(j));
  }

  if (array.length < 2) {
    return array;
  }

  let izq = [];
  let der = [];
  let mitad = Math.floor(array.length / 2);

  for (let i = 0; i < array.length; i++) {
    if (i < mitad) {
      izq.push(array[i]);
    } else {
      der.push(array[i]);
    }
  }

  return unir(mergeSort(izq), mergeSort(der));
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
