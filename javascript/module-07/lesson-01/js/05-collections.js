/*
 * Створюємо та додаємо колекцію
 */
const options = [
  { label: "червоний", color: "#F44336" },
  { label: "зелений", color: "#4CAF50" },
  { label: "синій", color: "#2196F3" },
  { label: "сірий", color: "#607D8B" },
  { label: "рожевий", color: "#E91E63" },
  { label: "індіго", color: "#3F51B5" },
];

const colorPickerContainerEl = document.querySelector(".js-color-picker");

/*
 * Пишемо функцію для створення розмітки колорпікера
 */
function createColorpickerMarkup(options = []) {
  return options.map((option, idx) => {
    const btnEl = document.createElement("button");
    btnEl.textContent = option.label;
    btnEl.style.backgroundColor = option.color;
    btnEl.type = "button";
    btnEl.classList.add("color-picker__option");

    return btnEl;
  });
  // return options.map((option, idx) => {
  //   setTimeout(
  //     () => {
  //       const btnEl = document.createElement("button");
  //       btnEl.textContent = option.label;
  //       btnEl.style.backgroundColor = option.color;
  //       btnEl.type = "button";
  //       btnEl.classList.add("color-picker__option");

  //       // return btnEl;

  //       colorPickerContainerEl.append(btnEl);
  //     },
  //     (idx + 1) * 1000
  //   );
  // });
}

const btnsMarkup = createColorpickerMarkup(options);

setTimeout(() => {
  colorPickerContainerEl.append(...btnsMarkup);
}, 3000);
