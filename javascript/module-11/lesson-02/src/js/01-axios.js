import axios from "axios";

import "./axios-config";
import "../common.css";

/**
 * Додаємо та використовуємо бібліотеку https://axios-http.com/
 * Робимо рефакторинг
 * - Імпорт
 * - Запит
 * - Метод axios.get
 * - Обробка відповіді та помилки
 */

const listEl = document.querySelector(".todo-list");

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//     // Рендер елементів в DOM (map і insertAdjacentHTML)
//   })
//   .catch(error => {
//     console.log(error);
//   });

//TODO: Axios example
// axios
//   .get("/todos")
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.log(error.message);
//   });

axios
  .get("/photos")
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error.message);
  });

/**
 * Всередині функції запит, зовні обробка
 */
const fetchTodos = () => {
  return axios.get("/todos").then(({ data }) => data);
};

const fetchPhotos = () => {
  return axios.get("/photos").then(({ data }) => data);
};

fetchTodos()
  .then(todos => {
    const markup = todos
      .map(
        ({ title, completed }) =>
          `<li class="${completed && "completed"}">${title}</li>`
      )
      .join("");
    listEl.insertAdjacentHTML("beforeend", markup);
  })
  .catch(error => {
    console.log("🚀 ~ error.message:", error.message);
  });

const fetchData = endPoint => {
  return axios.get(endPoint).then(({ data }) => data);
};
