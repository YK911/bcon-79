import axios from "axios";
import { Toast } from "bootstrap";

import refs from "./refs";
import { TOTAL_PAGES, PER_PAGE } from "./config";

import "bootstrap/dist/css/bootstrap.min.css";
import "./common.css";

/*
 * Отримуємо ключ https://newsapi.org/
 * Запити робитимемо на http://newsapi.org/v2/everything?q=cat&language=en&pageSize=5&page=1
 *
 * Пагінація: номер групи та кількість елементів групи
 * - Завантажуємо статті при сабміті форми
 * - Завантажуємо статті при натисканні на кнопку «Завантажити ще»
 * - Оновлюємо групу в параметрах запиту
 * - Рендерим статті
 * - Скидання значення при пошуку за новим критерієм
 * - Показуємо лоадер поки йде запит
 */

let page = 1;
const toastEl = new Toast(".toast");

refs.loadMoreBtn.addEventListener("click", onLoadMoreBtnClick);

fetchContacts(page).then(contacts => {
  showBtn();
  showLoadStatus(true);
  renderContacts(contacts);
});

//TODO: Functions
async function fetchContacts(page = 1) {
  const requestOptions = {
    params: {
      limit: PER_PAGE,
      page,
    },
  };

  try {
    const response = await axios.get("/contacts", requestOptions);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
}

async function onLoadMoreBtnClick() {
  page += 1;
  console.log(page);
  console.log(TOTAL_PAGES);

  //? Is last page
  if (page === (await TOTAL_PAGES)) {
    toastEl.show();
    hideBtn();
  }

  showLoadStatus(true);

  try {
    const contacts = await fetchContacts(page);
    renderContacts(contacts);
  } catch (error) {
    console.log(error.message);
  } finally {
    showLoadStatus(false);
  }
}

function renderContacts(contacts = []) {
  const markup = contacts.map(createContact).join("");
  refs.contactsList.insertAdjacentHTML("beforeend", markup);
  showLoadStatus(false);
}

function createContact({ id, name, phone, email }) {
  return `
    <li data-contact-id="${id}">
      <div class="card h-100">
        <div class="row">
          <div class="col-4 d-flex align-items-center justify-content-center">
            <div class="rounded-circle text-bg-primary display-6 d-flex align-items-center justify-content-center" style="width: 60px; height: 60px">
              ${name.at(0).toUpperCase()}
            </div>
          </div>
          <div class="col-8">
            <div class="card-body text-start">
              <h3>${name}</h3>
              <ul>
                <li><small>Email: ${email}</small></li>
                <li><small>Phone: ${phone}</small></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </li>
  `;
}

function showBtn() {
  refs.loadMoreBtn.classList.remove("d-none");
}
function hideBtn() {
  refs.loadMoreBtn.classList.add("d-none");
}
function showLoadStatus(isLoading) {
  if (isLoading) {
    refs.loadMoreBtn.disabled = true;
    refs.loadMoreBtn.children[0].classList.remove("d-none");
    refs.loadMoreBtn.children[1].textContent = "Loading...";
  } else {
    refs.loadMoreBtn.disabled = false;
    refs.loadMoreBtn.children[0].classList.add("d-none");
    refs.loadMoreBtn.children[1].textContent = "Load more";
  }
}
