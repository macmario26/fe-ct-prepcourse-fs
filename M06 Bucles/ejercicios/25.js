function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:

  let cc = string.length;
  console.log('Longitud de la cadena: ' + cc); 

  let esPalindromo = true;

  for (let i = 0; i < cc; i++) {
    const charDirecto = string[i];
    const charInverso = string[cc - 1 - i];

    console.log(charDirecto, charInverso);

    if (charDirecto !== charInverso) {
      esPalindromo = false;
      break;
    }
  }

  if (esPalindromo) {
    console.log('Es PALINDROMO');
  } else {
    console.log('No es Palindromo');
  }

}

esPalindromo('neuquen')
console.log('..........')
esPalindromo('aldana')
console.log('..........')
esPalindromo('itati')
console.log('..........')
esPalindromo('lavan naval')
module.exports = esPalindromo;

