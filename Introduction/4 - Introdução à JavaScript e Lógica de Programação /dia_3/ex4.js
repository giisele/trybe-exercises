let n = 5;
let space = n/2;

if (n > 1) {
  for (let index = 1; index <= n; index += 2) {
    console.log(' '.repeat(space) + '*'.repeat(index));
    space -= 1;
  }
}
