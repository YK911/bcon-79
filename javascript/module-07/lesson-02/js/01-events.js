/**
 * Подія сlick
 *
 * Натискаючи на кнопку "Click me" змусь
 * червоний квадратик зміщуватись на 50px по діагоналі
 */

const clickMe = document.querySelector(".js-click");
const box = document.querySelector(".js-box");
let shift = 0; // 50 + 50
const rect = box.getBoundingClientRect();
console.log("🚀 ~ rect:", rect);

clickMe.addEventListener("click", event => {
  console.log("clicked");

  shift += 50;
  // box.style.transform = `translate(${shift}px, ${shift}px)`;
  box.style.marginTop = `${shift}px`;
  box.style.marginLeft = `${shift}px`;
  // const rect = box.getBoundingClientRect();
  // console.log("🚀 ~ rect:", rect);
});
