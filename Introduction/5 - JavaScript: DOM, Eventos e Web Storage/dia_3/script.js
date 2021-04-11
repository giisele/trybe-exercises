let year = document.getElementById('year');
let month = document.getElementById('month');
year.innerText = '2021';
month.innerText = 'abril';

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
function isFriday(day, monthDay) {
  let firstFriday = 2;
  
  for (let index = firstFriday; index < monthDay.length; index += 7) {
    if (index === day) return true; 
  }
  return false;
}

function isHoliday(day) {
  switch(day) {
    case 2: return true;
    case 21: return true;
    default: return false;
  }
}

function createDaysOfTheMonth() {
  const monthDay = [28, 29, 30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

  const monthDayList = document.querySelector('#days');
  let cont = 1;
  for (let index = 0; index < monthDay.length; index += 1) {
    const days = monthDay[index];
    const dayListItem = document.createElement('li');
    if (cont === monthDay[index]) {
      dayListItem.innerHTML = days;
      cont += 1;

      dayListItem.className = 'day';

      if (isFriday(days, monthDay)) {
        dayListItem.classList.add('friday');
        dayListItem.dataset.day = days;
      }

      if (isHoliday(days)) dayListItem.classList.add('holiday');

    } else {
      dayListItem.innerHTML = '';
    }
    
    monthDayList.appendChild(dayListItem);
    
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

  if (areHolidaysHighlighted) newColor = 'rgb(238, 238, 238)';
  else newColor = 'white';

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
    if (areFridayYet) friday.innerText = friday.dataset.day;
    else friday.innerText = 'SEXTOU';
  }

  areFridayYet = !areFridayYet;
}

fridayButton.addEventListener('click', toggleFridaysText);

// Ex. 6
const daysId = document.getElementById('days');
function zoomIn(event) {
  event.target.style.fontSize = '2em';
}

function zoomOut(event) {
  event.target.style.fontSize = null;
}

daysId.addEventListener('mouseover', zoomIn);
daysId.addEventListener('mouseout', zoomOut);

// Ex. 7
function addTask(task) {
  const container = document.querySelector('.my-tasks');
  const element = document.createElement('span');

  element.innerHTML = task;

  container.appendChild(element);
}

addTask('Cozinhar');
addTask('Dormir');

// Ex. 8
function taskColor(color) {
  const container = document.querySelector('.my-tasks');
  const element = document.createElement('div');

  element.style.backgroundColor = color;
  element.className = 'task';

  container.appendChild(element);
}

taskColor('blue');
taskColor('salmon');

// Ex. 9
let taskSelected;
const taskLabels = document.getElementsByClassName('task');

for (let task of taskLabels) {
  task.addEventListener('click', clickTask);
}

function clickTask(task) {
  let classList = task.target.classList;

  if (classList.contains('task--selected')) {
    taskSelected = undefined;
    classList.remove('task--selected');
  } else {
    if (taskSelected) taskSelected.classList.remove('task--selected');

    classList.add('task--selected');
    taskSelected = task.target;
  }
}

// Ex. 10
let dayTask = document.querySelectorAll('.day');

for (let day of dayTask) {
  day.addEventListener('click', function() {
    taskColor = document.querySelector('.task--selected').style.backgroundColor;

    if (day.style.color === taskSelected.style.backgroundColor) day.style.color = 'rgb(119, 119, 119)';
    else day.style.color = taskColor;
  });
}

// Ex. 11 (Bônus)
let btnTask = document.querySelector('#btn-add');
const input = document.querySelector('#task-input');

input.addEventListener('keypress', function({key}) {
  if (key === 'Enter') addNewTask();
})

btnTask.addEventListener('click', addNewTask);

function addNewTask() {
  if (!input.value) alert ('ERRO');

  const taskList = document.querySelector('.task-list');
  const task = document.createElement('li');
  task.innerText = input.value;
  taskList.appendChild(task);

  input.value = '';
  input.focus();
}
