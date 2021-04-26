// Ecercício 1
let fat = 1;
const fatorial = (num) => {return fat = (num <= 1) ? 1 : num * fatorial(num - 1)}
console.log(fatorial(5)); // 120

// Exercício 2
const longestWord = (string) => {
  string = string.split(' ');
  const wordLengthArr = string.map(word => word = word.length);
  let biggest;

  for (let index = 1; index <= wordLengthArr.length; index += 1) {
    if (wordLengthArr[index] > wordLengthArr[index-1]) {
      biggest = index;
    }
  }
  
  console.log(string[biggest]);
}

longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'