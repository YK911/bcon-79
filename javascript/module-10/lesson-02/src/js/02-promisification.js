import "../common.css";

/*
 * Промісифікація:
 * - Проблема доступу до результату проміса з колбеком
 * - Функція, яка повертає проміс
 */

// const makeOrder = (dish, onSuccess, onError) => {
//   const passed = Math.random() > 0.5;

//   setTimeout(() => {
//     if (passed) {
//       onSuccess(`✅ Ваше замовлення: ${dish}`);
//     }

//     onError("❌ Упс, у нас закінчилися продукти");
//   }, 1000);
// };

// makeOrder(
//   "морозиво",
//   result => {
//     console.log("onMakeOrderSuccess");
//     console.log(result);
//   },
//   error => {
//     console.log("onMakeOrderError");
//     console.log(error);
//   }
// );

const makeOrder = dish => {
  return new Promise((resolve, reject) => {
    const passed = Math.random() > 0.5;
    console.log("🚀 ~ prepareDish ~ passed:", passed);

    setTimeout(() => {
      if (passed) {
        resolve(`✅ Ваше замовлення: ${dish}`);
      }
      reject("❌ Упс, у нас закінчилися продукти");
    }, 1000);
  });
};

// makeOrder("пиріжок")
//   .then(result => {
//     console.log("onMakeOrderSuccess");
//     console.log(result);
//   })
//   .catch(error => {
//     console.log("onMakeOrderError");
//     console.log(error);
//   });

/*
 * Промісифікація «синхронних» функцій
 * - Promise.resolve()
 * - Promise.reject()
 */

// const prepareDish = (dish, onSuccess, onError) => {
//   const passed = Math.random() > 0.5;

//   if (passed) {
//     onSuccess(`✅ Ваше замовлення: ${dish}`);
//   }

//   onError("❌ Упс, у нас закінчилися продукти");
// };

// prepareDish(
//   "пиріжок",
//   result => {
//     console.log("onMakeOrderSuccess");
//     console.log(result);
//   },
//   error => {
//     console.log("onMakeOrderError");
//     console.log(error);
//   }
// );

const prepareDish = dish => {
  const passed = Math.random() > 0.5;
  console.log("🚀 ~ passed:", passed);

  if (passed) {
    return Promise.resolve(`✅ Ваше замовлення: ${dish}`);
  }
  return Promise.reject("❌ Упс, у нас закінчилися продукти");
};

// prepareDish("шаурма")
//   .then(result => {
//     alert(result);
//   })
//   .catch(error => {
//     alert(error);
//   });

//* Методи класу Promise
// console.dir(Promise);

const reservePlace = (tableNumber, reserveTime) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (tableNumber === "Table 2") {
        reject("Sorry, no free places");
      }

      resolve(tableNumber);
    }, reserveTime);
  });
};

// const tableOne = reservePlace("Table 1", 1000);
// const tableTwo = reservePlace("Table 2", 500);
// const tableThree = reservePlace("Table 3", 3000);

// console.log("Promise all");
// Promise.all([tableOne, tableTwo, tableThree])
//   .then(result => {
//     console.log(result);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// console.log("Promise allSettled");
// Promise.allSettled([tableOne, tableTwo, tableThree])
//   .then(result => {
//     console.log(result);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// console.log("Promise race 🏁");
// Promise.race([tableOne, tableTwo, tableThree])
//   .then(result => {
//     console.log(result);
//   })
//   .catch(error => {
//     console.log(error);
//   });

const imageUrls = [
  "https://dummyjson.com/image/400x400/008080/ffffff?text=Hello+Peter",
  "https://dummyjson.com/image/400x400/663399/ffffff?text=Hello+Mango",
  "https://dummyjson.com/image/400x400/90ee90/ffffff?text=Hello+Poly",
];

// const promises = imageUrls.map(path => fetch(path));
// Promise.allSettled(promises).then(result => {
//   console.log("🚀 ~ result:", result);
// });

const urls = [];

fetch("https://dummyjson.com/image/400x400/008080/ffffff?text=Hello+Peter")
  .then(res => {
    urls.push(res.url);
    return urls;
  })
  .then(urls => {
    fetch("https://dummyjson.com/image/400x400/663399/ffffff?text=Hello+Mango")
      .then(res => {
        urls.push(res.url);
        return urls;
      })
      .then(urls => {
        fetch(
          "https://dummyjson.com/image/400x400/90ee90/ffffff?text=Hello+Poly"
        ).then(res => {
          urls.push(res.url);
          console.log(urls);

          return urls;
        });
      });
  });
