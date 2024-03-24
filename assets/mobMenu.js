document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("mobMenu");
  const menuContent = document.getElementById("mobModal");
  const modalContent = document.querySelector(".modalContent")
  const modalCloseBtn = document.querySelector(".modalClose");

  menuBtn.addEventListener("click", () => {
      menuContent.classList.toggle("hidden");
      menuBtn.classList.toggle("bg-grey-separator");
      modalContent.classList.remove('fade-out-bottom');
      modalContent.classList.add('fade-in-bottom');
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", () => {
        modalContent.classList.remove('fade-in-bottom');
        modalContent.classList.add('fade-out-bottom');
        setTimeout(() => {
            menuContent.classList.add("hidden");
            menuBtn.classList.remove("bg-grey-separator");
        }, 300);
    });
  }
});
