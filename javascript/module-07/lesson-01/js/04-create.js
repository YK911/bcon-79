/*
 * Створення та додавання елементів
 */

/*
 * Створюємо заголовок
 */
const containerEl = document.querySelector(".hero");
const titleEl = document.createElement("h1");
// console.log("🚀 ~ titleEl:", titleEl);
titleEl.textContent = "This is main heading";
titleEl.classList.add("title", "main-title");
titleEl.style.textTransform = "uppercase";
console.log("🚀 ~ titleEl:", titleEl);

// containerEl.append(titleEl);
containerEl.prepend(titleEl);

/*
 * Створюємо зображення
 * https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg
 * valais-alpine-mountains-glacier
 */
const imageEl = document.createElement("img");
imageEl.src =
  "https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg";
imageEl.alt = "valais-alpine-mountains-glacier";
imageEl.setAttribute("width", 400);

// console.log(imageEl);
containerEl.append(imageEl);

/*
 * Створюємо та додаємо новий пункт меню
 */
const navItemEl = document.createElement("li");
navItemEl.classList.add("site-nav__item", "last");
const navLinkEl = document.createElement("a");
navLinkEl.classList.add("site-nav__link");
navLinkEl.textContent = "Payment";
navLinkEl.href = "/payment";

// console.log("🚀 ~ navLinkEl:", navLinkEl);
navItemEl.append(navLinkEl);
console.log("🚀 ~ navItemEl:", navItemEl);

const listContainer = document.querySelector(".site-nav");
listContainer.append(navItemEl);

const lastItemEl = listContainer.querySelector(".last");
console.log("🚀 ~ lastItemEl:", lastItemEl);

console.log(listContainer.lastElementChild);
const isEqual = lastItemEl === listContainer.lastElementChild;
console.log("🚀 ~ isEqual:", isEqual);
