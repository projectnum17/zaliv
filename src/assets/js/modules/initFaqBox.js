export const initFaqBox = () => {
    const faqBoxes = document.querySelectorAll('.js-faq-toggle');
    if (!faqBoxes.length) return;

    faqBoxes.forEach((box) => {
        box.addEventListener('click', (e) => {
            e.stopPropagation();

            const isOpen = box.classList.contains('is-open');
            faqBoxes.forEach((el) => el.classList.remove('is-open'));

            if (!isOpen) box.classList.add('is-open');
        });
    });
};
