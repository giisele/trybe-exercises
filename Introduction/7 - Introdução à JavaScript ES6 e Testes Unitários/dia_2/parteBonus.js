const allLessons = {
  lesson1: {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã'
  },
  lesson2: {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
    turno: 'manhã'
  },
  lesson3: {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite'
  }
}

// Exercício 1
const studentMath = (object, value1, value2) => {
  const allKeys = Object.keys(object);
  let sum = 0;
  let length = 0;

  for (index in allKeys) {
    if (object[allKeys[index]].materia === value1) sum += object[allKeys[index]][value2];
  }
  return sum;
}
console.log(studentMath(allLessons, 'Matemática', 'numeroEstudantes'));

/*
1. Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.

2. Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:

console.log(createReport(allLessons, 'Maria Clara'))

Output: {
  professor: 'Maria Clara',
  aulas: [ 'Matemática', 'Matemática' ],
  estudantes: 30
} 
*/