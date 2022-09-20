(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-fr-open]"),
    closeModalBtn: document.querySelector("[data-modal-fr-close]"),
    modal: document.querySelector("[data-modal-fr]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("md-is-hidden");
  }
})();