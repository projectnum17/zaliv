export const initSliders = () => {
    const simpleSlider = (rootSelector, slidesCount = 4, slidesGap = 20) => {
        if (typeof Swiper === 'undefined') return;

        const root = document.querySelector(rootSelector);
        if (!root) return;

        const prevBtn = root.querySelector('.js-slider-prev');
        const nextBtn = root.querySelector('.js-slider-next');

        new Swiper(root.querySelector('.swiper'), {
            slidesPerView: slidesCount,
            spaceBetween: slidesGap,
            speed: 900,
            navigation: {
                prevEl: prevBtn,
                nextEl: nextBtn,
            },
        });
    };

    simpleSlider('.js-relax-root');
    simpleSlider('.js-fun-root');
    simpleSlider('.js-events-root', 2, 32);
};
