function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

function createDaysOfTheMonth() {
  const aprDays = [28, 29, 30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
  const aprDaysList = document.querySelector('#days');

  for (let index = 0; index < aprDays.length; index += 1) {
    const days = aprDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;
    dayListItem.className = 'day';

    aprDaysList.appendChild(dayListItem);

    if (days === 2 || days === 9 || days == 16 || 
        days === 23 || days === 30) {
      dayListItem.className = 'day friday';
    }
    if (days === 2 || days === 21) {
      dayListItem.className = 'day holiday';
    }
  };
};

function holidays(event) {
  const container = document.querySelector('.buttons-container');
  const btn = document.createElement('button');
  btn.id = 'btn-holiday';

  btn.innerHTML = event;
  container.appendChild(btn);
};

holidays('Feriados');
createDaysOfTheMonth();
createDaysOfTheWeek();

// Escreva seu código abaixo.