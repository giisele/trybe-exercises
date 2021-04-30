const assert = require('assert');

const wordLengths = (string) => {
  let arr = [];
  for (index in string) {
    arr[index] = string[index].length;
  }
  return arr;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);