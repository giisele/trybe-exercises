function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Ex. 1
function isFriday(day) {
  switch(day) {
    case 4:
      return true;
    case 11:
      return true;
    case 18:
      return true;
    case 25:
      return true;
    default:
      return false;
  }
}

function isHoliday(day) {
  switch(day) {
    case 24:
      return true;
    case 25:
      return true;
    case 31:
      return true;
    default:
      return false;
  }
}

function createDaysOfTheMonth() {
  const dezDays = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  const dezDaysList = document.querySelector('#days');

  for (let index = 0; index < dezDays.length; index += 1) {
    const days = dezDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;
    dayListItem.className = 'day';

    dezDaysList.appendChild(dayListItem);

    if (isFriday(days)) {
      dayListItem.classList.add('friday');
      dayListItem.dataset.day = days;
    }
    if (isHoliday(days)) {
      dayListItem.classList.add('holiday');
    }
  }
}

createDaysOfTheMonth();

// Ex. 2
function holidayButtonAdd(event) {
  const container = document.querySelector('.buttons-container');
  const btn = document.createElement('button');

  btn.id = 'btn-holiday';
  btn.innerHTML = event;

  container.appendChild(btn);
}

holidayButtonAdd('Feriados');

// Ex. 3
let areHolidaysHighlighted = false;
const holidayButton = document.getElementById('btn-holiday');

function toggleHolidaysHighlight() {
  const holidays = document.querySelectorAll('.holiday');
  let newColor;

  if (areHolidaysHighlighted) {
    newColor = 'rgb(238, 238, 238)';
  } else {
    newColor = 'white';
  }

  for (let index = 0; index < holidays.length; index += 1) {
    holidays[index].style.backgroundColor = newColor;
  }

  areHolidaysHighlighted = !areHolidaysHighlighted;
}

holidayButton.addEventListener('click', toggleHolidaysHighlight);

// Ex. 4
function fridayButtonAdd(event) {
  const container = document.querySelector('.buttons-container');
  const btn = document.createElement('button');

  btn.id = 'btn-friday';
  btn.innerHTML = event;

  container.appendChild(btn);
}

fridayButtonAdd('Sexta-feira');

// Ex. 5
let areFridayYet = false;
const fridayButton = document.getElementById('btn-friday');

function toggleFridaysText() {
  const fridays = document.querySelectorAll('.friday');

  for (let friday of fridays) {
    if (areFridayYet) {
      friday.innerText = friday.dataset.day;
    } else {
      friday.innerText = 'SEXTOU';
    }
  }

  areFridayYet = !areFridayYet;
}

fridayButton.addEventListener('click', toggleFridaysText);
