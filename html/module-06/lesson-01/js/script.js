// const reviewsForm = document.forms[0];
// console.log("🚀 ~ reviewsForm:", reviewsForm);
const reviewsForm = document.forms.reviewForm;
// console.log("🚀 ~ reviewsFormBetter:", reviewsFormBetter);

console.log(reviewsForm);

reviewsForm.onsubmit = event => {
  event.preventDefault();
  // console.log("Save data from form");

  const { deviceColor, paymentService } = event.target.elements;

  console.log(deviceColor.value);
  [...paymentService].map(item => {
    if (item.checked) {
      console.log(item.value);
    }
  });
};

userAge.oninput = event => {
  document.querySelector(".age-value").textContent = event.target.value;
};
