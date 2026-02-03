// TODO: Get posts info
// console.log(posts);

const blogContaimerEl = document.querySelector(".cards");
const spinner = document.querySelector(".spinner");
const postsMarkup = posts.map(createBlogCard).join("");

blogContaimerEl.insertAdjacentHTML("beforeend", postsMarkup);

function createBlogCard({ id, title, body, tags, reactions, views, userId }) {
  return `
   <li class="card border-dark mb-3" data-userid="${userId}" data-postid="${id}">
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <hr />
      <div class="card-meta mb-3">
        <div class="card-meta-tags">
          <p class="m-0 text-black-50 fw-lighter">
            <i class="bi bi-tag"></i>
          </p>
          <ul class="tags-list">
            ${createTagsMarkup(tags)}
          </ul>
        </div>

        <ul class="card-meta-likes">
            ${createLikesDislikes(reactions)}
        </ul>

        <p class="card-meta-views m-0 text-black-50 fw-lighter">
          <i class="bi bi-eye"></i> <small>${views}</small>
        </p>
      </div>
      <hr />
      <p class="card-text">${body}</p>

      <button class="btn btn-primary" type="button">Read more</button>
    </div>
  </li>`;
}

function createTagsMarkup(tags = []) {
  return tags
    .map(
      tag => `<li
              class="border border-dark rounded-1 text-center text-black-50 fw-lighter"
            >
              <small class="text-capitalize">${tag}</small>
            </li>`
    )
    .join("");
}

function createLikesDislikes(reactions = {}) {
  const reactionArr = Object.entries(reactions);

  return reactionArr
    .map(([key, value]) => {
      return `<li class="text-black-50 fw-lighter">
      <i class="bi bi-hand-thumbs-${key === "likes" ? "up" : "down"}"></i> <small>${value}</small>
    </li>`;
    })
    .join("");
}

// Search form
const searchForm = document.querySelector(".search-form");

searchForm.addEventListener("submit", onSearchFormSubmit);

function onSearchFormSubmit(event) {
  event.preventDefault();

  const { target: form } = event;

  const {
    searchQuery: { value: query },
  } = form.elements;

  if (query.trim().length === 0) {
    const toast = new bootstrap.Toast(".toast");
    toast.show();
    form.reset();
    return;
  }

  blogContaimerEl.innerHTML = "";
  spinner.classList.remove("visually-hidden");

  fetch(`https://dummyjson.com/posts/search?q=${query}`)
    .then(res => res.json())
    .then(({ posts }) => {
      console.log(posts);

      const filteredPostsMarkup = posts.map(createBlogCard).join("");

      blogContaimerEl.insertAdjacentHTML("beforeend", filteredPostsMarkup);
    })
    .catch(error => {
      const toast = new bootstrap.Toast(".toast");
      toast.show();
    })
    .finally(() => {
      spinner.classList.add("visually-hidden");
      form.reset();
    });

  // setTimeout(() => {
  //   const filteredPosts = filterPosts(query);
  //   const filteredPostsMarkup = filteredPosts.map(createBlogCard).join("");

  //   spinner.classList.add("visually-hidden");
  //   blogContaimerEl.insertAdjacentHTML("beforeend", filteredPostsMarkup);
  // }, 600);

  form.reset();
}

function filterPosts(query = "") {
  return posts.filter(({ title }) => title.includes(query));
}
