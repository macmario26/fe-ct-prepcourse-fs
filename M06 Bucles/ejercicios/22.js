function diasEnMes(mes) {
  // La función recibe un mes(número) por argumento.
  // Determine cúantos días tiene el mes correspondiente a ese número.
  // PISTA: Usa un bucle do-while para validar que el mes ingresado sea válido.
  // Tu código:

  do {
    if (0 > mes > 12) {
      return('El valor ingresado no corresponde a un mes calendario')
    }
  } while (0 > mes > 12){
    return 'no pue'
  };
}
let calendario1 = diasEnMes(13)
console.log(calendario1)
module.exports = diasEnMes;
