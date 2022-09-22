(() => {
    const refs = {
      openModalBtn: document.querySelectorAll("[data-modal-buy-open]"),
      closeModalBtn: document.querySelector("[data-modal-buy-close]"),
      modal: document.querySelector("[data-modal-buy]"),
    };
    refs.openModalBtn.forEach(elem => {
      elem.addEventListener("click", toggleModal);
    })
    refs.closeModalBtn.addEventListener("click", toggleModal);
    function toggleModal() {
      refs.modal.classList.toggle("md-is-hidden");
    }
  })();