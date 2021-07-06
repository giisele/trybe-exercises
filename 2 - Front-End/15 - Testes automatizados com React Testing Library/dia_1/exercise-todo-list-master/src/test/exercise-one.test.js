import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from '../App';

afterEach(cleanup);

// arquivo App.test.js pode servir de exemplo
describe('Teste da aplicação, testando o botão e sua funcionalidade', () => {
  test('Verificando se o botão está na tela e se o ele contém o texto "Adicionar"', () => {
    const { getByText } = render(<App />);
    const btnAdd = getByText('Adicionar')

    expect(btnAdd).toBeInTheDocument()
    expect(btnAdd.type).toBe('button')
  });

  test(`Ao clicar no botão, é necessário adicionar o que o usuário digitou à lista`, () => {
    // Use os fireEvent, para simular a digitação do usuário e o clique.
    const { getByLabelText, queryByText } = render(<App />)

    const inputTask = getByLabelText('Tarefa:')
    const buttonAdd = queryByText('Adicionar')
    fireEvent.change(inputTask, { target: { value: 'Task 1!' } })
    expect(queryByText('Task 1!')).not.toBeInTheDocument()
    fireEvent.click(buttonAdd)
    expect(queryByText('Task 1!')).toBeInTheDocument()
  });
});

/*
Exercício 1
Implemente os testes:

Necessário um botão para adicionar a tarefa.
Botão precisa conter o texto "Adicionar".
Ao ser clicado a tarefa digitada pelo o usuário precisa ser salva.
Pode adicionar mais testes que achar relevantes para verificar a funcionalidade desse botão.
*/