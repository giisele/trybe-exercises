import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from '../App';
import Item from '../Item';

afterEach(cleanup);

describe('Teste do campo de input', () => {
  test('Testando a adição de vários itens a aplicação', () => {
    const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água'];

    const { getByLabelText, getByText } = render(<App />);
    const inputTask = getByLabelText('Tarefa:');
    const btnAdd = getByText('Adicionar');

    listTodo.forEach((task) => {
      fireEvent.change(inputTask, { target: { value: task } });
      fireEvent.click(btnAdd);
    });

    listTodo.forEach((task) => {
      expect(getByText(task)).toBeInTheDocument();
    });

    // esse eu peguei do gabarito
  })
});

describe('Teste do componente Item', () => {
  test('Ao receber uma string como prop ela precisa aparecer na tela', () => {
    const { getByText } = render(<Item content="Limpar a casa" />);
    expect(getByText('Limpar a casa')).toBeInTheDocument();
  })
})

/*
Exercício 2
Teste a aplicação. Atenção ao que o teste orienta:

Use o array já disponibilizado no código para realizar os testes. Cada elemento do array será uma tarefa. Simule a adição de todas e depois verifique se elas estão aparecendo.
Teste apenas o componente Item. Ao passar uma string para ele ela precisa aparecer na tela.

*/