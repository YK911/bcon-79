/*
 * Пошук HTML елементу за допомогою querySelector та querySelectorAll
 * - За назвою тегу
 * - За назвою класу
 * - За ID
 */
// console.log(document.body);

// const listEl = document.querySelector(".site-nav");
// console.log("🚀 ~ listEl:", listEl);

// const linkEl = listEl.querySelector(
//   ".site-nav__item:last-child .site-nav__link"
// );
// console.log("🚀 ~ linkEl:", linkEl);

// Navigation
// console.log("parentNode", listEl.parentNode);
// console.log("parentElement", listEl.parentElement);

// console.log("nextSibling", listEl.nextSibling);
// console.log("nextSibling", listEl.nextElementSibling);
// console.log("previousElementSibling", listEl.previousElementSibling);
// console.log("children", listEl.children);
// console.log("firstElementChild", listEl.firstElementChild);
// console.log("lastElementChild", listEl.lastElementChild);

// const ulEl = document.querySelector("ul");
// console.log("🚀 ~ ulEl:", ulEl);
// const siteNavEl = document.querySelector("ul.site-nav");
// console.log("🚀 ~ siteNavEl:", siteNavEl);
// const btnEl = document.querySelector("button[type='button']");
// console.log("🚀 ~ btnEl:", btnEl);

// const btnType = "reset";

// const resetBtnEl = document.querySelector(`button[type='${btnType}']`);
// console.log("🚀 ~ resetBtnEl:", resetBtnEl);

// const sectionEl = document.getElementById("start");
// console.log("🚀 ~ sectionEl:", sectionEl);

// const itemsEl = [...document.getElementsByClassName("site-nav__item")];
// console.log("🚀 ~ itemsEl", itemsEl);

// const content = itemsEl.at(0).children[0].textContent.toLowerCase();

// itemsEl.at(0).children[0].textContent = content;

const linksEl = document.querySelectorAll(".site-nav__link");
console.log("🚀 ~ linksEl:", linksEl);

linksEl.forEach((element, index, arr) => {
  // element.style = "text-transform: uppercase";
  element.style.textTransform = "uppercase";
});
