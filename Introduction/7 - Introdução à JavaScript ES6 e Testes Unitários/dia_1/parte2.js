// Ecercício 1
let fat = 1;
const fatorial = (num) => {return fat = (num <= 1) ? 1 : num * fatorial(num - 1)}
console.log(fatorial(5)); // 120

// Exercício 2
const longestWord = (string) => {
  string = string.split(' ');
  const wordLength = string.map(word => word = word.length);
  let biggest;

  for (let index = 1; index <= wordLength.length; index += 1) {
    if (wordLength[index] > wordLength[index-1]) {
      biggest = index;
    }
  }
  
  console.log(string[biggest]);
}

longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"); // retorna 'aconteceu'

// Exercício 3
const btn = document.querySelector('BUTTON');
const span = document.querySelector('SPAN'); 
let clicks = 0;

btn.addEventListener('click', () => {
  clicks += 1;
  span.innerHTML = clicks;
});

// Exercício 4
let string = 'Tryber x aqui';
const param = 'Bebeto';
const skills = ['JavaScript', 'HTML', 'CSS', 'Bash', 'Github'];
const x = (string, param) => string.replace(/x/gi, `${param}`);

const concat = (x) => `${x}! Minhas cinco principais habilidades são:
${skills[0]};
${skills[1]};
${skills[2]};
${skills[3]};
${skills[4]}; ... #goTrybe.`;

console.log(concat(x(string, param)));
