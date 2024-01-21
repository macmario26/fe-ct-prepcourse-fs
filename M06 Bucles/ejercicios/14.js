function operadoresLogicos(num1, num2, num3) {
  // La función recibe tres números distintos.
  // Si num1 es mayor a num2 y a num3, y además es positivo, retorna ---> "Numero 1 es mayor y positivo".
  // Si alguno de los tres números es negativo, retorna ---> "Hay negativos".
  // Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retorna el nuevo valor.
  // Si todos los argumentos son cero, retorna ---> "Error".
  // Si no se cumple ninguna de las condiciones anteriores, retorna false.
  // Tu código:
  switch (true) {
    case (num1>0)&&(num1>num2)&&(num1>num3):
      return'Número 1 es mayor y positivo'
      
    case (num1<0)||(num2<0)||(num3<0):
      return'Hay negativos'
      
    case num3>num1 && num3>num2: num3++;
      return num3
           
    case (num1==0)&&(num2==0)&&(num3==0):
      return'Error'
            
    default: return false;
      break;
  }
}
let respuesta1 = operadoresLogicos(3,2,1)
console.log(respuesta1)
let respuesta2 = operadoresLogicos(0,0,0)
console.log(respuesta2)
let respuesta3 = operadoresLogicos(3,5,9)
console.log(respuesta3)
module.exports = operadoresLogicos;
