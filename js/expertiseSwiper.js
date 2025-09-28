export function addExpertiseSwiper() {
    let swiper = new Swiper(".expertise__swiper", {
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: {
            el: ".expertise__swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".navigation__btn--next",
            prevEl: ".navigation__btn--prev",
        },
        breakpoints: {
            420: {
                slidesPerView: 2,
                spaceBetween: 0,
            },
            570: {
                slidesPerView: 3,
                spaceBetween: 0,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 0,
            },
            1120: {
                slidesPerView: 5,
                spaceBetween: 0,
            },
            1425: {
                slidesPerView: 6,
                spaceBetween: 0,
            },
        },
    });
}