export const initPortalBlock = (
    elementSelector,
    targetSelector,
    breakpoint,
    position = 'beforeend',
) => {
    const element = document.querySelector(elementSelector);
    const target = document.querySelector(targetSelector);

    if (!element || !target) return;

    const originalParent = element.parentNode;
    const originalNextSibling = element.nextSibling;

    const move = () => {
        if (window.innerWidth <= breakpoint) {
            if (element.parentNode !== target) {
                target.insertAdjacentElement(position, element);
            }
        } else {
            if (element.parentNode !== originalParent) {
                if (originalNextSibling) {
                    originalParent.insertBefore(element, originalNextSibling);
                } else {
                    originalParent.appendChild(element);
                }
            }
        }
    };

    move();
    window.addEventListener('resize', move);
};
