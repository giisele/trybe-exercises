// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
// Valor esperado no retorno da função: 2 .

function mostRepeated(array) {
  let counts = [];
  let compare = 0;
  let mostFrequent;
  
  for (let index = 0, len = array.length; index < len; index += 1) {
    let number = array[index];
      
    if (counts[number] === undefined) counts[number] = 1;
    else counts[number] = counts[number] + 1;
    if(counts[number] > compare) {
      compare = counts[number];
      mostFrequent = array[index];
    }
  }

  return mostFrequent;
}
  
console.log(mostRepeated([2, 3, 2, 5, 8, 2, 3]));