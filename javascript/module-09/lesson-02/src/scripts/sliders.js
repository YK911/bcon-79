import reviews from '../db/reviews.json';
// import Swiper JS
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const reviewsSliderOptions = {
  modules: [Pagination],
  slidesPerView: 2,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
};
const sliderWrapper = document.querySelector(
  '.js-reviews-slider .swiper-wrapper'
);

const reviewsSlider = new Swiper('.js-reviews-slider', reviewsSliderOptions);
sliderWrapper.insertAdjacentHTML('beforeend', createSlides(reviews));

function createSlides(slidesData) {
  return slidesData
    .map(({ id, body, user: { fullName } }) => {
      return `
      <li class="swiper-slide" data-id="${id}">
        <h4>${fullName}</h4>
        <p>${body}</p>
      </li>
    `;
    })
    .join('');
}
reviewsSlider.update();

const gallerySliderOptions = {
  modules: [Navigation],
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
};
const gallerySlider = new Swiper('.js-gallery-slider', gallerySliderOptions);

export { reviewsSlider, gallerySlider };
