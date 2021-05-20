const hydrate = (str) => {
  const s = str.replace(/[^0-9]/g, '').split('').reduce((acc, curr) => acc + parseInt(curr), 0);
  //for (index in string) totalCount += parseInt(string[index], 10);
  return (s === 1) ? '1 copo de água' : `${s} copos de água`;
};

console.log(hydrate('7 capitinhasr, 4 jasiuf'));

// abaixo o hydrate dos meninos da sala A. achei ela confusa e gigante
function hydrate(string) {
  return string.split(' ').map(Number).filter(Number).reduce((acc, curr) => acc + curr, 0) === 1 ?
    `1 copo de água` : `${string.split(' ').map(Number).filter(Number).reduce((acc, curr) =>
    acc + curr, 0)} copos de água`;
}

console.log(hydrate('7 capitinhasr, 4 jasiuf'));



describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});
