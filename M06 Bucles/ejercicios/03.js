function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Retorna el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:
  if (x>y) {
    console.log('el mayor es: ',x)
  }else if (x<y) {
    console.log('el mayor es: ',y)
  } else {console.log(x||y)}
}

obtenerMayor(2,2)
module.exports = obtenerMayor;
