let valorCusto, valorVenda;


if (valorCusto < 0 || valorVenda < 0) {
  console.log('ERRO');
} else {
  let valorCustoTotal = 1.2 * valorCusto;
  let lucro = valorVenda - valorCustoTotal;
  let lucroTotal = lucro * 1000;
}
