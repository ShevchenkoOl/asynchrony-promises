const dayWeek = document.querySelector('.date-day');
const dayDate = document.querySelector('.date');
const month = document.querySelector('.date-month');
const year = document.querySelector('.date-year');
const clock = document.querySelector('.digital-clock');
const secondArrow = document.querySelector('.clock-seconds__arrow');
const minuteArrow = document.querySelector('.clock-minutes__arrow');
const hourArrow = document.querySelector('.clock-hours__arrow');

const arrWeekDays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const arrMonth = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

dayWeek.style.color = 'green';
dayDate.style.color = 'green';
month.style.color = 'green';
year.style.color = 'green';

setInterval(() => {
  const currentDate = new Date();

  dayWeek.textContent = arrWeekDays[currentDate.getDay()];
  dayDate.textContent = currentDate.getDate();
  month.textContent = arrMonth[currentDate.getMonth()];
  year.textContent = currentDate.getFullYear();

  const hour = currentDate.getHours().toString().padStart(2, '0');
  const minute = currentDate.getMinutes().toString().padStart(2, '0');
  const second = currentDate.getSeconds().toString().padStart(2, '0');

  clock.style.color = 'green';

  clock.textContent = `The time: ${hour}:${minute}:${second}`;

  const forSeconds = currentDate.getSeconds() * (360 / 60); //під час одного руху стрілочка має рухатися на 6 градусів
  const forMimutes = currentDate.getMinutes() * 6;
  const forHours =
    currentDate.getHours() * 30 + (30 / 60) * currentDate.getMinutes(); //360/12=30, 30 градусів - це відстань між годинами, а ми маєи додати ще нашу мінуту * 6 /30, тоді годинникова стрілка буде плавно переходити

  secondArrow.style.transform = `rotate(${forSeconds}deg)`;
  minuteArrow.style.transform = `rotate(${forMimutes}deg)`;
  hourArrow.style.transform = `rotate(${forHours}deg)`;
}, 1000);
