/*
Em src/actions foi retirada a action understandMatrix do arquivo index.js, que deverá receber um type 'PILL_TAKEN' e um 'id' como parâmetro.

Seu objetivo é criar a action que retornará o objeto com o type e id que serão passados para o reducer.
*/

export const PILL_TAKEN = 'PILL_TAKEN';

export const understandMatrix = (id) => ({
  type: PILL_TAKEN,
  id,
});
