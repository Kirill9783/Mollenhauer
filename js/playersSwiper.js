export function addPlayersSwiper() {
    let swiper = new Swiper(".players__slider", {
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: {
            el: ".players__pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".players__btn-slide--next",
            prevEl: ".players__btn-slide--prev",
        },
        breakpoints: {
            491: {
                slidesPerView: 2,
                spaceBetween: 0,
            },
            550: {
                slidesPerView: 3,
                spaceBetween: 0,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 0,
            },
        },
    });
}