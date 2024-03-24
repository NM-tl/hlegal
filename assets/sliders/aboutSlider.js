document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.partners', {
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

    const imgs = [
        "Achievment-1", 
        "Achievment-2", 
        "Achievment-3", 
        "Achievment-4"
    ];

    const achievmentsWrapper = document.querySelector(".swiper-wrapper");

    if (achievmentsWrapper) {
        for (let i = 0; i < 2; i++) {
            imgs.forEach((img) => {
              achievmentsWrapper.innerHTML += `
                  <div class="swiper-slide py-6 px-20 rounded-xl">
                      <img src="../../images/about/${img}.png" alt="achievement" />
                  </div>
              `;
            });
        }
    }

});