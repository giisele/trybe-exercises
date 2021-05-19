const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

// Escreva um teste que verifique a chamada do callback de uma função uppercase , que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.
test('Testando uppercase, transforma todas as letras em maúsculo', done => {
  uppercase('Olá Amigo, como você está?', (result) => {
    expect(result).toBe('OLÁ AMIGO, COMO VOCÊ ESTÁ?');
    done();
  });
})