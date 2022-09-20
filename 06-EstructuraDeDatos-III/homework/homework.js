"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value  = value
  this.right = null
  this.left = null
}

BinarySearchTree.prototype.insert = function(value) {
  if(value > this.value){
    if(this.right !== null){
      this.right.insert(value)
    }else{
      this.right = new BinarySearchTree(value)
    } 
  }else if(value <= this.value) {
    if(this.left !== null){
      this.left.insert(value)
    }else{
      this.left = new BinarySearchTree(value)
    }
  }
}

BinarySearchTree.prototype.size = function(total = 1) {
  if(this.right !== null){
    this.right.size(total += 1)
  }
  if(this.left !== null){
    this.left.size(total += 1)
  }
  return total
}

BinarySearchTree.prototype.contains = function(value) {
  if(this.value === value){
    return true
  }
  if(value > this.value){
    if(this.right === null){
      return false
    } else {
      return this.right.contains(value)
    }
  }
  if(value < this.value){
    if(this.left === null){
      return false
    } else {
      return this.left.contains(value)
    }
  }
}

BinarySearchTree.prototype.depthFirstForEach = function(cb,parametro) {

  if(parametro === "post-order"){
    if(this.left !== null){
      this.left.depthFirstForEach(cb,parametro)
    }
    if(this.right !== null){
      this.right.depthFirstForEach(cb,parametro)
    }
    cb(this.value) 

  }else if( parametro === "pre-order"){
    cb(this.value)
    if(this.left !== null){
      this.left.depthFirstForEach(cb,parametro)
    }
    if(this.right !== null){
      this.right.depthFirstForEach(cb,parametro)
    }

  }else{
    if(this.left !== null){
      this.left.depthFirstForEach(cb,parametro)
    }
    cb(this.value)
    if(this.right !== null){
      this.right.depthFirstForEach(cb,parametro)
    }
  }
}

BinarySearchTree.prototype.breadthFirstForEach = function(cb, arr = []) {
  if(this.left !== null){
    arr.push(this.left)
  }
  if(this.right !== null){
    arr.push(this.right)
  }
  cb(this.value)

  if(arr.length > 0){
    let primero = arr[0]
    arr.shift()
    primero.breadthFirstForEach(cb,arr)
  }
}
















// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
