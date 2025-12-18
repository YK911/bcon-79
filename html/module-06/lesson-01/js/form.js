const openModalBtn = document.querySelector("[data-modal-open]");
const closeModalBtn = document.querySelector("[data-modal-close]");
const modalEl = document.querySelector("[data-modal]");

openModalBtn.onclick = toggleModal;
closeModalBtn.onclick = toggleModal;

function toggleModal() {
  modalEl.classList.toggle("is-open");
}
