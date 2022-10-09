import Notiflix from 'notiflix';

const delay = document.querySelector('input[name="delay"]');
const step = document.querySelector('input[name="step"]');
const amount = document.querySelector('input[name="amount"]');
const btnSubmit = document.querySelector('button[type="submit"]');
//console.log(btnSubmit);

function createPromise(position, delay) {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const shouldResolve = Math.random() > 0.3;
        if (shouldResolve) {
          resolve({ position, delay });
        } else {
          reject({ position, delay });
        }
      }, delay);
    });
    return promise;
  }
  
  btnSubmit.addEventListener('click', e => {
    e.preventDefault();
    let firstDelay = Number(delay.value);
    let delayStep = Number(step.value);
    for (let i = 0; i < amount.value; i++) {
      createPromise(1 + i, firstDelay + i * delayStep)
        .then(({ position, delay }) => {
          Notiflix.Notify.success(
            `✅ Fulfilled promise ${position} in ${delay}ms`
          );
        })
        .catch(({ position, delay }) => {
          Notiflix.Notify.failure(
            `❌ Rejected promise ${position} in ${delay}ms`
          );
        });
    }
  });




// function createPromise(position, delay) {
//     const shouldResolve = Math.random() > 0.3;
//     if (shouldResolve) {
//       // Fulfill
//     } else {
//       // Reject
//     }
//   }

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     Notiflix.Notify.failure(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
//   });

// 1. Є функція createPromise(position, delay) - ВАЖЛИВО - вона повинна ВЕРТАТИ новий Promise
// 2. У тілі промісу, повинна бути затримка виклику колбеків resolve і reject, яка задається через параметр delay з функції (підказка - setTimeout).
// 3. До тіла промісу потрібно причепити методи then і catch, які будуь виконуватися з аргументами з колбеків resolve та reject. Аргументом що в resolve, що в reject буде об’єкт { position, delay }, а then і catch будуть виконувати свій колбек з переданими їм аргументами (у завданні колбеком методів всередині then i catch буде console.log)
// 4. Все, ви написали проміс, результат виконання якого ми отримаємо через delay часу, це готово.
// 5. Далі потрібно подумати, як нам визивати цей проміс потрібну кількість разів.
// 6. Подумали, придумали - добре, потім, на кожній ітерації виклику функції createPromise(position, delay), потрібно додавати +1 до position, і +delay до delay з поля “Delay step”.
// 7. Потім, потрібно буде врахувати ще умову з first delay, але тут буквально один if на 3 строки коду.