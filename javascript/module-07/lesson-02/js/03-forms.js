/**
 * - Подія submit
 * - Дії браузера за замовчуванням
 * - Властивість elements
 *
 * Оброби форму та збери відгук користувача в об'єкт
 */

// email=your.email%2Bfakedata36415%40gmail.com
// &password=6bWF3sySdV11Z4l
// &comment=Wilderman%2C+Nitzsche+and+Wilkinson

const form = document.querySelector(".js-form");

// form.addEventListener("submit", event => {
//   event.preventDefault();
//   const form = event.target;

//   const emailValue = form.elements.userEmail?.value;
//   const passwordValue = form.elements.userPassword?.value;
//   const commentValue = form.elements.userComment?.value;

//   const formData = {
//     emailValue,
//     passwordValue,
//     commentValue,
//   };

//   console.log(formData);

//   form.reset();
// });

// form.addEventListener("submit", event => {
//   event.preventDefault();
//   const formData = Object.fromEntries(new FormData(event.target));
//   console.log("🚀 ~ formData:", formData);
// });
