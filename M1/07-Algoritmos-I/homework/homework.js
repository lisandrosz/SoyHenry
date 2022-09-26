'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let arreglo = []
  while(num > 1){
    if(num % 3 === 0){
      arreglo.unshift(3)
      num = num / 3
    } else if(num % 2 === 0){
      arreglo.unshift(2)
      num = num / 2
    } else{
      arreglo.unshift(num)
      num = num / num
    }
  }
  arreglo.unshift(1)
  return arreglo.sort((a,b) => a - b)
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  for(let j = 0; j < array.length; j++){
    for(let i = 0; i < array.length - 1; i++){
      if(array[i+1] < array[i]){
        let a = array[i+1]
        let b = array[i]
        array[i] = a
        array[i+1] = b
      }
    }
  }
  return array
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for(let i = 1; i < array.length; i++){
     let j = i - 1
     let aux = array[i]
     while(j >= 0 && aux < array[j]){
      array[j+1] = array[j]
      j--
     }
     array[j+1] = aux
    }
    return array
}
    

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for(let i = 0; i < array.length - 1; i++){
    let menor = i
    for(let j = i + 1; j < array.length; j++){
      if(array[j] < array[menor]){
        menor = j 
      }
    }
    let aux = array[i]
    array[i] = array[menor]
    array[menor] = aux
  }
  return array
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
