import "../common.css";

/**
 * - Показуємо та ховаємо, додаючи/видаляючи клас is-visible
 * - Ховаємо через певний час
 * - Ховаємо при кліці
 * - Не забуваємо чистити таймер
 */

const NOTIFICATION_DELAY = 3000;
let timeoutId = null;
const notificationEl = document.querySelector(".js-alert");

showNotification();

notificationEl.addEventListener("click", onNotificationClick);

/**
 * Функції
 */
function onNotificationClick() {
  console.log("Закрили по кліку");

  hideNotification();
  clearTimeout(timeoutId);
}

function showNotification() {
  // notificationEl.classList.toggle("is-visible");
  notificationEl.classList.add("is-visible");

  timeoutId = setTimeout(() => {
    console.log(
      "Закриваємо сповіщення автоматично, щоб воно не залишалося на екрані"
    );
    hideNotification();
  }, NOTIFICATION_DELAY);
}

function hideNotification() {
  // notificationEl.classList.toggle("is-visible");
  notificationEl.classList.remove("is-visible");
}
