const { resolve } = require("node:path");

const sumArray = (arr) => arr[0] + arr[1] + arr[2] + arr[3];

const promise = new Promise((resolve, reject) => {
  const arr = [];
  let sum = 0;

  for (let index = 0; index < 10; index += 1) {
    arr[index] = Math.ceil(Math.random() * 50);
    arr[index] *= arr[index];
    sum += arr[index];
  }

  if (sum > 8000) {
    return reject(sum);
  }
  resolve([sum/2, sum/3, sum/5, sum/10]);
})

.then(arr => sumArray(arr))
.then((sum) => console.log(`A soma do array é ${sum}`))
.catch(sum => console.log(`É mais de oito mil! Essa promise deve estar quebrada! Soma: ${sum}`));
// não sei se era isso que era pra fazer