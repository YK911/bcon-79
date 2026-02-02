/**
 * Додавання прослуховувача подій на кожен елемент
 *
 * Отримай колір квадратика по якому було здійснено клік
 */

const container = document.querySelector(".container");
// const boxesEl = document.querySelectorAll(".box");

// boxesEl.forEach(box => {
//   box.addEventListener("click", event => {
//     console.log("work");
//     console.log(event.target.dataset.color);
//   });
// });

/**
 * Дегегування подій
 *
 * Отримай колір квадратика по якому було здійснено клік
 */
container.addEventListener("click", event => {
  // console.log(event.target);
  // console.log(event.currentTarget);
  if (event.target === event.currentTarget) {
    console.log("Click on container. Stop work");
    return;
  }

  console.log(event.target.dataset.color);
});

// Example

const output = document.querySelector(".output");
const colorPalette = document.querySelector(".colorpalette");

createColorpaletteitems();
// Delegation
colorPalette.addEventListener("click", handleColoritemClick);

function createColorpaletteitems() {
  const items = [];
  for (let i = 0; i < 20; i++) {
    const color = generateRandomColor();
    const element = document.createElement("button");
    element.classList.add("item");
    element.type = "button";
    element.style.background = color;
    element.dataset.color = color;
    items.push(element);
  }

  colorPalette.append(...items);
}

function generateRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function handleColoritemClick(event) {
  const currEl = event.target;

  if (currEl.nodeName !== "BUTTON") {
    return;
  }

  output.textContent = currEl.dataset.color;
}
