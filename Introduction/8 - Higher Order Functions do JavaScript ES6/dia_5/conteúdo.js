// spread operator
// Faça uma função chamada fruitSalad passando como parâmetro specialFruit e additionalItens , faça a função retornar uma lista única contendo todos os itens da nossa salada de frutas usando o spread .
const specialFruit = ['banana', 'maçã', 'mamão'];

const additionalItens = ['leite condensado', 'granola', 'canela em pó'];

const fruitSalad = (fruit, additional) => [...fruit, ...additional];

console.log(fruitSalad(specialFruit, additionalItens));


// parametro rest
function quantosParams(...args) {
  console.log('parâmetros:', args);
  return `Você passou ${args.length} parâmetros para a função.`;
}

console.log(quantosParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
console.log(quantosParams('string', null, [1, 2, 3], { })); // Você passou 4 parâmetros para a função.

const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(4, 7, 8, 9, 60)); // 88


// object destructuring
const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

const { name, seller } = product;
console.log(name); // Smart TV Crystal UHD
console.log(seller); // Casas de Minas

const printProductDetails = ({ name, price, seller }) => {
  console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
};
printProductDetails(product); // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas


// array destructuring
const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];
const [firstCountry, secondCountry, thirdCountry, fourthCountry] = arrayCountries;

console.log(firstCountry); // Brazil
console.log(secondCountry); // Japan
console.log(thirdCountry); // China
console.log(fourthCountry); // Canada

const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];
console.log(saudacoes[1](saudacoes[0])); // Olá
// na verdade o console log acima tem resultado Olá undefined
// Produza o mesmo resultado acima, porém utilizando array destructuring
[saudações, undefined] = saudacoes;
console.log(saudações);
// não sei se entendi muito bem o que o exercicio acima estava pedindo, somente retirei o undefined

const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];
(saudacoes[1](saudacoes[0])); // Olá
// Produza o mesmo resultado acima, porém utilizando array destructuring
// agora com a modificação que me passaram via slack, eu não soube fazer

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo
[animal, bebida, comida] = [comida, animal, bebida];
console.log(comida, animal, bebida); // arroz gato água

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo
[a, b, c, ...numerosPares] = numerosPares;
console.log(numerosPares); // [6, 8, 10, 12]


// default destructuring
const person = {
  name: 'João',
  lastName: 'Jr',
  age: 34,
};

const { nationality = 'Brazilian' } = person;
console.log(nationality); // Brazilian

const getNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const person = {
    firstName: 'João',
    lastName: 'Jr II',
};

const otherPerson = {
    firstName: 'Ivan',
    lastName: 'Ivanovich',
    nationality: 'Russian',
};

// console.log(getNationality(otherPerson)); // Ivan is Russian
// console.log(getNationality(person)); // João is undefined

// Ajuste a função nationality para que a chamada getNationality(person) retorne João is Brazilian .
const { firstName, nationality = 'Brazilian' } = person;
const getNationality = (obj) => `${obj.firstName} is ${nationality}`;
console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));


// Object property shorthand
const getPosition = (latitude, longitude) => ({
  latitude: latitude,
  longitude: longitude});

console.log(getPosition(-19.8157, -43.9542)); // { latitude: -19.8157, longitude: -43.9542 }

// altere a função getPosition utilizando a property shorthand
const getPosition = (latitude, longitude) => ({
  latitude,
  longitude});

console.log(getPosition(-19.8157, -43.9542)); // { latitude: -19.8157, longitude: -43.9542 }
