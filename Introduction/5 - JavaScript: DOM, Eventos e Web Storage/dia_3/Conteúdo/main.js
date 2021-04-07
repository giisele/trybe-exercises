const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');

divUm.addEventListener('click', addClass);
divDois.addEventListener('click', addClass);
divTres.addEventListener('click', addClass);

function addClass(event) {
  // Crie uma função que adicione a classe 'tech' ao elemento selecionado;
  // 1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
  
  divUm.classList.remove('tech');
  divDois.classList.remove('tech');
  divTres.classList.remove('tech');
  event.target.classList.add('tech');
}

input.addEventListener('keyup', function() {
  // Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento com a classe 'tech';
  document.querySelector('.tech').innerHTML = document.getElementById('input').value;
});


myWebpage.addEventListener('click', function(event) {
  // Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele redirecione para alguma página;
  // 1. Que tal redirecionar para seu portifólio?

  let id = event.target.id;
  document.getElementById(id).innerHTML = '<a href=\'https://giisele.github.io/\' target=\'_blank\'>Meu top 3 do Spotrybefy</a>';
  console.log(id.innerHTML);

  // Usei apenas o 'click' e não 'dblclick' pois com dois cliques eu sou efetivamente redirecionada ao porfifólio, com 'dblclick' eu teria que clicar duas vezes pra ativar o link e depois mais uma vez pra abrir a página
});

myWebpage.addEventListener('mouseover', function(event) {
  // Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere a cor do mesmo;

  let id = event.target.id;
  document.getElementById(id).style.color = 'salmon';
});


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target, que retorna o objeto que disparou o evento.
}

divUm.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio navegador fará esse trabalho por você, não é legal? Desse jeito, o event.target na nossa função retornará o objeto 'divUm'.