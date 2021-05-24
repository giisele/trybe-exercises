// Crie uma função que gere um número aleatório entre 0 e 100. Você irá criar também os testes para essa função. Utilizando o mock, defina o retorno padrão como 10. Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.

const obj = {
  randomNumber: () => Math.floor(Math.random() * 101),
}

test('', () => {
  const mockRandom = jest.spyOn(obj, 'randomNumber');

  mockRandom.mockResolvedValue(20);
  mockRandom();
  expect(mockRandom).toHaveBeenCalled();
  expect(mockRandom()).resolves.toBe(20);
  expect(mockRandom).toHaveBeenCalledTimes(2);
});