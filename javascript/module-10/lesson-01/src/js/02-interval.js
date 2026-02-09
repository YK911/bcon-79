import "../common.css";

/**
 * Метод setInterval(callback, delay, args)
 */

const logger = time => {
  console.log(`Лог кожні ${time} мс - ${Date.now()}`);
};

console.log("До виклику setInterval");
const intervalId = setInterval(logger, 2000, 2000);
console.log("Після виклику setInterval");

/**
 * Очищення інтервалу за допомогою clearInterval(intervalId)
 */

setTimeout(() => {
  clearInterval(intervalId);
}, 5000);
