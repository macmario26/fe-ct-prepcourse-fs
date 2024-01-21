function conection(status) {
  // El argumento "status" representa el estado de conexión de un usuario.
  // Si el estado es igual a 1, el usuario está "Online".
  // Si el estado es igual a 2, el usuario está "Away".
  // De lo contrario, presumimos que el usuario está "Offline".
  // Retornar el estado de conexión del usuario.
  // Tu código:
    if (status === 1) {
      return 'Usuario Online'
    } else if(status === 2){ return 'Usuario Away'
      } else {return 'Usuario Offline'}
  }


let prueba1 = conection(1)
console.log(prueba1);
let prueba2 = conection(2)
console.log(prueba2)
let prueba0 = conection(0)
console.log(prueba0)
module.exports = conection;
