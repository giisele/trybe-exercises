document.querySelector('#header-container').style.backgroundColor = 'limegreen';
document.querySelector('*').style.backgroundColor = 'lightgray';

document.querySelector('.emergency-tasks').style.backgroundColor = 'salmon';
for (let index = 0; index < document.querySelectorAll('.emergency-tasks h3').length; index += 1) {
  document.querySelectorAll('.emergency-tasks h3')[index].style.backgroundColor = 'purple';
}

document.querySelector('.no-emergency-tasks').style.backgroundColor = 'yellow';
for (let index = 0; index < document.querySelectorAll('.no-emergency-tasks h3').length; index += 1) {
  document.querySelectorAll('.no-emergency-tasks h3')[index].style.backgroundColor = 'black';
}

  document.querySelector('#footer-container').style.backgroundColor = 'darkgreen';