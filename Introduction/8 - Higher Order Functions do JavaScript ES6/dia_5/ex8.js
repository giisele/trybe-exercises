const assert = require('assert');

// Escreva uma função greet que, dado o nome de uma pessoa, retorna uma mensagem de cumprimento

const greet = (firstName, greeting = 'Hi') => `${greeting} ${firstName}`;

assert.strictEqual(greet('John'), 'Hi John');
assert.strictEqual(greet('John', 'Good morning'), 'Good morning John');
assert.strictEqual(greet('Isabela', 'Oi'), 'Oi Isabela');