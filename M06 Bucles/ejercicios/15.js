function obtenerDiaSemana(numero) {
  // La función recibe un "numero" entre 1 y 7 por argumento.
  // Devuelve el día de la semana correspondiente a este número,
  // por ejemplo, 1 para "Lunes", 2 para "Martes", etc.
  // El día devuelto debe tener mayúscula inicial y no llevar tilde.
  // Si el número no corresponde a un día de la semana, retorna
  // el string "No es un dia de la semana"
  // Tu código:
  switch (numero) {
    case 1: return 'Lunes'
      break;
    case 2: return 'Martes'
      break;
    case 3: return 'Miércoles'
      break;
    case 4: return 'Jueves'
      break;
    case 5: return 'Viernes'
      break;
    case 6: return 'Sábado'
      break;
    case 7: return 'Domingo'
      break;                          
    default: return 'No es un día de la semana'
      break;
  }
}

let dia1 = obtenerDiaSemana(7)
console.log(dia1)
let dia2 = obtenerDiaSemana(1)
console.log(dia2)
let dia3 = obtenerDiaSemana(2)
console.log(dia3)
let dia4 = obtenerDiaSemana(5)
console.log(dia4)
let dia5 = obtenerDiaSemana(4)
console.log(dia5)
let dia6 = obtenerDiaSemana(8)
console.log(dia6)
module.exports = obtenerDiaSemana;
