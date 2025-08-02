(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
  }
})();

const modelEl = document.querySelector(".backdrop")
window.addEventListener("keydown", onEscClose)

function onEscClose(event) {
  if (event.code === "Escape") {
    modelEl.classList.toggle("is-hidden")
  }
}

modelEl.addEventListener("click", onBackdropClick)
function onBackdropClick (event) {
  console.log(event.target);
  console.log(event.currentTarget);
  if (event.target === event.currentTarget) {
    modelEl.classList.toggle("is-hidden")
  }
}