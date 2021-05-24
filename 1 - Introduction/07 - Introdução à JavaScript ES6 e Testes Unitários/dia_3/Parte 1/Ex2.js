const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

assert.strictEqual(typeof myRemove, 'function');
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]);
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);
// Próximas três linhas fazem parte do gabarito, mas não entendi o porquê de chamar a função
// Entendi ao fazer o exercício 3
const myList = [5, 6, 7, 8];
myRemove(myList, 5);
assert.deepStrictEqual(myList, [5, 6, 7, 8]); // não dá erro pois retorna um novo array, diferente do que foi chamado
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);