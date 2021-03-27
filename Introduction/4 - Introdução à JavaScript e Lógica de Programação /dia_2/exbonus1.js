let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27], position;

for (let index = array.length - 1; index > 0; index -= 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (array[secondIndex] > array[secondIndex + 1]) {
      position = array[secondIndex];
      array[secondIndex] = array[secondIndex + 1];
      array[secondIndex + 1] = position;
    }
  }
}

console.log(array);
