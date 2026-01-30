/**
 * Типи подій: keypress, keydown, keyup
 * - Обмеження keypress
 * - Властивості key та code
 */

// document.addEventListener("keypress", event => {
//   console.log("keypress: ", event);
// });

// document.addEventListener("keyup", event => {
//   console.log("keyup: ", event);
// });

/**
 * Обробка комбінацій клавіш
 */
document.addEventListener("keydown", event => {
  event.preventDefault();
  console.log("keydown: ", event);
  if (event.metaKey && event.code === "KeyP") {
    alert("Abort print function");
    return;
  }
  if (event.metaKey && event.shiftKey && event.code === "KeyR") {
    alert("Abort page reload");
    return;
  }
  if ((event.metaKey || event.shiftKey) && event.code === "KeyR") {
    alert("Abort page reload");
    return;
  }
  if (event.metaKey && event.shiftKey && event.code === "KeyT") {
    alert("Abort reopen page");
    return;
  }
  if (event.altKey && event.metaKey && event.code === "KeyI") {
    alert("Abort devtools");
    return;
  }
});
