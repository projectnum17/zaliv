export const initHeader = () => {
    const header = document.querySelector('.js-header');
    if (!header) return;

    let lastScroll = 0;
    let scrollWay = 200;

    const handleScroll = () => {
        const currentScroll = window.scrollY;

        currentScroll > 5
            ? header.classList.add('is-colored')
            : header.classList.remove('is-colored');

        currentScroll > scrollWay
            ? header.classList.add('is-transform')
            : header.classList.remove('is-transform');

        currentScroll > lastScroll && currentScroll > scrollWay
            ? header.classList.add('is-transform')
            : header.classList.remove('is-transform');

        lastScroll = currentScroll;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    const menuItems = document.querySelectorAll(
        '.js-header-nav > ul > li:has(.sub-menu) > a',
    );

    if (!menuItems.length) return;

    menuItems.forEach((item) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();

            const isActive = item.classList.contains('is-active');

            menuItems.forEach((el) => {
                el.classList.remove('is-active');
            });

            if (!isActive) {
                item.classList.add('is-active');
                document.body.classList.add('is-locked');
            } else {
                document.body.classList.remove('is-locked');
            }
        });
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.js-header-nav')) {
            menuItems.forEach((el) => {
                el.classList.remove('is-active');
                document.body.classList.remove('is-locked');
            });
        }
    });
};
