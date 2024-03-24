document.addEventListener("DOMContentLoaded", function () {
  const consultationButton = document.querySelector(".modalBtn");
  const modalCTA = document.querySelector(".modalCTA");
  const modalForm = document.querySelector(".modalForm");
  const closeButtons = document.querySelectorAll(".modalCloseForm");

  const showModal = () => {
      modalCTA.classList.remove('hidden');
      if (modalForm.classList.contains('fade-out-bottom')) {
          modalForm.classList.remove('fade-out-bottom');
          modalForm.classList.add('fade-in-bottom');
      } else {
          modalForm.classList.toggle('fade-in-bottom');
      }
  };

  const hideModal = () => {
      modalForm.classList.toggle('fade-in-bottom');
      modalForm.classList.toggle('fade-out-bottom');
      setTimeout(() => {
          modalCTA.classList.toggle('hidden');
      }, 300);
  };

  consultationButton.addEventListener("click", showModal);
  modalCTA.addEventListener("click", (event) => {
    if (!modalForm.contains(event.target)) {
        hideModal();
    }
  });

  modalCTA.addEventListener("click", (event) => event.target === modalCTA && hideModal());

  closeButtons.forEach(button => {
      button.addEventListener("click", hideModal);
  });

  document.addEventListener("keydown", (event) => event.key === "Escape" && hideModal());
});
