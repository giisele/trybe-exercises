const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Exercício 1
const addTurn = (object, key, value) => object[key] = value;
addTurn(lesson2, 'turno', 'manhã');

// Exercício 2
const listKeys = (object) => console.log(Object.keys(object));
listKeys(lesson1);

// Exercício 3
const objectLength = (object) => console.log(Object.keys(object).length);
objectLength(lesson1);

// Exercício 4
const listValues = (object) => console.log(Object.values(object));
listValues(lesson1);

// Exercício 5
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons);

/*
6. Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

7. Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:

  console.log(getValueByNumber(lesson1, 0));
  // Output: 'Matématica'

8. Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:

  console.log(verifyPair(lesson3, 'turno', 'noite'));
  // Output: true,
  console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
  // Output: false
*/