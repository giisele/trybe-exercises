const assert = require('assert');

const getLargestNumber = (array) => {
  let largestNumber;
  for (let index = 1; index < array.length; index += 1) {
    if (array[index] > array[index - 1]) {
      largestNumber = array[index];
    }
  }
  return largestNumber;
}

const parameter = [45, 8, 2, 50, 1, 7, 99];
const result = 99;

assert.strictEqual(getLargestNumber(parameter), result);