export const initSliders = () => {
    const simpleSlider = (
        rootSelector,
        { slidesPerView = 4, spaceBetween = 20, ...config } = {},
    ) => {
        if (typeof Swiper === 'undefined') return;

        const root = document.querySelector(rootSelector);
        if (!root) return;

        const prevBtn = root.querySelector('.js-slider-prev');
        const nextBtn = root.querySelector('.js-slider-next');

        new Swiper(root.querySelector('.swiper'), {
            slidesPerView: slidesPerView,
            spaceBetween: spaceBetween,
            speed: 900,
            navigation: {
                prevEl: prevBtn,
                nextEl: nextBtn,
            },
            ...config,
        });
    };

    const eventsRoot = document.querySelector('.js-events-root');

    if (eventsRoot) {
        const slides = eventsRoot.querySelectorAll('.swiper-slide');

        if (slides.length <= 2) {
            eventsRoot.classList.add('is-sm');
        }
    }

    simpleSlider('.js-relax-root', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        breakpoints: {
            992: {
                slidesPerView: 2,
            },
            1025: {
                slidesPerView: 4,
            },
        },
    });

    simpleSlider('.js-fun-root', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        breakpoints: {
            992: {
                slidesPerView: 2,
            },
            1025: {
                slidesPerView: 4,
            },
        },
    });

    simpleSlider('.js-events-root', {
        slidesPerView: 2,
        spaceBetween: 0,
        breakpoints: {
            992: {
                spaceBetween: 32,
            },
        },
    });

    simpleSlider('.js-room-root', {
        slidesPerView: 1.63,
        spaceBetween: 60,
        centeredSlides: true,
    });
};
