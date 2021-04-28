// Exercício 1
const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;

    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = `Não devo ser utilizada fora meu escopo (else)`;

    console.log(elseScope);
  }
}

testingScope(true);

//Exercício 2
// Referencia:
// sort: https://stackoverflow.com/a/1063027
const ex2 = () => {
  const oddsAndEvens = [13, 3, 4, 10, 7, 2];

  oddsAndEvens.sort((a, b) => a - b);

  console.log(`Os números ${oddsAndEvens[0]},${oddsAndEvens[1]},${oddsAndEvens[2]},${oddsAndEvens[3]},${oddsAndEvens[4]},${oddsAndEvens[5]} se encontram ordenados de forma crescente!`);
}

ex2();
