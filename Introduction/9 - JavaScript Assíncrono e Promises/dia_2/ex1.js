const appendJoke = (joke) => {
  const h2 = document.querySelector('H2');

  h2.innerText = joke;
}

const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
  .then(response => response.json())
  .then(({ joke }) => appendJoke(joke));
};

window.onload = () => fetchJoke();
