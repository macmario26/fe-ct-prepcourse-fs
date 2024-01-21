function esVerdaderoYFalso(booleano1, booleano2) {
  // La función recibe dos argumentos "booleano1" y "booleano2".
  // Retorna true si ambos son verdaderos, caso contrario, retorna false.
  // Tu código:
  return booleano1 && booleano2;
}

// Pasándole los parámetros
let resultado1 = esVerdaderoYFalso(true, true);
console.log("Resultado 1:", resultado1); // Salida esperada: true

let resultado2 = esVerdaderoYFalso(true, false);
console.log("Resultado 2:", resultado2); // Salida esperada: false

let resultado3 = esVerdaderoYFalso(false, true);
console.log("Resultado 3:", resultado3); // Salida esperada: false

let resultado4 = esVerdaderoYFalso(false, false);
console.log("Resultado 4:", resultado4); // Salida esperada: false


//Analizando los tipos de datos
let resultado5 = esVerdaderoYFalso(true, true);
console.log("Resultado 5:", typeof resultado5); // Salida esperada: boolean
let resultado6 = esVerdaderoYFalso(false, false);
console.log("Resultado 6:", typeof resultado6); // Salida esperada: boolean

module.exports = esVerdaderoYFalso;

