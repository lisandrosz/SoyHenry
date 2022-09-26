'use strict'

function BinarioADecimal(num) {
  let acumulador = 0
  for(let i = 0; i < num.length; i++){
    acumulador += num[(num.length - i) - 1] * (2**i)
  }
  return acumulador
}

function DecimalABinario(num) {
let arr = [] 
while (num !== 0) {
  arr.unshift(num % 2)
  num = Math.floor(num / 2)
}
return arr.join("")
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}