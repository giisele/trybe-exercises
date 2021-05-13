const promise = new Promise((resolve, reject) => {
  const arr = [];
  let sum = 0;

  for (let index = 0; index < 10; index += 1) {
    arr[index] = Math.ceil(Math.random() * 50);
    arr[index] *= arr[index];
    sum += arr[index];
  }

  if (sum > 8000) {
    return reject([sum]);
  }
  resolve(sum);
})

.then(sum => console.log(`Promise resolvida! Soma: ${sum}`))
.catch(sum => console.log(`Promise rejeitada! Soma: ${sum}`));