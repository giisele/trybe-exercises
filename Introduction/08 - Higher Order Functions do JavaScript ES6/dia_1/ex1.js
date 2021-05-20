const person = (fullname) => { 
  return {
    name: fullname,
    email: `${fullname.toLowerCase().replace(/ /gi, '_')}@trybe.com`
  };
}

const newEmployees = (block) => {
  const employees = {
    id1: block('Pedro Guerra'),
    id2: block('Luiza Drumond'),
    id3: block('Carla Paiva'),
  }
  return employees;
}

console.log(newEmployees(person));
