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