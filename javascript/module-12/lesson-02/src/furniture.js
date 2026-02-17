import axios from "axios";
import { Toast } from "bootstrap";
import refs from "./furniture/refs";
import { PER_PAGE } from "./furniture/config";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const store = {
  searchParams: {
    page: 1,
    totalPages: null,
    query: null,
  },

  update(params = {}) {
    this.searchParams = {
      ...this.searchParams,
      ...params,
    };
  },
};
const toastEl = new Toast(".toast");

refs.form.addEventListener("submit", onSearchFormSubmit);
refs.loadMoreBtn.addEventListener("click", onLoadMoreBtnClick);

async function fetchFurniture(name, page = 1) {
  const options = {
    params: { limit: PER_PAGE, page, name },
  };

  try {
    const response = await axios.get("/furnitures", options);

    return response.data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
}

async function onSearchFormSubmit(event) {
  event.preventDefault();

  const form = event.target;

  const {
    productName: { value },
  } = form.elements;

  const query = value.trim();

  if (query.length === 0) {
    alert("Fill input");
    return;
  }

  refs.furnitureList.innerHTML = "";

  const { furnitures, totalItems } = await fetchFurniture(query, store.page);

  store.update({
    query,
    page: 1,
    totalPages: Math.ceil(totalItems / PER_PAGE),
  });

  show(refs.loadMoreBtn);
  renderFurniture(furnitures);

  checkLastPage();
  form.reset();
}

async function onLoadMoreBtnClick() {
  store.update({ page: store.searchParams.page + 1 });

  checkLastPage();

  const { furnitures } = await fetchFurniture(
    store.searchParams.query,
    store.searchParams.page
  );

  renderFurniture(furnitures);
}

function renderFurniture(furniture) {
  const markup = furniture.map(createFurniturecard).join("");
  refs.furnitureList.insertAdjacentHTML("beforeend", markup);
}
function createFurniturecard({ _id, name, images, price, color }) {
  return `
    <li class="col-6" data-firniture-id="${_id}">
      <div class="card">
        <img class="card-img-top rounded" src="${images.at(0)}" alt="${name}" />
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <ul class="row">
            ${color.map(color => `<li style="backgroun: ${color}"></li>`).join("")}
          </ul>
          <p class="card-text">${price} грн</p>
          <button class="btn btn-primary" type="button">Детальніше</button>
        </div>
      </div>
    </li>`;
}

function checkLastPage() {
  if (store.searchParams.page === store.searchParams.totalPages) {
    hide(refs.loadMoreBtn);
    toastEl.show();
  }
}

function show(el) {
  el.classList.remove("d-none");
}
function hide(el) {
  el.classList.add("d-none");
}
