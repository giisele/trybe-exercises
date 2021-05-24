function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

describe('exercício 1', () => {
  it('4 + 5 = 9', () => {
    expect(9).toBe(sum(4, 5));
  });

  it('0 + 0 = 0', () => {
    expect(0).toBe(sum(0, 0));
  });

  it('acha erro quando parametro não é numero', () => {
    expect(() => sum(4, '5')).toThrow();
  });

  it(`erro é 'parameters must be numbers' se parametro não é número`, () => {
    expect(() => sum(4, '5')).toThrowError(new Error('parameters must be numbers'));
  });
});
