function esEntero(num) {
  // Retorna true si "num" es un entero, ya sea positivo, negativo o cero.
  // Ejemplo: 0.8   ---> false
  // Ejemplo: 1     ---> true
  // Ejemplo: (-10) ---> true
  // De lo contrario, retorna false.
  // Tu código:
  if (Number.isInteger(num)) {
    return true;
  } else {
    return false;
  }
}
console.log(esEntero(0.8));   // Salida esperada: false
console.log(esEntero(1));     // Salida esperada: true
console.log(esEntero(-10));   // Salida esperada: true
console.log(esEntero(5.5));   // Salida esperada: false
module.exports = esEntero;
