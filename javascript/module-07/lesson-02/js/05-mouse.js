/**
 * Події миші
 * - mouseenter і mouseleave (це ховер)
 * - mouseover і mouseout
 * - mousemove (chatty event - балакуча подія)
 */

const boxRef = document.querySelector(".js-box");
// boxRef.addEventListener("mouseenter", event => {
//   event.target.classList.add("box--active");
//   console.log("Enter in box");
// });

// boxRef.addEventListener("mouseleave", event => {
//   event.target.classList.remove("box--active");
//   console.log("Leave in box");
// });

// boxRef.addEventListener("mouseover", event => {
//   console.log("mouseover");

//   console.log(event);
//   console.log(event.target);
// });

// boxRef.addEventListener("mouseout", event => {
//   console.log("mouseout");

//   console.log(event);
//   console.log(event.target);
// });

// boxRef.addEventListener(
//   "mousemove",
//   debounce(event => {
//     console.log("mousemove");
//   }, 500)
// );
// boxRef.addEventListener(
//   "mousemove",
//   throttle(event => {
//     console.log("mousemove");
//   }, 500)
// );

// console.log(debounce);
// console.log(throttle);

// boxRef.addEventListener("touchstart", () => {
//   console.log("Touch event");
// });
