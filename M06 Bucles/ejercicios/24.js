function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:

  let cc = texto.length;
  console.log('cantidad de caracteres: '+cc);  

  for (let inverso = cc - 1; inverso >= 0; inverso--) {
    const elemento = texto[inverso];
    console.log(elemento);
  }
}

invertirTexto('mamma')
module.exports = invertirTexto;
