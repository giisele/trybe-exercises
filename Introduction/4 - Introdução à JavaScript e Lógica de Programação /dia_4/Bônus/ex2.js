// Para o próximo exercício você irá precisar ter uma conta no CodeWars, para entender como fazê-lo acesse esse o conteúdo que fizemos sobre isso. Após seguir os passos para registro acesse o desafio proposto e então clique em TRAIN , você então será redirecionado para a página onde o desafio deve ser feito. Quando tiver finalizado o exercício clique em TEST para verificar, com testes simples, se sua solução satisfaz o que foi pedido. Passando nesses testes clique em ATTEMPT , ao fazer isso seu código passará por todos os testes existentes para validação da solução. Caso sua solução esteja correta o botão SUBMIT ficará disponível, clique nele para submeter sua resposta, caso contrário volte ao seu código e veja o que ainda não está satisfazendo o que se é pedido, repita esse processo até que sua solução esteja correta.
// Desafio - 16 + 1 8 = 214 ;
// Esse desafio irá exigir um pouco de conhecimento sobre alguns métodos do JavaScript, para isso pesquise quando for necessário e caso surja alguma dúvida peça ajuda no Slack . Dúvidas em como fazer uma boa pesquisa? Sem problemas! Acesse esse conteúdo sobre como pesquisar como uma pessoa desenvolvedora .


function add(num1, num2) {
  let numMax, numMin, strSum = [], difference;
  
  // checa pra ver qual é o maior
  if (num1 < num2) {
    numMax = num2;
    numMin = num1;
  } else {
    numMax = num1;
    numMin = num2;
  }

  // transforma em string
  let strMax = numMax.toString();
  let strMin = numMin.toString();

  // divide em caracteres
  strMax = strMax.split('');
  strMin = strMin.split('');

  // deixa com a mesma quantidade de caracteres
  if (strMax.length !== strMin.length) {
    difference = strMax.length - strMin.length;
    for (let indexDiff = 0; indexDiff < difference; indexDiff += 1){
      strMin.unshift('0');
    }
  }

  //faz a soma de cada um, transformando em int e jogando em um array
  for (let index = 0; index < strMin.length; index += 1) {
    strSum[index] = parseInt(strMax[index]) + parseInt(strMin[index]);
  }

  // junta os conteúdos do array em uma string e transforma em inteiro
  let sum = parseInt(strSum.join(''));

  return sum;
}

console.log(add(1236, 30977));