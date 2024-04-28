/* Мікро процеси мають більший приоритет:
- Promise; в асинхронной операции - это объект в JavaScript, который представляет собой значение, которое может быть доступно сразу, позднее или никогда.
- Observer - В JavaScript паттерн Observer (Наблюдатель) является поведенческим шаблоном проектирования, который используется для создания механизма подписки и оповещения об изменениях в объекте или его состоянии. В этом шаблоне существует объект, который называется "Subject" (Субъект), и наблюдатели, которые называются "Observers" (Наблюдатели).

Макро процеси ы вони мають менший приоритет:
- setTimeout;
- setInterval;
- setImmediate; - используется для планирования выполнения функции после завершения текущего выполнения синхронного кода, но до начала выполнения событийного цикла.
- requestAnimationFrame - это метод, который используется в веб-разработке для выполнения анимаций и других операций, которые требуют обновления экрана с высокой частотой кадров. Он предоставляет браузеру уведомление о том, что вы хотите выполнить анимацию, и запрашивает выполнение функции перед рендерингом следующего кадра.
*/
//----Приклад:
// console.log('1');
// setTimeout(() => {console.log('2')}, 0);
// Promise.resolve('3').then(value => console.log(value));
// console.log('4');
// результат в консолы буде 1 4 3 2

// const promise = new Promise((res, rej) => {
//   // статус resolve (fulfilled) - передає інформацію про успішне виконання промису та rejected - неуспішне виконання
//   const random = Math.random();
//   console.log(random);
//   setTimeout(() => {
//     if (random > 0.5) {
//       res('Yes 😎');
//     } else {
//       rej('No 😢');
//     }
//   }, 1000);
// });
// console.log(promise);

// //для обробки відповіді промиса нам необхідно використати лануюг .then, .catch, .finnaly

// promise // в параметрах передаеться дві калбек функції перша передає успішне виконання, тобто наш resolve; 2 - reject.
//   .then(data => {
//     console.log(data);
//     return data;
//   })
//   .then(resp => {
//     console.log(resp);
//   })
//   .catch(err => {
//     console.error(err);
//   });


//Промисі вікористовуються для запитів на бекенд. Ствлримо якись запит:
// const resp = fetch('https://pokeapi.co/api/v2/pokemon/ditto');
// console.log(resp);

// resp
// .then(resp => resp.json())
// .then(data => console.log(data))
// .catch(err => console.log(err))


console.log('1');

// import Notiflix from "notiflix";

// const form = document.querySelector('.form');
// const firstDelay = document.querySelector('input[name=delay]');
// const step = document.querySelector('input[name=step]');
// const inputAmount = document.querySelector('input[name=amount]');


// function createPromise() {
//    console.log("Hi");
// }

// const checkin = (evt) => {
//   evt.preventDefault();
//   const amount = inputAmount.value;
//   for (let i = 0; i < amount; i+=1) {
//   createPromise();
// }
// }

// form.addEventListener('submit', checkin);
//form.addEventListener('submit', createPromise);
 


// form.addEventListener('submit', (evt) => {
//     evt.preventDefault();
//     const amount = inputAmount.value;
//     console.log(amount);
//   });













// import Notiflix from 'notiflix';

// const delay = document.querySelector('input[name="delay"]');
// const step = document.querySelector('input[name="step"]');
// const amount = document.querySelector('input[name="amount"]');
// const btnSubmit = document.querySelector('button[type="submit"]');
// //console.log(btnSubmit);

// function createPromise(position, delay) {
//     const promise = new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const shouldResolve = Math.random() > 0.3;
//         if (shouldResolve) {
//           resolve({ position, delay });
//         } else {
//           reject({ position, delay });
//         }
//       }, delay);
//     });
//     return promise;
//   }

//   btnSubmit.addEventListener('click', e => {
//     e.preventDefault();
//     let firstDelay = Number(delay.value);
//     let delayStep = Number(step.value);
//     for (let i = 0; i < amount.value; i++) {
//       createPromise(1 + i, firstDelay + i * delayStep)
//         .then(({ position, delay }) => {
//           Notiflix.Notify.success(
//             `✅ Fulfilled promise ${position} in ${delay}ms`
//           );
//         })
//         .catch(({ position, delay }) => {
//           Notiflix.Notify.failure(
//             `❌ Rejected promise ${position} in ${delay}ms`
//           );
//         });
//     }
//   });

// 1. Є функція createPromise(position, delay) - ВАЖЛИВО - вона повинна ВЕРТАТИ новий Promise
// 2. У тілі промісу, повинна бути затримка виклику колбеків resolve і reject, яка задається через параметр delay з функції (підказка - setTimeout).
// 3. До тіла промісу потрібно причепити методи then і catch, які будуь виконуватися з аргументами з колбеків resolve та reject. Аргументом що в resolve, що в reject буде об’єкт { position, delay }, а then і catch будуть виконувати свій колбек з переданими їм аргументами (у завданні колбеком методів всередині then i catch буде console.log)
// 4. Все, ви написали проміс, результат виконання якого ми отримаємо через delay часу, це готово.
// 5. Далі потрібно подумати, як нам визивати цей проміс потрібну кількість разів.
// 6. Подумали, придумали - добре, потім, на кожній ітерації виклику функції createPromise(position, delay), потрібно додавати +1 до position, і +delay до delay з поля “Delay step”.
// 7. Потім, потрібно буде врахувати ще умову з first delay, але тут буквально один if на 3 строки коду.
