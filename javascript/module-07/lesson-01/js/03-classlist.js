/*
 * Інтерфейс classList
 * - add
 * - remove
 * - toggle
 * - replace
 * - contains
 */

const currentPageUrl = "/about";

const linkEl = document.querySelector(
  `.site-nav__link[href="${currentPageUrl}"]`
);

linkEl.classList.add("site-nav__link--current");

const listEl = document.querySelector(`.site-nav`);
listEl.classList.remove("normalize");

const popupRefs = {
  btnOpen: document.querySelector(".js-btn-open"),
  btnClose: document.querySelector(".js-btn-close"),
  popup: document.querySelector(".js-popup"),
};

console.log(popupRefs);
popupRefs.btnOpen.onclick = togglePopup;
popupRefs.btnClose.onclick = togglePopup;

function togglePopup() {
  popupRefs.popup.classList.toggle("is-open");
}
// setTimeout(() => {
//   popupRefs.btnOpen.classList.replace("btn-open", "btn-open-fill");
// }, 2000);

const isPopupOpen = popupRefs.popup.classList.contains("is-open");
console.log("🚀 ~ isPopupOpen:", isPopupOpen);

// Form toggle
const inputEl = document.querySelector("input[type='checkbox']");
const formBtnEl = document.querySelector(".js-form-btn");
// console.dir(inputEl);
inputEl.onchange = () => {
  const isChecked = inputEl.checked;
  const isDisabled = formBtnEl.classList.contains("disabled");

  if (isChecked && isDisabled) {
    formBtnEl.classList.remove("disabled");
  } else {
    formBtnEl.classList.add("disabled");
  }
};
