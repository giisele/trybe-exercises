// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b , definidas no começo com os valores que serão operados. Faça programas para:
//Adição, subtração, multiplicação, divisão, módulo
function calc(a, b, operator) {
  if (operator === '+') return console.log(a + ' + ' + b + ' = ' + (a + b));
  else if (operator === '-') return console.log(a + ' - ' + b + ' = ' + (a - b));
  else if (operator === '*') return console.log(a + ' * ' + b + ' = ' + (a * b));
  else if (operator === '/') console.log(a + ' / ' + b + ' = ' + (a / b));
  else if (operator === '%') return console.log(a + ' % ' + b + ' = ' + (a % b));
}

calc(52, 74, '/');

// Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados. 
function maioresAB(a, b){
  if (a > b) return console.log(a, 'é maior que', b);
  else return console.log(b, 'é maior que', a);
}

// Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.
function maioresABC(a, b, c) {
  if (a > b && a > c) return console.log(a, 'é maior que', b, 'e', c);
  else if (b > a && b > c) return console.log(b, 'é maior que', a, 'e', c);
  else return console.log(c, 'é maior que', a, 'e', b);
}

// Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário. 
function positivo(valor) {
  if (valor > 0) return console.log('positive');
  else if (valor < 0) return console.log('false');
  else return console.log('zero');
}


// Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
// Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.
// Um ângulo será considerado inválido se não tiver um valor positivo.
function angulos(ang1, ang2, ang3) {
  if (ang1 < 0 || ang2 < 0 || ang3 < 0) return console.log('ERRO');
  else if ((ang1 + ang2 + ang3) === 180) return console.log(true);
  else return console.log(false);
}


// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
function chess(chess) {
  chess.toLowerCase();

  switch (chess) {
    case pawn: return console.log('Any direction, one square, even diagonals');
    case rook: return console.log('Any direction, but straight and only forward');
    case bishop: return console.log('Any direction, but diagonal and only forward');
    case knight: return console.log('An L shape, in a 3x2 grid, any orientation');
    case queen: return console.log('Any direction, diagonally and straight, but only forward');
    case king: return console.log('Any direction, one square, but can do a check and checkmate and end the game');
    default: return console.log('ERROR');
  }
}


// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A; Porcentagem >= 80 -> B; Porcentagem >= 70 -> C; Porcentagem >= 60 -> D; Porcentagem >= 50 -> E; Porcentagem < 50 -> F.
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.
function notas(nota) {
  switch (nota) {
    case (nota >= 90): return console.log('A');
    case (nota >= 80): return console.log('B');
    case (nota >= 70): return console.log('C');
    case (nota >= 60): return console.log('D');
    case (nota >= 50): return console.log('E');
    case (nota < 50): return console.log('F');
    default: return console.log('ERRO');
  }
}


// Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false. Bonus: use somente um if.
function par(a, b, c) {
  if ((a % 2) === 0 || (b % 2) === 0 ||(c % 2) === 0) return console.log(true);
  else return console.log(false);
}


// Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false. Bonus: use somente um if.
function impar(a, b, c) {
  if ((a % 2) === 1 || (b % 2) === 1 ||(c % 2) === 1) return console.log(true);
  else return console.log(false);
}


// Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%.
// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
//    valorCustoTotal = valorCusto + impostoSobreOCusto
//    lucro = valorVenda - valorCustoTotal (lucro de um produto)
function lucro(valorCusto, valorVenda) {
  let imposto = 0.2, qtdProdutos = 1000;
  if (valorCusto < 0 || valorVenda < 0) return console.log('ERRO');
  else {
    let valorCustoTotal = valorCusto + imposto * valorCusto;
    let lucro = valorVenda - valorCustoTotal;
    return lucro * qtdProdutos;
  }
}



// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
// A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
//    INSS
//        Salário bruto até R$ 1.556,94: alíquota de 8%
//        Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
//        Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
//        Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
//    IR
//        Até R$ 1.903,98: isento de imposto de renda
//        De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
//        De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
//        De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
//        Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
function salarioLiquido(salarioBruto) {
  let inss, ir;

  if (salarioBruto <= 0) {
    return console.log('ERRO - Salário bruto não pode ser menor ou igual a zero.');
    if (salarioBruto < 1556.94) inss = salarioBruto * 0.08;
    else if (salarioBruto < 2594.93) inss = salarioBruto * 0.09;
    else if (salarioBruto < 5189.83) inss = salarioBruto * 0.11;
    else inss = 570.88;
    
    let salarioBase = salarioBruto - inss;

    if (salarioBase < 1903.98) ir = 0;
    else if (salarioBase < 2826.66) ir = ((7.5 * salarioBase) / 100) - 142.80;
    else if (salarioBase < 3751.06) ir = ((15 * salarioBase) /100) - 354.80;
    else if (salarioBase < 4664.69) ir = ((22.5 * salarioBase) / 100) - 636.13;
    else ir = ((27.5 * salarioBase) / 100) - 869.36;

    let salarioLiquido = salarioBase - ir;

    return console.log('O salário líquido de', salarioBruto, 'é', salarioLiquido, '.');
  }
} 
