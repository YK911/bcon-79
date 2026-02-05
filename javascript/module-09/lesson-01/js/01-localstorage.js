// JSON.parse();

// const animal = {
//   type: "dog",
//   nickname: "Mango",
//   age: 4,
//   likeMeet: true,
//   hasOwner: undefined,
//   woof() {
//     console.log("Woof!");
//   },
// };
// const animalJSON = JSON.stringify(animal);
// console.log("🚀 ~ animalJSON:", animalJSON);

// const parsedAnimal = JSON.parse(animalJSON);
// console.log("🚀 ~ parsedAnimal:", parsedAnimal);

// const errorEl = document.querySelector(".error");

// try {
//   JSON.parse("This is parse error");
// } catch (error) {
//   console.dir(error.message);
//   errorEl.children[0].textContent = error.message;
//   errorEl.classList.add("is-visible");

//   setTimeout(() => {
//     errorEl.classList.remove("is-visible");
//   }, 2000);
// }

// console.log("After error");

/**
 * LocalStorage
 */

const LS_KEY = "Array of names";
const names = ["Alice", "Kate", "Emma"];
// const numbers = "111,222,333";

// console.log(localStorage);
// console.log(sessionStorage);
/**
 * Збереження
 * Чому треба використовувати метод JSON.stringify
 */
localStorage.setItem("user-theme", "dark");
localStorage.setItem("custom-setting", "shown");
localStorage.setItem("notifications", true);
localStorage.setItem(LS_KEY, JSON.stringify(names));
// localStorage.setItem(LS_KEY, numbers);

/**
 * Читання
 * Чому треба використовувати метод JSON.parse
 */
// const lsData = localStorage.getItem(LS_KEY);
// console.log("🚀 ~ lsData:", lsData);
// const namesLS = JSON.parse(lsData);
const namesLS = JSON.parse(localStorage.getItem(LS_KEY));
console.log("🚀 ~ namesLS:", namesLS);

const res = localStorage.getItem("namesLS");
console.log("🚀 ~ res:", res);

/**
 * Видалення
 */
localStorage.removeItem("custom-setting");

// localStorage.clear();

/**
 * LocalStorage не може зберігати функції
 */

function add(a, b) {
  return a + b;
}

const calculator = {
  a: 5,
  b: 10,
  add() {
    return this.a + this.b;
  },
};

// localStorage.setItem("fn", add);
// const funcLS = localStorage.getItem("fn");
// console.log("🚀 ~ funcLS:", funcLS);

// localStorage.setItem("calc", JSON.stringify(calculator));
// const calculatorLS = localStorage.getItem("calc");
// console.log("🚀 ~ calculatorLS:", calculatorLS);

// console.log(
//   JSON.stringify(() => {
//     console.log("Mango is awesome!!!");
//   })
// );

// localStorage.setItem(
//   "fn",
//   JSON.stringify(() => {
//     console.log("Mango is awesome!!!");
//   })
// );
// const fnLS = JSON.parse(localStorage.getItem("fn"));
// console.log("🚀 ~ fnLS:", fnLS);
