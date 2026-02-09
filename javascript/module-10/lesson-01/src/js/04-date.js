import "../common.css";

/*
 - Створення
 - Unix-час
 - Методи
 - Різниця часу
 - Date.now()
*/
// const date = new Date();
// console.log("🚀 ~ date:", date);
// console.dir(date);

// const res1 = date.getTime();
// console.log("🚀 ~ res1:", res1);

// const date1 = Date.now();
// console.log('date1', date1);

// const valentinesDay = new Date("2026-02-14");
// const valentinesDay = new Date("2026-02");
// const valentinesDay = new Date("2026");
// console.log("🚀 ~ valentinesDay:", valentinesDay);

const valDay = "14 February 2026";

// const createdValDay = new Date(valDay);
// console.log("🚀 ~ createdValDay:", createdValDay);

const dateInThePast = new Date(2025, 11, 31, 23, 59);
// console.log("🚀 ~ dateInThePast:", dateInThePast);

const whatDay = dateInThePast.getDay();
// console.log("🚀 ~ whatDay:", whatDay);
const whatHours = dateInThePast.getHours();
// console.log("🚀 ~ whatHours:", whatHours);

dateInThePast.setSeconds(59);
// console.log("🚀 ~ dateInThePast:", dateInThePast);

// const updDate = Date.now();
// console.log("🚀 ~ updDate:", updDate);
// console.log("🚀 ~ updDate:", updDate + 1000);

const pastTime = Date.now();

// setTimeout(() => {
//   const futureTime = Date.now();

//   const deltaTime = futureTime - pastTime;
//   console.log("🚀 ~ deltaTime:", deltaTime);
// }, 3000);

setInterval(() => {
  const currTime = Date.now();

  const delataTime = currTime - pastTime;
  console.log("🚀 ~ delataTime:", delataTime);
}, 1000);
