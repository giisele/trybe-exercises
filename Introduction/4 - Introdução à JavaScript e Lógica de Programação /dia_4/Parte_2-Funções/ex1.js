//  Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
//    Exemplo de palíndromo: arara .
//    verificaPalindrome('arara') ;
//    Retorno esperado: true
//    verificaPalindrome('desenvolvimento') ;
//    Retorno esperado: false

let palindromo;

function isPalindrome(word) {
  for (let index = 0; index < Math.ceil(word.length / 2); index += 1){
    if (word[index] !== word[word.length - 1 - index]) return false;
  }
  return true;
}

palindromo = isPalindrome('arara');

console.log(palindromo);

console.log(isPalindrome('desenvolvimento'));