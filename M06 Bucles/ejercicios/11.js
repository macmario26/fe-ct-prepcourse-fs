function estaEnRango(num) {
  // Retorna true si "num" es menor que 50 y mayor que 20.
  // De lo contrario, retornar false.
  // Tu código:
  if (num < 50 && num > 20) {
    return true
  } else{ return false }
}

let respuesta1 = estaEnRango(49)
  console.log(respuesta1)
  let respuesta2 = estaEnRango(50)
  console.log(respuesta2)
  let respuesta3 = estaEnRango(21)
  console.log(respuesta3)
module.exports = estaEnRango;
