(() => {
    const refs = {
      openModalBtn: document.querySelectorAll("[data-modal-ing-open]"),
      closeModalBtn: document.querySelector("[data-modal-ing-close]"),
      modal: document.querySelector("[data-modal-ing]"),
    };
    refs.openModalBtn.forEach(elem => {
      elem.addEventListener("click", toggleModal);
    })
    refs.closeModalBtn.addEventListener("click", toggleModal);
    function toggleModal() {
      refs.modal.classList.toggle("md-is-hidden");
    }
  })();