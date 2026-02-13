import { refs } from "./refs";

export function showLoader() {
  refs.loader.classList.remove("hidden");
}
export function hideLoader() {
  refs.loader.classList.add("hidden");
}

export function toggleActiveFormButton() {
  const btn = refs.searchForm.elements.searchBreed;

  btn.disabled = !btn.disabled;

  // btn.hasAttribute("disabled")
  //   ? btn.removeAttribute("disabled")
  //   : btn.setAttribute("disabled", "");
}
