const btnStart = document.querySelector("button[data-start]");
const btnStop = document.querySelector("button[data-stop]");
const body = document.querySelector('body');

btnStart.addEventListener('click', changeColor)

function changeColor(){
   changeColor = setInterval(() => {body.style.background =`#${Math.floor(Math.random() * 16777215).toString(16)}`}, 1000)
   btnStart.disabled = true;
   btnStop.disabled = false;
}

btnStop.addEventListener("click", () => {
    clearInterval(changeColor);
    btnStop.disabled = true;
    btnStart.disabled = false;
  });


//   import flatpickr from 'flatpickr';
// import Notiflix from 'notiflix';

// const datePicker = document.querySelector('#datetime-picker');
// const btnStart = document.querySelector('[data-start]');
// const days = document.querySelector('[data-days]');
// const hours = document.querySelector('[data-hours]');
// const minutes = document.querySelector('[data-minutes]');
// const seconds = document.querySelector('[data-seconds]');
//const styleText = document.querySelector('.label');
//console.log(notiflix);
//styleText.

// btnStart.disabled = true;

// datePicker.addEventListener('input', flatpickr);
//datePicker = new flatpickr(input, options);

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     if (selectedDates[0] > new Date()) {
//       Notiflix.Notify.failure('Please choose a date in the future');
//       btnStart.disabled = true;
//     } else {
//       btnStart.disabled = false;
//     }
//     console.log(selectedDates[0]);
//   },
// };

// flatpickr (datePicker, options);
// flatpickr('#datetime-picker', {
//   altInput: true,
//   minDate: "today",
//   dateFormat: "YYYY-MM-DD HH:MM",
// });

// function convertMs(ms) {

//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   const days = Math.floor(ms / day);

//   const hours = Math.floor((ms % day) / hour);

//   const minutes = Math.floor(((ms % day) % hour) / minute);

//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }

//   // console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
//   // console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
//   // console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}