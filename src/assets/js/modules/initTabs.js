export const initTabs = () => {
    const nav = document.querySelector('.js-tab-nav');
    if (!nav) return;

    const tabBtns = nav.querySelectorAll('.js-descr-tab');
    const tabsContent = document.querySelectorAll('.js-tabcontent');

    if (!tabBtns.length || !tabsContent.length) return;

    const hideContent = () => {
        tabBtns.forEach((btn) => {
            btn.classList.remove('is-active');
        });

        tabsContent.forEach((tab) => {
            tab.classList.add('tab-hide');
            tab.classList.remove('tab-show', 'tab-fade');
        });
    };

    const showContent = (i = 0) => {
        tabBtns[i].classList.add('is-active');
        tabsContent[i].classList.remove('tab-hide');
        tabsContent[i].classList.add('tab-show', 'tab-fade');
    };

    hideContent();
    showContent();

    nav.addEventListener('click', (e) => {
        const btn = e.target.closest('.js-descr-tab');
        if (!btn) return;

        e.preventDefault();

        const index = Array.from(tabBtns).indexOf(btn);

        hideContent();
        showContent(index);
    });
};
