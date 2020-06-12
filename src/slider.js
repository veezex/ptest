import Swiper from "swiper";
import "swiper/css/swiper.min.css";

var mySwiper = new Swiper(".swiper-container", {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
