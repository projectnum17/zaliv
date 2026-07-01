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

    if (menuItems.length) {
        const closeSubMenus = () => {
            menuItems.forEach((item) => {
                item.classList.remove('is-active');
            });

            document.body.classList.remove('is-locked');
        };

        const openSubMenu = (item) => {
            closeSubMenus();

            item.classList.add('is-active');
            document.body.classList.add('is-locked');
        };

        menuItems.forEach((item) => {
            item.addEventListener('click', (e) => {
                e.preventDefault();

                if (item.classList.contains('is-active')) {
                    closeSubMenus();
                } else {
                    openSubMenu(item);
                }
            });
        });

        document.addEventListener('click', (e) => {
            if (!e.target.closest('.js-header-nav')) {
                closeSubMenus();
            }
        });
    }

    const initMobileMenu = () => {
        const menuTrigger = document.querySelector('.js-menu-trigger');
        const menuBox = document.querySelector('.js-menu-box');

        if (!menuTrigger || !menuBox) return;

        const ddMenu = menuBox.querySelectorAll('li:has(.sub-menu)');

        ddMenu.forEach((el) => {
            el.addEventListener('click', (e) => {
                e.stopPropagation();
                el.classList.toggle('is-open');
            });
        });

        const openState = () => {
            menuBox.classList.add('is-open');
            menuTrigger.classList.add('is-active');
            document.body.classList.add('is-menu-open');
        };

        const closeState = () => {
            menuBox.classList.remove('is-open');
            menuTrigger.classList.remove('is-active');
            document.body.classList.remove('is-menu-open');
            ddMenu.forEach((el) => {
                el.addEventListener('click', (e) => {
                    el.classList.remove('is-open');
                });
            });
        };

        const toggleStatement = () => {
            menuTrigger.classList.contains('is-active')
                ? closeState()
                : openState();
        };

        menuTrigger.addEventListener('click', toggleStatement);
    };

    initMobileMenu();
};
