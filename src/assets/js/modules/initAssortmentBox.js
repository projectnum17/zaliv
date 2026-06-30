export const initAssortmentBox = () => {
    const boxes = document.querySelectorAll('.js-assortment-box');
    if (!boxes.length) return;

    const isMob = innerWidth < 768;
    if (isMob) return;

    let currentAnimationId = null;

    function smoothScrollTo(container, target, duration = 500) {
        if (currentAnimationId) {
            cancelAnimationFrame(currentAnimationId);
        }

        const startTime = performance.now();
        const startScroll = container.scrollLeft;

        container.style.scrollSnapType = 'none';

        function animate(time) {
            const elapsed = time - startTime;
            const progress = Math.min(elapsed / duration, 1);

            const ease = 1 - Math.pow(1 - progress, 3);

            const currentEnd =
                target.offsetLeft -
                (container.clientWidth - target.clientWidth) / 2;

            container.scrollLeft =
                startScroll + (currentEnd - startScroll) * ease;

            if (progress < 1) {
                currentAnimationId = requestAnimationFrame(animate);
            } else {
                container.style.scrollSnapType = 'x proximity';
            }
        }

        currentAnimationId = requestAnimationFrame(animate);
    }

    boxes.forEach((box) => {
        box.addEventListener('mouseenter', () => {
            const container = box.parentElement;
            smoothScrollTo(container, box, 2000);
        });
    });
};
