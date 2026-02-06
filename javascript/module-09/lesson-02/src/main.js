//? Іменований імпорт (named)
import { load, save, num as number } from './scripts/localstorage-service';
import { Storage } from './scripts/localstorageAPI';
import { refs } from './scripts/refs';

//? Імпорт простору імен (namespace)
import * as myModule from './scripts/localstorage-service';

//? Дефолтний імпорт
import creatMarkup, { num } from './scripts/markup-service';

import './css/styles.css';
import './scripts/render-image';

console.log(creatMarkup('Hello from main.js module'));
console.log(num);
console.log(number);

// console.log('🚀 ~ myModule:', myModule);
// myModule.load();

// console.log(refs.form);
// refs.form.addEventListener('submit', event => {
//   event.preventDefault();
//   const form = event.target;

//   console.log(form.elements);
// });
// refs.textarea;

const storageInstanse = new Storage({});
console.log('🚀 ~ storageInstanse:', storageInstanse);

load();
save();
