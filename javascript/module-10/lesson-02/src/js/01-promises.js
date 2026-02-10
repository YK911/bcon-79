/**
 * Створення та обробка промісу
 * - Клас Promise
 * - resolve
 * - reject
 * - then, catch, finally
 */

const promise = new Promise((resolve, reject) => {
  const isSuccess = true;

  if (isSuccess) {
    resolve("Проміс виконався успішно, із результатом (виконаний, fulfilled)");
  } else {
    reject("Проміс виконався з помилкою (відхилений, rejected)");
  }
});
// promise.then(
//   data => {
//     console.log(data);
//   },
//   error => {
//     console.log(error);
//   }
// );
// promise
//   .then(onResolve)
//   .then(number => {
//     console.log(number);

//     const isSuccess = false;
//     if (!isSuccess) {
//       throw new Error("Ooops! Some server error");
//     }

//     return number ** 2;
//   })
//   .then(result => {
//     console.log(result);
//   })
//   .catch(onReject)
//   .finally(() => {
//     console.log("Finally: Спрацює останнім після then або catch");
//   });

function onResolve(data) {
  console.log(data);

  return 5;
}
function onReject(error) {
  console.log("Catch fire");
  alert(error.message);

  console.log(error);
}
function onSetteled() {}

/**
 * Ланцюги промісів
 * - декілька послідовних then
 * - then повертає проміс
 */

// ? Обробка форми
const formEl = document.querySelector(".js-form");
const spinnerEl = document.querySelector(".spinner");

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const form = event.target;

  const formData = Object.fromEntries(new FormData(form));
  spinnerEl.classList.add("is-visible");

  const promise = new Promise((resolve, reject) => {
    const isSuccess = Math.random() > 0.5;
    console.log("🚀 ~ isSuccess:", isSuccess);

    setTimeout(() => {
      if (isSuccess) {
        resolve(formData);
      } else {
        reject("Something went wrong 🤷‍♂️");
      }
    }, 1000);
  });

  promise
    .then(result => {
      iziToast.success({
        message: "✅ Success operation",
      });
    })
    .catch(message => {
      iziToast.error({
        message,
      });
    })
    .finally(() => {
      form.reset();
      spinnerEl.classList.remove("is-visible");
    });
}
