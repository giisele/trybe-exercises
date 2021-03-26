let number = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27], newArray = [];

for (let index = 0; index < number.length; index += 1) {
  if (index < number.length - 1) {
    newArray[index] = number[index] * number[index + 1];
  } else {
    newArray[index] = number[index] * 2;
  }
}
  
console.log('Array antigo:', number);
console.log('Array novo:', newArray);
