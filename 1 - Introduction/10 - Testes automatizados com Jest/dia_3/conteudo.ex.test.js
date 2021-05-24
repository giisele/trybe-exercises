const math = require('./conteudo.ex.js');

// Faça o mock da funcão subtrair e teste sua chamada.
test("#subtrair", () => {
  math.subtrair = jest.fn();

  math.subtrair();
  expect(math.subtrair).toHaveBeenCalled();
});

// Faça o mock da função multiplicar e implemente como retorno padrão o valor '10'. Teste a chamada e o retorno.
test("#multiplicar", () => {
  const mockMultiplicar = jest.spyOn(math, "multiplicar");

  mockMultiplicar.mockResolvedValue(10);
  mockMultiplicar();
  expect(mockMultiplicar).toHaveBeenCalled();
  expect(mockMultiplicar()).resolves.toBe(10);
});

// Faça o mock da função somar e implemente uma função que recebe dois valores e retorna sua soma. Teste a chamada, o retorno e os parâmetros passados.
test("#somar", () => {
  const mockSomar = jest.spyOn(math, "somar");

  mockSomar(1, 2);
  expect(mockSomar).toHaveBeenCalled();
  expect(mockSomar).toHaveBeenCalledWith(1, 2);
  expect(mockSomar(1, 2)).resolves.toBe(3);
});

// Faça o mock da função dividir e implemente um retorno padrão com o valor '15'. Implemente também os seguintes valores para a primeira e segunda chamadas: '2' e '5'. Teste a chamada, o retorno, os parâmetros e quantas vezes a função foi chamada.
test("#dividir", () => {
  const mockDividir = jest.spyOn(math, "dividir");

  mockDividir.mockResolvedValue(15);
  mockDividir(2, 5);
  expect(mockDividir).toHaveBeenCalled();
  expect(mockDividir).toHaveBeenCalledTimes(1);
  expect(mockDividir).toHaveBeenCalledWith(2, 5);
  expect(mockDividir(2, 5)).resolves.toBe(15);
});

// Faça o mock da função subtrair de maneira que seja possível restaurar sua implementação original. Defina como retorno padrão o valor '20'. Teste o número de chamadas e o retorno. Restaure a implementação original da função e teste sua execução.
test("#subtrair", () => {
  const mockSubtrair = jest.spyOn(math, "subtrair");

  mockSubtrair.mockResolvedValue(20);
  mockSubtrair();
  expect(mockSubtrair).toHaveBeenCalledTimes(2); // 2 pq foi chamado lá em cima, em outro teste
  expect(mockSubtrair()).resolves.toBe(20);

  mockSubtrair.mockRestore();
  expect(mockSubtrair(3, 2)).toBe(1);
});