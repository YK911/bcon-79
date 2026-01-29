/*
 * Властивість innerHTML
 * - зчитування
 * - запис
 */

// const titleEl = document.querySelector(".title");
// const titleContent = titleEl.innerHTML;
// console.log(titleContent);
// titleEl.innerHTML = "Page Main title";
// titleEl.innerHTML = "";

const listEl = document.querySelector(".js-list");

const courses = ["HTML", "CSS", "JavaScript", "React.js", "SQL", "Node.js"];

const couresHTML = courses
  .map(course => {
    // listEl.innerHTML += `<li class="list-item">${course}</li>`; // ❌ Bad pattern
    return `<li class="list-item">${course}</li>`;
    // return `<li>${course}</li>`;
  })
  .join("");

// console.log("🚀 ~ couresHTML:", couresHTML);
listEl.innerHTML = couresHTML;
/*
 * Вставка розмітки за допомогою insertAdjacentHTML()
 */

const updatedCourses = ["Next.js", "SASS", "MongoDB"];

const markup = updatedCourses
  .map(course => `<li class="list-item">${course}</li>`)
  .join("");

// console.log(markup);
// setTimeout(() => {
listEl.insertAdjacentHTML("beforeend", markup);
// }, 3000);
// setTimeout(() => {
//   listEl.innerHTML += markup;
// }, 3000);

// const textareaEl = document.querySelector(".xss-attack");
// const outputEl = document.querySelector(".output");
// textareaEl.onchange = () => {
//   // console.log(textareaEl.value);
//   outputEl.innerHTML = `<script>${alert(textareaEl.value)};</script>`;
// };

// "Ha 😈!!! I'm hacked your page"
