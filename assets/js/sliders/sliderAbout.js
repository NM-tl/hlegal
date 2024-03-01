import Swiper from 'swiper';

document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper(".mySwiper", {
        pagination: {
          el: ".swiper-pagination",
        },
      });

      console.log('Swiper initialized');
});
