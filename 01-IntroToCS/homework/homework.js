'use strict'

function BinarioADecimal(num) {
  let acumulador = 0
  let str = num.toString()
  for(let i = 0; i < str.length; i++){
    let valor = Number(str[(str.length - i) - 1])
    acumulador += valor * (2**i)
  }
  return acumulador
}

function DecimalABinario(num) {
let arr = [] 
let str 
while (true) {
  arr.unshift(num % 2)
  num = Math.floor(num / 2)
  if(num === 1){
    arr.unshift(1)
    str = arr.join("")
    break
  }
}
return str
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}