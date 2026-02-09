import "../common.css";

/**
 * Метод window.setTimeout(callback, delay, args)
 */

// console.log("До виклику setTimeout");

// const callback = () => {
//   console.log("1 - Всередині зворотного виклику для setTimeout");
// };
// setTimeout(callback, 1000);

// console.time("Start loop");
// for (let i = 0; i < 100_000; i++) {
//   console.log("🚀 ~ i:", i);
// }
// console.timeEnd("Start loop");
// // console.log("2 - Всередині зворотного виклику для setTimeout");

// console.log("Після виклику setTimeout");

/**
 * Очищення таймаута за допомогою clearTimeout(timeoutId)
 */
const logger = time => {
  console.log(`Лог через ${time} мс, оскільки не скасували таймаут`);
};
// const timerId = setTimeout(logger, 2000, 2000);
// clearTimeout(timerId);

/**
 * Можливість передати параметри для колбеку
 */
// const id = setTimeout(
//   ({ name, country }) => {
//     console.log(`Hello, my name is ${name}, I'm from ${country}`);
//   },
//   5000,
//   { name: "Mango", country: "Ukraine" }
// );
// console.log("🚀 ~ id:", id);
