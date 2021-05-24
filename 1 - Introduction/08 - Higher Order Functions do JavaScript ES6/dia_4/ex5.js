
const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

// Dado o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula
const containsA = () => names.reduce((acc1, curr1) => acc1 + curr1.split('').reduce((acc2, curr2) => (curr2 === 'a' || curr2 === 'A') ? acc2 + 1 : acc2, 0), 0);

assert.deepStrictEqual(containsA(), 20);