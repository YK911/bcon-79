/**
 * Створи картки з товарами на основі масиву products,
 * приклад картки https://prnt.sc/KmgDlzqOIA3M
 *
 * Реалізуй делегування подій на колекції карток
 * Після кліку на картку повинно з'являтись модальне вікно
 * з детальною інформацією про продукт,
 * приклад модального вікна https://prnt.sc/vWNoCeZcw7ii
 *
 * Для реалізації модального вікна використай
 * бібліотеку basicLightbox (https://github.com/electerious/basicLightbox)
 */

const products = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/17112932/pexels-photo-17112932.jpeg",
    name: "Monitor",
    price: 3000,
    description: "23-inch monitor with Full HD resolution.",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/3987013/pexels-photo-3987013.jpeg",
    name: "Laptop",
    price: 20000,
    description:
      "Lightweight and powerful laptop with a 15-inch display and SSD.",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/11216260/pexels-photo-11216260.jpeg",
    name: "Smartphone",
    price: 8000,
    description: "Equipped with a triple camera and a multi-core processor.",
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/8533349/pexels-photo-8533349.jpeg",
    name: "Tablet",
    price: 12000,
    description: "10-inch tablet with high performance and a Retina display.",
  },
];

const container = document.querySelector(".products");
const modalTemplate = document.querySelector("#modal-template");
let instance = null;

renderProductsMarkup(products);
container.addEventListener("click", handleCardClick);

function renderProductsMarkup(products) {
  const productsMarkup = products
    .map(product => {
      return `<li class="item" id="${product.id}">
        <img
          src="${product.img}"
          alt="${product.name}"
        />
        <h4>Name: ${product.name}</h4>
        <p>Price: ${product.price}</p>
      </li>`;
    })
    .join("");

  container.innerHTML = productsMarkup;
}
function handleCardClick(event) {
  const currEl = event.target;

  const itemEl = currEl.closest(".item");

  if (!itemEl) return;

  const fullItemInfo = products.find(
    product => product.id === Number(itemEl.id)
  );

  const modalContent = modalTemplate.content.cloneNode(true);
  // console.log("🚀 ~ handleCardClick ~ modalContent:", modalContent);
  const modalWrapper = document.createElement("div");
  modalWrapper.classList.add("modal");
  modalWrapper.append(...populateModalContent(modalContent, fullItemInfo));
  console.log(modalWrapper);

  // console.log(fullItemInfo);
  const modalBody = `
    <div class="modal">
      <img class="" src="${fullItemInfo.img}" alt="${fullItemInfo.name}" />
      <h3 class="">Type: ${fullItemInfo.name}</h3>
      <div>
        <div class="meta">
          <h4 class="">Price</h4>
          <p class="">${fullItemInfo.price}</p>
        </div>
        <div class="meta">
          <h4 class="">Description</h4>
          <p class="">${fullItemInfo.description}</p>
        </div>
      </div>
    </div>`;

  // createModal(modalBody);
  createModal(modalWrapper);
}
function createModal(modalContent) {
  const options = {
    onShow: () => {
      document.addEventListener("keydown", handleEscape);
    },
    onClose: () => {
      document.removeEventListener("keydown", handleEscape);
    },
    className: "modal",
  };
  instance = basicLightbox.create(modalContent, options);
  instance.show();
}
function handleEscape(event) {
  if (event.key === "Escape") {
    console.log("Close by Escape");

    instance.close();
  }
}
function populateModalContent(element, data) {
  const ill = element.querySelector("img");
  ill.src = data.img;
  ill.alt = data.name;
  const caption = element.querySelector("h3");
  caption.textContent = `Type: ${data.name}`;
  const priceMeta = element.querySelector(".meta:first-child > p");
  priceMeta.textContent = data.price;
  const descrMeta = element.querySelector(".meta:last-child > p");
  descrMeta.textContent = data.description;

  return element.children;
}
