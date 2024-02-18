// import Swiper JS
import Swiper, { Pagination } from "swiper";

Swiper.use([Pagination]);

import "swiper/css";
import "swiper/css/pagination";

const swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: true,
    pagination: {
        el: ".swiper-pagination",
    },
});
