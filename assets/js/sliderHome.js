document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".partners", {
      spaceBetween: 40,
      slidesPerView: 1,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 500000,
        disableOnInteraction: false,
      },
    });
  }
); 