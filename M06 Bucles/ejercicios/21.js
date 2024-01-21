function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  if (numero <= 0) { //Primero comprobamos que le número ingresado no sea negativo ni cero.
    return false;
  }

  while (numero > 1) {
    if (numero % 2 !== 0) { //Este if comprueba que el número ingresado sea divisible por 2.
      return false
    }
    numero/=2 
  }
  return true 
}

let respuesta1 = esPotenciaDeDos (5)
console.log(respuesta1)
let respuesta2 = esPotenciaDeDos (256)
console.log(respuesta2)
let respuesta3 = esPotenciaDeDos (20)
console.log(respuesta3)
let respuesta4 = esPotenciaDeDos (1)
console.log(respuesta4)
let respuesta5 = esPotenciaDeDos (0)
console.log(respuesta5)
module.exports = esPotenciaDeDos;
