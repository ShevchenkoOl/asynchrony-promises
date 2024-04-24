import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const timer = document.querySelector('.timer');
const fields = document.querySelectorAll('.field');
const labels = document.querySelectorAll('.label');
const form = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('button[data-start]');
const day = document.querySelector('span[data-days]');
const hour = document.querySelector('span[data-hours]');
const minute = document.querySelector('span[data-minutes]');
const second = document.querySelector('span[data-seconds]');

timer.style.cssText = `
  display: flex;
  font-size: 20px;
  font-weight: 600; 
  justify-content: center;
  align-items: center;
  padding: 20px;
  border: 2px solid black;
  margin-top: 30px;
`;

fields.forEach(field => {
  field.style.flexDirection = 'column';
  field.style.display = 'flex';
  field.style.alignItems =
    'center'; /* Центрирование содержимого по горизонтали */
  field.style.marginRight = '20px'; /* Расстояние между контейнерами .field */
});

labels.forEach(label => {
  label.style.marginTop = '5px'; /* Расстояние между спанами */
});

btnStart.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      btnStart.disabled = true;
      Notify.failure('Please choose a date in the future');
    } else {
      btnStart.disabled = false;
    }
    //console.log(selectedDates[0]);
  },
};

flatpickr(form, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

const addLeadingZero = value => {
  return value.toString().padStart(2, '0');
};

btnStart.addEventListener('click', () => {
  btnStart.disabled = true;
  let timerCountDown = setInterval(() => {
    const differentDate = new Date(form.value) - new Date();
    let timeObject = convertMs(differentDate);
    if (differentDate >= 0) {
      day.textContent = addLeadingZero(timeObject.days);
      hour.textContent = addLeadingZero(timeObject.hours);
      minute.textContent = addLeadingZero(timeObject.minutes);
      second.textContent = addLeadingZero(timeObject.seconds);
    
      if (differentDate <= 10000 && !notifyShown) { // Проверяем, что время меньше или равно 10 секунд и сообщение не было показано ранее
        timer.style.color = "red";
        Notify.info("Remain 10 seconds to the end!");
        notifyShown = true; // Устанавливаем флаг, что сообщение уже было показано
      }
    } 
    else {
      clearInterval(timerCountDown);
      timer.style.color = "black";
      Notify.failure('Time is out');
    }
  }, 1000);
  let notifyShown = false; // Флаг для отслеживания показа сообщения

});


