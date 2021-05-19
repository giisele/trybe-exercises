const encode = (string) => string.replace(/a/g, '1').replace(/e/g, '2').replace(/i/g, '3')
  .replace(/o/g, '4').replace(/u/g, '5');

const decode = (string) => string.replace(/1/g, 'a').replace(/2/g, 'e').replace(/3/g, 'i')
  .replace(/4/g, 'o').replace(/5/g, 'u');

describe('encode e decode', () => {
  it('Teste se encode e decode são funções', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  });

  it('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
    expect(encode('aeiou')).toBe('12345');
  });

  it('Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u , respectivamente',  () => {
    expect(decode('12345')).toBe('aeiou');
  })

  it('Teste se as demais letras/números não são convertidos para cada caso', () => {
    expect(encode('hi there!')).toBe('h3 th2r2!');
    expect(decode('h3 th2r2!')).toBe('hi there!');
  });

  it('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro', () => {
    const string = 'hi there, how are you?';
    const string2 = 'h3 th2r2, h4w 1r2 y45?';
    expect(encode(string)).toHaveLength(string.length);
    expect(decode(string2)).toHaveLength(string2.length);
  });
});
