/**
 * Спливання подій
 * event.target - цільовий (вихідний) елемент
 * event.currentTarget - поточний елемент, на слухачі якого спіймали подію
 */

const parent = document.querySelector("#parent");
const child = document.querySelector("#child");
const innerChild = document.querySelector("#inner-child");

parent.addEventListener("click", event => {
  alert("Execute fn in parent");
});

child.addEventListener("click", event => {
  alert("Execute fn in child");
  event.stopPropagation();
  // event.stopImmediatePropagation();
});
child.addEventListener("click", event => {
  alert("Execute another fn in child");
});
// child.addEventListener(
//   "focus",
//   event => {
//     alert("Execute focus fn in child");
//     event.stopImmediatePropagation();
//   },
//   {
//     once: true,
//   }
// );

innerChild.addEventListener("click", event => {
  alert("Execute fn in innerChild");
});
