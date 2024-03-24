
document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".partners", {
    slidesPerView: 4,
    spaceBetween: 40,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        300: {
        slidesPerView: 1,
        spaceBetween: 10,
        },
        768: {
        slidesPerView: 2,
        spaceBetween: 10,
        },
        996: {
        slidesPerView: 3,
        spaceBetween: 20,
        },
        1440: {
        slidesPerView: 4,
        spaceBetween: 40,
        },
    },
    });
});