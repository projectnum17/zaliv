export const initSliders = () => {
    const initGroupedSliders = (selector, configBuilder) => {
        const roots = document.querySelectorAll(selector);

        roots.forEach((root) => {
            if (typeof Swiper === 'undefined') return;

            const slidesCount = root.querySelectorAll('.swiper-slide').length;

            const prevBtn = root.querySelector('.js-slider-prev');
            const nextBtn = root.querySelector('.js-slider-next');

            const config =
                typeof configBuilder === 'function'
                    ? configBuilder(root)
                    : configBuilder || {};

            root.swiper = new Swiper(root.querySelector('.swiper'), {
                speed: 900,
                navigation: {
                    prevEl: prevBtn,
                    nextEl: nextBtn,
                },
                ...config,
            });
        });
    };

    initGroupedSliders('.js-relax-root', {
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

    initGroupedSliders('.js-fun-root', {
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

    initGroupedSliders('.js-events-root', {
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            992: {
                spaceBetween: 32,
            },
        },
    });

    const roomRoot = document.querySelector('.js-room-root');

    if (roomRoot) {
        const slidesCount = roomRoot.querySelectorAll('.swiper-slide').length;
        const hasEnoughSlides = slidesCount >= 3;

        initGroupedSliders('.js-room-root', {
            slidesPerView: hasEnoughSlides ? 1.1 : 1,
            spaceBetween: 10,
            centeredSlides: hasEnoughSlides,
            breakpoints: {
                768: {
                    slidesPerView: hasEnoughSlides ? 1.5 : 1,
                    spaceBetween: 24,
                },
                1025: {
                    slidesPerView: hasEnoughSlides ? 1.63 : 1,
                    spaceBetween: 60,
                },
            },
        });
    }

    const initPhotosGallery = () => {
        const isMob = innerWidth < 768;
        if (!isMob) return;

        initGroupedSliders('.js-photos-root', {
            slidesPerView: 'auto',
            spaceBetween: 10,
        });
    };

    initPhotosGallery();
};
