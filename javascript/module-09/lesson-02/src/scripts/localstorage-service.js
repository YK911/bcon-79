const LOCALSTORAGE_KEY = 'message';

// export function load() {
function load() {
  const serialisedData = localStorage.getItem(LOCALSTORAGE_KEY);

  // return JSON.parse(serialisedData);
}

// export function save(value) {
function save(value) {
  localStorage.setItem(LOCALSTORAGE_KEY, value);
}

// export let num = 5;
let num = 5;

export { load, save, num };
