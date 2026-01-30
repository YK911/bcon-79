/**
 * - Подія input
 * - Подія blur
 *
 * Виводь в консоль все що користувач вводить в input
 */

const userName = document.querySelector(".js-user-name");

// userName.addEventListener("input", event => {
//   console.log("value", event.target.value);
//   // console.log("input");
// });

// userName.addEventListener("blur", event => {
//   const inputValue = event.target.value;

//   if (inputValue.length > 6) {
//     event.target.style.border = "1px solid lightgreen";
//   } else {
//     event.target.style.border = "1px solid tomato";
//   }
// });

/**
 * Користувач вводить в input своє ім'я після втрати
 * фокусу отримує alert з повідомленням-привітанням
 */
userName.addEventListener("blur", event => {
  const inputEl = event.target;

  if (inputEl.value.trim() === "") {
    alert("Input can't be empty");
    return;
  }

  const msg = `Hello ${inputEl.value}. Welcome onboard 😎`;
  alert(msg);

  inputEl.value = "";
});
