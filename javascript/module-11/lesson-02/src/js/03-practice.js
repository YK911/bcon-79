import izitoast from "izitoast";

import { fetchBreedById, fetchBreeds } from "./practice/service";
import { refs } from "./practice/refs";
import {
  showLoader,
  hideLoader,
  toggleActiveFormButton,
} from "./practice/helpers";

import "./practice/config";
import "../common.css";
import "izitoast/dist/css/iziToast.min.css";

/**
 * https://thecatapi.com/
 *
 * 1) Створити сторінку яка при завантаженні робить запит на бекенд і оримує
 *  всі доступні breeds. https://api.thecatapi.com/v1/breeds
 *
 * 2) В інтерфейсі є форма пошуку з прив'язаним datalist з завантаженими breeds.
 *
 * 3) Користувач в формі вводить або обирає необхідний breed і при сабміті форми
 *  виконується GET запит за зображенням.
 *
 * 4) Після запиту під формою відображається картка з зображенням.
 *
 * 5) Під час запиту під формую відображається loader
 */

const breedsDict = {};

refs.searchForm.addEventListener("submit", handleBreedSearch);

populateBreedsList();

function populateBreedsList() {
  showLoader();
  toggleActiveFormButton();

  fetchBreeds()
    .then(breeds => {
      const markup = breeds
        .map(({ id, name }) => {
          breedsDict[name] = id;
          return `<option value="${name}" id="${id}"></option>`;
        })
        .join();

      refs.breedsList.insertAdjacentHTML("beforeend", markup);
    })
    .catch(error => {
      izitoast.error({ message: error.message });
    })
    .finally(() => {
      hideLoader();
      toggleActiveFormButton();
    });
}

function handleBreedSearch(event) {
  event.preventDefault();
  const form = event.target;
  refs.catCard.innerHTML = "";

  const {
    breed: { value },
  } = form.elements;

  const breedId = breedsDict[value];

  if (breedId === undefined) {
    izitoast.warning({ message: "Please fill input", position: "topRight" });
    return;
  }

  showLoader();
  fetchBreedById(breedId)
    .then(([catInfo] = {}) => {
      refs.catCard.innerHTML = createCatCardMarkup(catInfo);
    })
    .catch(error => {
      izitoast.error({ message: error.message });
    })
    .finally(() => {
      form.reset();
      hideLoader();
    });
}

function createCatCardMarkup(catInfo) {
  return `
  <article class="card">
    <img class="card-image" src="${catInfo.url}" alt="${catInfo.breeds[0].name}" width="370" height="200" />
    <div class="card-body">
      <h3 class="card-title">${catInfo.breeds[0].name}</h3>
    </div>
  </article>
  `;
}
