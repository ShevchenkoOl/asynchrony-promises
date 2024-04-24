
const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

const changeBackground = () => {
   intervalID = setInterval(() => {
      body.style.background = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
   }, 2000);
   btnStart.disabled = true;
   btnStop.disabled = false;
};

const stopChange = () => {
   clearInterval(intervalID); // Остановка интервала
   btnStart.disabled = false;
   btnStop.disabled = true;
};

btnStart.addEventListener('click', changeBackground);
btnStop.addEventListener('click', stopChange);