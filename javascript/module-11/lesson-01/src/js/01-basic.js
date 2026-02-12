import { Toast } from "bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "../common.css";

/**
 * Основи запиту
 * - Fetch API
 * - URL запиту
 * - Владка Network
 * - Обробка відповіді response (404 з fetch)
 *
 * https://jsonplaceholder.typicode.com/
 */

const usersListEl = document.querySelector(".js-users-list");

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(response => {
//     if (!response.ok) {
//       throw new Error("Something went wrong");
//     }

//     return response.json();
//   })
//   .then(users => {
//     console.log("🚀 ~ users:", users);
//   })
//   .catch(error => {
//     console.error(error.message);
//   });

/**
 * Всередині функції запит, зовні обробка
 */
const fetchTodos = () => {
  return fetch("https://jsonplaceholder.typicode.com/todos").then(response => {
    if (!response.ok) {
      throw new Error({ message: response.statusText, code: response.status });
    }

    return response.json();
  });
};

function fetchUsers() {
  return fetch("https://jsonplaceholder.typicode.com/users").then(response => {
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    return response.json();
  });
}

// fetchTodos()
//   .then(todos => {
//     console.log(todos);
//   })
//   .catch(error => {
//     console.log(error);
//   });

fetchUsers()
  .then(users => {
    console.log(users);
    usersListEl.innerHTML = users.map(createCardMarkup).join("");
  })
  .catch(error => {
    createErrorMarkup(error.message);

    const errorToast = new Toast(".js-error-toast");
    errorToast.show();
  });

function createCardMarkup(user = {}) {
  const { name, phone, website, email, username, url = "" } = user;

  return `
  <li class="card m-3" style="max-width: 540px">
    <div class="row align-items-center justify-content-between g-0">
      <div class="col-md-4 p-3" style="width: 160px; height: 160px">
      ${
        url
          ? `<img class="img-fluid rounded-start" src="${url}"  alt="${name}" />`
          : `<div class="d-flex align-items-center justify-content-center display-5 text-light rounded-circle bg-secondary w-100 h-100">
            ${createAbbr(name)}
          </div>`
      }
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${username}</h5>
          <ul class="list-group">
            <li class="list-group-item">Name: ${name}</li>
            <li class="list-group-item">Email: ${email}</li>
            <li class="list-group-item">Phone: ${phone}</li>
          </ul>
          <a href="https://${website}">
            <small class="text-body-secondary">${website}</small>
          </a>
        </div>
      </div>
    </div>
  </li>`;
}

function createAbbr(username = "") {
  return username
    .split(" ")
    .map(word => word.at(0))
    .join("")
    .toUpperCase();
}

function createErrorMarkup(errorMessage) {
  const markup = `
  <div class="js-error-toast toast align-items-center text-bg-danger border-0" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="d-flex">
      <div class="toast-body">
        ${errorMessage}
      </div>
      <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
  </div>
`;

  document.body.insertAdjacentHTML("beforeend", markup);
}
