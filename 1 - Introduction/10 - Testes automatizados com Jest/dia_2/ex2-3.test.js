const { it, expect } = require('@jest/globals');

const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
  };

  const findUserById = (id) => {
    return new Promise((resolve, reject) => {
        if (users[id]) {
          return resolve(users[id]);
        };

        return reject({ error: 'User with ' + id + ' not found.' });
    });
  };

  const getUserName = (userID) => {
    return findUserById(userID).then(user => user.name);
  };

// Utilizando a sintaxe de Promise , faça um teste que verifique o resultado da função getUserName para o caso em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado. Dica : Veja os dados falsos utilizados no banco de dados, disponíveis na variável users , para saber quais IDs existem.

describe('getUserName - promise (ex2)', () => {
  describe('when the user id exists', () => {
    it('returns the user name', () => {
      expect.assertions(1);
      return getUserName(4).then(data => expect(data).toEqual('Mark'));
      // acima retirado do gabarito pq eu tava complicando tudo
    });
  });

  describe('when the user id does not exists', () => {
    it('returns an error', () => {
      expect.assertions(1);
      return getUserName(2).catch(error =>
        expect(error).toEqual({ error: 'User with 2 not found.' })
      );
    });
  });
});

// Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await . Dica: Utilize o try/catch para o caso de erro.

describe('getUsername - async/await (ex3)', () => {
  describe('when the user id exists', () => {
    it('returns the user name', async () => {
      expect.assertions(1);
      const username = await getUserName(4);
      expect(username).toBe('Mark');
    });
  });

  describe('when the user id does not exists', () => {
    it('returns an error', async () => {
      expect.assertions(1);
      try {
        await getUserName(2);
      } catch (error) {
        expect(error).toEqual({ error: 'User with 2 not found.' });
      };
    });
  });
});