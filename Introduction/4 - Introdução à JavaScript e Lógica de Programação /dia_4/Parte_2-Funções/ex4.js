// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
// Valor esperado no retorno da função: Fernanda .

function biggestName(array) {
  let biggestName = array[0];

  for (let index = 0; index < array.length; index += 1) 
    if (biggestName.length < array[index].length) biggestName = array[index]
  return biggestName;
}


console.log(biggestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));