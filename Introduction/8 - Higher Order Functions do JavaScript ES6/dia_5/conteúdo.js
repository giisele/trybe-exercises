// spread
// Faça uma função chamada fruitSalad passando como parâmetro specialFruit e additionalItens , faça a função retornar uma lista única contendo todos os itens da nossa salada de frutas usando o spread .
const specialFruit = ['banana', 'maçã', 'mamão'];

const additionalItens = ['leite condensado', 'granola', 'canela em pó'];

const fruitSalad = (fruit, additional) => [...fruit, ...additional];

console.log(fruitSalad(specialFruit, additionalItens));

