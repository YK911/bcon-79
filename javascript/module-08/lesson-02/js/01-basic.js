/**
 * Деструктуризація об'єкта
 */

const user = {
  username: "Jacob name",
  skills: {
    html: true,
    css: false,
    js: true,
  },
};

const { username } = user; // const username = "Jacob name"
// console.log(username);

user.username = "Mango";

// console.log(username);
// console.log(user.username);

const { skills: userSkills } = user; // const userSkills = {}
// console.log(userSkills);
// console.log(skills);

// showUsername(user);

// function showUsername(user = {}) {
//   console.log(user?.username);
//   console.log(user?.skills?.html);
// }

/**
 * Глибока деструктуризація об'єкта
 */

const {
  skills: { html, css, js },
  // skills, // доступ до ключа skills залишається
} = user;

// console.log(skills);

// console.log("html", html);
// console.log("css", css);
// console.log("js", js);

/**
 * Деструктуризація масива
 */

// const arr = [1, 2, 3, 4, 5, , , , , 10];
// console.log("🚀 ~ arr:", arr);
const arr = [1, 2, , 4, 5, [222, 333, 444], { a: 555, b: 777 }];

const [one, , three = 333, , five] = arr;
console.log("🚀 ~ one:", one);
console.log("🚀 ~ three:", three);
console.log("🚀 ~ five:", five);
const [, , , , , [numberOne, namberTwo] = [], { a, b } = {}] = arr;
console.log("🚀 ~ a:", a);
console.log("🚀 ~ b:", b);
console.log("🚀 ~ numberOne:", numberOne);
console.log("🚀 ~ namberTwo:", namberTwo);
// console.log("🚀 ~ numbers:", numbers);
// console.log("🚀 ~ coords:", coords);
