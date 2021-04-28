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

// Exercício 6
const studentsTotal = (object, key) => {
  const keys = Object.keys(object);
  let sum = 0;
  for (index in keys) {
      sum += object[keys[index]][key];
    
  }
  return sum;
}
studentsTotal(allLessons, 'numeroEstudantes');

// Exercício 7
const getValueByNumber = (object, index) => Object.values(object)[index];
// também possivel com Object.entries(object,[index][1])
console.log(getValueByNumber(lesson1, 0));

// Exercício 8
const verifyPair = (object, key, value) => (object[key] === value) ? true : false;
console.log(verifyPair(lesson3, 'turno', 'noite'));
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
