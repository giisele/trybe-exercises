//  Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
//    Exemplo de palíndromo: arara .
//    verificaPalindrome('arara') ;
//    Retorno esperado: true
//    verificaPalindrome('desenvolvimento') ;
//    Retorno esperado: false

let palindromo;

function isPalindrome(word) {
  let n = word.length;

  for (let index = 0; index < n; index += 1){
    if (word[index] !== word[n-1]) {
      return false;
    }
    n -=1;
  }

  return true;
}

palindromo = isPalindrome('arara');

console.log(palindromo);

console.log(isPalindrome('desenvolvimento'));