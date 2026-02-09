const NOTIFICATION_DELAY = 5000;
let timeoutId = null;

const searchFormEl = document.querySelector(".js-search-form");
const alertEl = document.querySelector(".js-alert");

searchFormEl.addEventListener("submit", onSearchFormSubmit);
alertEl.addEventListener("click", onAlertBtnClick);

function onSearchFormSubmit(event) {
  event.preventDefault();

  const form = event.target;

  const {
    query: { value },
  } = form.elements;

  if (value.trim() === "") {
    alertEl.classList.remove("collapse");

    timeoutId = setTimeout(() => {
      alertEl.classList.add("collapse");
    }, NOTIFICATION_DELAY);
  }

  form.reset();
}

function onAlertBtnClick(event) {
  if (event.target.nodeName !== "BUTTON") {
    return;
  }

  alertEl.classList.add("collapse");
  clearTimeout(timeoutId);
}
