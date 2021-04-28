const assert = require('assert');

const greaterThanTen = (array) => {
  let results = [];
  let num = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > 10) {
      results[num] = array[index];
      num += 1;
    }
  }
  return results;
};

const parameter = [4, 10, 32, 9, 21];
const result = [32, 21];

assert.strictEqual(typeof greaterThanTen, 'function');
assert.deepStrictEqual(greaterThanTen(parameter), result);