// console.log('works from render image');

// ! ІМПОРТ ЗОБРАЖЕНЬ ВИКОНУЄТЬСЯС ТІЛЬКИ ТАКИМ СПОСОБОМ
import imgUrl from '../img/img.jpeg';
console.log('🚀 ~ imgUrl:', imgUrl);

function renderImage() {
  const markup = `<img src="${imgUrl}" alt="Some image" width="400">`;
  document.querySelector('main').insertAdjacentHTML('beforeend', markup);
}

renderImage();
