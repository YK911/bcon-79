const STORAGE_KEY = "feedback-msg";
// const STORAGE_KEYS = {
//   feedback: "feedback-msg",
//   uiSettings: "ui-settings",
// };

const formEl = document.querySelector(".js-feedback-form");
const textareaEl = formEl.querySelector("textarea");

populateTextarea();

formEl.addEventListener("submit", handleFormSubmit);
textareaEl.addEventListener("input", handleTextareaInput);

/**
 * - Скасовуємо стандартну поведінку
 * - Видаляємо повідомлення зі сховища
 * - Очищуємо форму
 */
function handleFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const userData = Object.fromEntries(formData);

  console.log("🚀 ~ handleFormSubmit ~ userData:", userData);

  localStorage.removeItem(STORAGE_KEY);
  event.target.reset();
}

/**
 * - Отримуємо значення поля
 * - Зберігаємо його у сховище
 */
function handleTextareaInput(event) {
  const message = event.target.value;
  localStorage.setItem(STORAGE_KEY, message);
}
/**
 * - Отримуємо значення зі сховища
 * - Якщо там щось було, оновлюємо DOM
 */
function populateTextarea() {
  const message = localStorage.getItem(STORAGE_KEY);

  if (message) {
    textareaEl.value = message;
  }
}
