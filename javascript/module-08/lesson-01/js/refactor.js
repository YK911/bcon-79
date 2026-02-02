const images = [];

const ul = document.querySelector(".gallery");

// const liHtmlAdd = images.map(
//   image =>
//     `<li><img src="${image.url}" alt="${image.alt}" width="300" height="200"></li>`
// );
// ul.insertAdjacentHTML("afterbegin", liHtmlAdd.join(""));

const createImagesMarkup = images =>
  images
    .map(
      image =>
        `<li>
          <img src="${image.url}" alt="${image.alt}" width="300" height="200">
        </li>`
    )
    .join("");

ul.insertAdjacentHTML("afterbegin", createImagesMarkup(images));
