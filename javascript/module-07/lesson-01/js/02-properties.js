/*
 * Властивості елемента (hero)
 * - Зображення
 * - Текст та textContent
 * https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480
 */

const imageEl = document.querySelector(".hero__image");
console.log(imageEl.src);
console.log(imageEl.alt);
console.log(imageEl.width);

setTimeout(() => {
  imageEl.src =
    "https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480";

  imageEl.alt = "Cute cat";
}, 2000);

const heroTitleEl = document.querySelector(".hero__title");

// console.log(heroTitleEl.textContent);
// heroTitleEl.textContent = "This is <i>cute</i> cat";
// heroTitleEl.innerHTML = "This is <i>cute</i> cat";
/*
 * Атрибути
 * - get(ім'я-атрибута)
 * - set(ім'я-атрибута)
 * - remove(ім'я-атрибута)
 * - has(ім'я-атрибута)
 */

const inputEl = document.querySelector(".js-input");

const res1 = inputEl.getAttribute("value");
console.log("🚀 ~ res1:", res1);
inputEl.setAttribute("required", true);
inputEl.removeAttribute("name");
const res2 = inputEl.hasAttribute("aria-label");
console.log("🚀 ~ res2:", res2);
const res3 = inputEl.hasAttribute("name");
console.log("🚀 ~ res3:", res3);
/*
 * Data-атрибути
 */
const outputEl = document.querySelector(".output");
const actionsEl = document.querySelectorAll(".actions button");
const addBtnEl = document.querySelector("[data-action='add']");
console.log("🚀 ~ addBtnEl:", addBtnEl.dataset.action);
// console.log(actionsEl[0].dataset.action);
// console.log(actionsEl[2].dataset.action);

actionsEl.forEach(btn => {
  btn.onclick = event => {
    const currentBtn = event.target;
    console.log(currentBtn.dataset.action);

    outputEl.firstElementChild.textContent = currentBtn.dataset.action;
  };
});
