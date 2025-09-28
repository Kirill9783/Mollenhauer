export function addBenefitSwiper() {
    let swiper = new Swiper(".benefit__swiper", {
        loop: true,
        spaceBetween: 0,
        slidesPerView: 5,
        freeMode: true,
        watchSlidesProgress: true,
    });
    let swiper2 = new Swiper(".benefit__swiper2", {
        loop: true,
        spaceBetween: 10,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
    });
}