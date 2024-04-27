const start = document.querySelector('.start');
const conteiner = document.querySelector('.conteiner');
const body = document.querySelector('body');
const delay = 700;


const startGame = (evt) => {
  evt.preventDefault();
  const arrSmile = [];
  const arrDol = [];
  const childrenLength = conteiner.children.length; // встановлюємо кількість дітей в нашому контейнері
  const {
    level: { value: level },
    start,
  } = evt.currentTarget.elements; // Здесь используется деструктуризация объекта, чтобы извлечь свойство level из объекта evt.currentTarget.elements. Деструктуризация объекта позволяет извлекать отдельные свойства объекта и присваивать их локальным переменным.Таким образом, выражение const {level} = evt.currentTarget.elements; извлекает значение поля формы с именем level и присваивает его переменной level.


  start.disabled = true;


  for (let i = 0; i < childrenLength; i += 1) {
    // console.log(conteiner.children[i]);
    const item = conteiner.children[i];
    item.textContent = '';
    createPromise(Number(level), '👌', '😭', delay * i)
      .then(resp => {
        markField(item, resp);
        arrSmile.push(resp);
      })
      .catch(resp => {
        markField(item, resp);
        arrDol.push(resp);
      })
      .finally((resp) => {
        if (i === childrenLength - 1) {
          start.disabled = false;
          arrDol.push(resp);
        }
        const result =
          arrSmile.length === childrenLength ||
          arrDol.length === childrenLength;
          if (result) {
           body.innerHTML = "You are win!!!!";
        }
      });
  }
};


const isWinner = btn => {
  return arrSmile;
};

const markField = (item, smile) => {
  item.textContent = smile;
};


start.addEventListener('submit', startGame);


const createPromise = (level, win, lose, delay) => {
  const random = Math.random();
  const promise = new Promise((res, rej) => {
    setTimeout(() => {
      if (random > level) {
        res(win);
      } else {
        rej(lose);
      }
    }, delay);
  });

  return promise;
};
