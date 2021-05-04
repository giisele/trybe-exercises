// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .

function biggest(array) {
  let biggestNumber = array[0];
  let biggestIndex = 0;

  for (let index = 0; index < array.length; index += 1)
    if (biggestNumber < array[index]) biggestIndex = index;
    
  return biggestIndex;
}

console.log(biggest([2, 3, 6, 7, 10, 1]));