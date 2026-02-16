import axios from "axios";

import "../common.css";

/**
 * Обробка помилок з try...catch
 *
 * - Синтаксис
 * - Які помилки ловить
 *  - ❌ помилки парсингу (parsing errors)
 *  - ✅ помилки виконання (runtime errors)
 * - Ловить лише помилки в синхронному коді
 * - Як зловити помилку в асинхронному коді
 * - Об'єкт помилки
 *  - name
 *  - message
 *  - stack
 * - Блок catch без об'єкта помилки
 */

// console.log("Before try_catch");

// try {
//   const zeroDivide = JSON.parse("Some invalid string");
//   console.log("🚀 ~ zeroDivide:", zeroDivide);
// } catch (error) {
//   console.log("Inside catch block -> ", error.message);
// }

// console.log("After try_catch");

// const postsResponse = await axios.get("https://dummyjson.com/posts");
// console.log("🚀 ~ postsResponse:", postsResponse);

const postsContainer = document.querySelector(".js-posts");
const postsLoadBtn = document.querySelector(".js-post-btn");
const postModal = document.querySelector(".js-post-modal");

postsLoadBtn.addEventListener("click", handleLoadPostsClick);
postsContainer.addEventListener("click", handlePostsContainerClick);

async function handlePostsContainerClick(event) {
  const currEl = event.target;

  const isBtn =
    currEl.nodeName !== "BUTTON" &&
    !currEl.classList.contains("js-read-more-btn");

  if (isBtn) return;

  const itemEl = currEl.closest(".posts-item");
  const { postId } = itemEl.dataset;
  postModal.innerHTML = "";

  try {
    const postInfo = await fetchPostById(postId);
    const markup = createModalContent(postInfo);
    const userInfo = await fetchUserInfoById(postInfo.userId);
    const userMarkup = createUserMarkup(userInfo);

    postModal.insertAdjacentHTML("beforeend", markup + userMarkup);
    postModal.addEventListener("click", handleCloseBtnClick);
    document.addEventListener("keydown", handleCloseBtnClick);
    postModal.showModal();
  } catch (error) {
    console.log(error.message);
  }
}

async function handleLoadPostsClick() {
  try {
    const posts = await fetchPosts();
    renderPostsMarkup(posts);
  } catch (error) {
    console.warn(error.message);
    alert("Sorry... server error. Please refresh your page");
  }
}

function handleCloseBtnClick(event) {
  console.log("Listener");
  // Do something

  postModal.removeEventListener("click", handleCloseBtnClick);
  document.removeEventListener("keydown", handleCloseBtnClick);
}

function renderPostsMarkup({ posts }) {
  const postsMarkup = posts
    .map(({ id, title, body }) => {
      return `
      <li class="posts-item" data-post-id="${id}">
        <h3>${title}</h3>
        <p>${body}</p>
        <button class="js-read-more-btn">Read more...</button>
      </li>`;
    })
    .join("");

  postsContainer.insertAdjacentHTML("beforeend", postsMarkup);
}

const renderPosts = async () => {
  try {
    const response = await axios.get("https://dummyjson.com/posts");
    const {
      data: { posts },
    } = response;

    const postsMarkup = posts
      .map(({ title, body }) => {
        return `<li class="posts-item">
        <h3>${title}</h3>
        <p>${body}</p>
      </li>`;
      })
      .join("");

    postsContainer.insertAdjacentHTML("beforeend", postsMarkup);
  } catch (error) {
    console.log(error);
  }
};

// renderPosts();

async function fetchPosts() {
  const response = await axios.get(`https://dummyjson.com/posts`);
  return response.data;
}

async function fetchPostById(id = 1) {
  const response = await axios.get(`https://dummyjson.com/posts/${id}`);
  return response.data;
}

async function fetchUserInfoById(id) {
  const response = await axios.get(`https://dummyjson.com/users/${id}`);
  const { firstName, lastName, email } = response.data;

  return { firstName, lastName, email };
}

// fetchPostById(1)
//   .then(post => {
//     console.log(post);
//   })
//   .catch(() => {});

function createModalContent({ title, body }) {
  return `
    <button type="button">X</button>
    <h3>${title}</h3>
    <p>${body}</p>
    `;
}

function createUserMarkup({ firstName, lastName, email }) {
  return `
  <div>
    <h3>${firstName} ${lastName}</h3>
    <p>${email}</p>
  </div>
  `;
}
