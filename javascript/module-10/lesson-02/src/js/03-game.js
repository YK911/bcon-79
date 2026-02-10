import "../common.css";

/**
 * Напиши програмне забезпечення для ігрового автомата.
 * Для вирішення завдання використай готову розмітку HTML та базову стилізацію.
 *
 * Після натиснення на кнопку "Start game"
 * в кожному віконці по черзі має з'являтись
 * смайлик з затримкою в 1 секунду ('🤑' або '👿')
 *
 * Під час обробки кожного віконця створи масив з Promis-ами
 * в якому кожен з них буде відповідати за своє віконце,
 * після чого оброби даний масив за допомогою методу Promise.allSettled
 *
 * Після того як всі віконця були заповнені потрібно
 * щоб скріпт автоматично визначав чи гравець переміг, чи ні.
 * Якщо в кожному віконці однаковий смайлик це означає що користувач переміг
 *
 * В поле result виводить повідомлення про статус гри ('Winner' або 'Loser')
 *
 * Після повторного натискання на кнопку "Start game"
 * поле має очищатись, а гра починатись з початку.
 */

const startBtn = document.querySelector(".start-btn");
const container = document.querySelector(".slot-container");
const result = document.querySelector(".result");

startBtn.addEventListener("click", handleStart);

function handleStart() {
  const promises = [...container.children].map(() => {
    return new Promise((resolve, reject) => {
      const passed = Math.random() > 0.5;

      if (passed) {
        resolve("🤑");
      }
      reject("👿");
    });
  });

  Promise.allSettled(promises).then(items => {
    console.log("🚀 ~ handleStart ~ items:", items);
    items.forEach((item, index) => {
      container.children[index].textContent = "";
      result.innerHTML = "";

      setTimeout(
        () => {
          container.children[index].textContent = item.value || item.reason;

          if (index === items.length - 1) {
            result.innerHTML = isWinner ? "Winner" : "Looser";
          }
        },
        1000 * (index + 1)
      );
    });

    const isWinner =
      items.every(item => item.status === "fulfilled") ||
      items.every(item => item.status === "rejected");
  });
}
