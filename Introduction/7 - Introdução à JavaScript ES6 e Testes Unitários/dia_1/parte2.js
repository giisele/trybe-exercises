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
/* Crie um código JavaScript com a seguinte especificação:
  *Não se esqueça de usar template literals*
  Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .
  Exemplo:
    String determinada: "Tryber x aqui!"
    Parâmetro: "Bebeto"
    Retorno: "Tryber Bebeto aqui!"
  Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills .
  
  Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string .
  Exemplo: "Tryber x aqui! Minhas cinco principais habilidades são:
    JavaScript;
    HTML; ... #goTrybe". */