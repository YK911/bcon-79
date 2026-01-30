/**
 * Реалізуй пошук автомобілів по сайту
 * Користувач потрапляє на сайт і одразу бачить форму для пошуку і картки всіх автомобілів (масив cars)
 * Користувач може ввести в форму назву Марки або Моделі авто і через тег селект обрати що він ввів Марку або Модель (https://prnt.sc/PkkZZRy_ggtT)
 * Після натискання кнопки пошуку (сабміт форми) відмалюй авто які збігаються з критеріями пошуку
 */

const cars = [
  {
    id: 1,
    car: "Audi",
    type: "A6",
    price: 30000,
    img: "https://static.wixstatic.com/media/90aeac_387e937e295a4f8586d9ff9d09b60cff~mv2.jpg/v1/fill/w_520,h_338,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/90aeac_387e937e295a4f8586d9ff9d09b60cff~mv2.jpg",
  },
  {
    id: 2,
    car: "Honda",
    type: "Civic",
    price: 12000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
  },
  {
    id: 3,
    car: "Audi",
    type: "Q7",
    price: 40000,
    img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
  },
  {
    id: 4,
    car: "BMW",
    type: "5 series",
    price: 9000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
  },
  {
    id: 5,
    car: "Honda",
    type: "Accord",
    price: 20000,
    img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
  },
  {
    id: 6,
    car: "Volvo",
    type: "XC60",
    price: 7000,
    img: "https://images.pexels.com/photos/14242297/pexels-photo-14242297.jpeg",
  },
];

const elements = {
  form: document.querySelector(".js-form"),
  container: document.querySelector(".js-list"),
};

// Use functions
init(cars);
elements.form.addEventListener("submit", handleFormSubmit);

// Functions
function init(cars = []) {
  elements.container.innerHTML = createCarsMarkup(cars);
}

function createCarsMarkup(cars = []) {
  return cars
    .map(carInfo => {
      return `<li class="car-item card" id="${carInfo.id}">
      <div class="car-box">
        <img class="car-img" src="${carInfo.img}" alt="${carInfo.car} ${carInfo.type}" />
      </div>
      <div class="car-wrapper">
        <h3 class="car-desc card-title" >${carInfo.car} ${carInfo.type}</h3>
        <p class="car-price" >${carInfo.price}</p>
      </div>
    </li>`;
    })
    .join("");
}

function handleFormSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const searchValue = form.elements.query.value.trim().toLowerCase();
  const searchType = form.elements.options.value;

  const fiteredCars = cars.filter(item => {
    return item[searchType].toLowerCase().includes(searchValue);
  });

  // console.log("🚀 ~ searchValue:", searchValue);
  // console.log("🚀 ~ searchType:", searchType);
  // console.table(fiteredCars);

  elements.container.innerHTML = createCarsMarkup(fiteredCars);
}
