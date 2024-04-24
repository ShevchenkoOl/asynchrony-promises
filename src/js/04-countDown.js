import { Notify } from 'notiflix/build/notiflix-notify-aio';

const timer = document.querySelector('div');

timer.style.cssText = `
  top: 50%;
  left: 50%;
  position:fixed;
  transform: translate(-50%, -50%);
  font-size: 56px;
  font-weight: 800; 
`;
const addLeadingZero = value => {
  return value.toString().padStart(2, '0');
};

/* Обратный отчёт*/
let timeEnd = Number(prompt('Please enter a number for the countdown'));
let remainingTime = timeEnd * 1000;
timer.textContent = addLeadingZero(remainingTime / 1000);
const id = setInterval(() => {
  timeEnd -= 1;
  timer.textContent = addLeadingZero(timeEnd);
}, 1000);

/*после окончания обратного отчёта останавливаем функцию интервала*/
const id2 = setTimeout(() => {
  timer.textContent = '00';
  clearInterval(id);
  Notify.info('The time is out');
}, remainingTime);

