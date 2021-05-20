// Dados
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

// Pesquisa
// Sua função deverá então retornar os resultados da busca pelo id para aquele funcionário e a informação consultada. Caso o id não conste no quadro de funcionários, sua função deve retornar o erro "ID não identificada" . Se a informação que se quer acessar não existir, a função deve retornar o erro "Informação indisponível" .
const searchEmployee = (id, detail) => {
  const professional = professionalBoard.find((professional) => professional.id === id);
  if (!professional) throw new Error("ID não identificada");

  if (!professional[detail]) throw new Error("Informação indisponível");

  return professional[detail];
};

// Testes
describe('Bônus', () => {
  it('Cheque se a função existe', () => {
    expect(typeof searchEmployee).toBe('function');
  });

  it('Cheque se o detail=firstName retorna corretamente', () => {
    expect.assertions(1);
    expect(searchEmployee('9852-2-2', 'firstName')).toBe('Jeff');
  });

  it('Cheque se o detail=lastName retorna corretamente', () => {
    expect.assertions(1);
    expect(searchEmployee('9852-2-2', 'lastName')).toBe('Cook');
  });

  it('Cheque se o detail=specialties retorna corretamente', () => {
    expect.assertions(1);
    expect(searchEmployee('9852-2-2', 'specialities')).toEqual(['Ruby', 'SQL']);
  });

  it('Checa se retorna mensagem "ID não identificada" quando não houver ID', () => {
    
  });
  
  

  it('Testa se um erro com a mensagem "ID não identificada" é retornado quando a ID não existir', () => {
    expect(() => { searchEmployee('1256-8', 'specialities') }).toThrow();
  });
  it('Testa a mensagem do erro para ID inexistente', () => {
    expect(() => { searchEmployee('1256-8', 'specialities') }).toThrowError(new Error("ID não identificada"));
  });
  it('Testa se lança um erro quando a informação e o ID são inexistentes', () => {
    expect(() => { searchEmployee() }).toThrow();
  });
  it('Testa a mensagem do erro para informação inexistente', () => {
    expect(() => { searchEmployee('4678-2', 'shift') }).toThrowError(new Error("Informação indisponível"));
  });
});