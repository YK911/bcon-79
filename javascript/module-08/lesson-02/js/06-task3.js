/**
 * Необхідно зрoбити рефакторинг функції calculateHousePerimeter,
 * так щоб вона приймала об'єкт з параметрами будинку,
 * включаючи довжини сторін будинку.
 * Функція повинна розрахувати та повернути периметр будинку.
 */

function calculateHousePerimeter({ a, b, c, d } = {}) {
  return a + b + c + d;
}

const houseParams = {
  a: 10,
  b: 15,
  c: 10,
  d: 15,
};

// const perimeter = calculateHousePerimeter(10, 15, 10, 15);
const perimeter = calculateHousePerimeter(houseParams);
console.log(`Периметр будинку: ${perimeter}`);
