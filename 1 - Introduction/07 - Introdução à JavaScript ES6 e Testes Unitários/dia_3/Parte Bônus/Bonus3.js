const assert = require('assert');

const removeMiddle = (arr) => {
  let middle = [];
  if (arr.length % 2 === 1) {
    middle[0] = arr[arr.length/2 - 0.5];
    arr.splice([arr.length/2 - 0.5], 1);
  }
  return middle;
}

const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);

assert.deepStrictEqual(output, expectedOutput);
assert.deepStrictEqual(words, expectedWords);