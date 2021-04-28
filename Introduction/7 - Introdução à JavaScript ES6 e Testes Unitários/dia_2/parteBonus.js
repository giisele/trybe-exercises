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
const studentClass = (object, value1, value2) => {
  const allKeys = Object.keys(object);
  let sum = 0;

  for (index in allKeys) {
    if (object[allKeys[index]].materia === value1) sum += object[allKeys[index]].numeroEstudantes;
  }
  return sum;
}
console.log(studentClass(allLessons, 'Matemática'));

// Exercício 2
const createReport = (object, professor) => {
  const allValues = Object.values(object);
  let students = 0;
  let lessons = [];

  for (index in allValues) {
    if (allValues[index].professor === professor) {
      lessons.push(allValues[index].materia);
      students += allValues[index].numeroEstudantes;
    }
  }

  return {professor: professor, aulas: lessons, estudantes: students};
}
console.log(createReport(allLessons, 'Maria Clara'));
