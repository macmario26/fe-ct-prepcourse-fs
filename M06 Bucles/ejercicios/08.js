function esPositivoOInferiorA10(a) {
   // La función recibe un número "a" por parámetro.
   // Retorna true si es positivo y menor que 10.
   // Retorna false en caso contrario.
   // Tu código:
   if (a>0 && a<10) {
      return true
   }else{return false}
}

var respuesta1 = esPositivoOInferiorA10(2)
console.log(respuesta1)
var respuesta2 = esPositivoOInferiorA10(20)
console.log(respuesta2)
var respuesta3 = esPositivoOInferiorA10(-2)
console.log(respuesta3)
module.exports = esPositivoOInferiorA10;
