// (Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa. Atenção! Esse exercício já apareceu no processo seletivo de uma grande multinacional!
// Dicas: Uma string é um array de caracteres, então cada elemento do array é uma letra. O valor de cada numeral romano é: 
/*
    | I   | 1    |
    | --- | ---- |
    | IV  | 4    |
    | V   | 5    |
    | IX  | 9    |
    | X   | 10   |
    | XL  | 40   |
    | L   | 50   |
    | XC  | 90   |
    | C   | 100  |
    | CD  | 400  |
    | D   | 500  |
    | CM  | 900  |
    | M   | 1000 |   */

// Que tal criar um objeto que associe cada letra a um numeral para fácil consulta?
// Atenção! Quando você tem um número pequeno à direita de um número grande, eles devem ser somados. /// Exemplo: XI = 10 + 1 = 11. No entanto, se o número pequeno está à esquerda de um número maior que ele, ele deve ser subtraído. Exemplo: IX = 10 - 1 = 9.


// https://javascript.plainenglish.io/algorithms-101-convert-roman-numerals-to-integers-in-javascript-d3aba86a43d4

const conversion = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};


function romanToInt(string) {
  const array = string.split('');
  let total = 0, current, currentValue, next, nextValue;
  
  for (let index = 0; index < array.length; index += 1) {
    current = array[index];
    currentValue = conversion[current];
    next = array[index + 1];
    nextValue = conversion[next];
    if (currentValue < nextValue) total -= currentValue;
    else total += currentValue;
  }
  return total;
}

console.log(romanToInt('MMDCIV'));