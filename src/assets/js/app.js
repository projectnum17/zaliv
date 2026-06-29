'use strict';

import { initHeader } from './modules/initHeader';
import { initForms } from './modules/initForms';
import { initAssortmentBox } from './modules/initAssortmentBox';
import { initSliders } from './modules/initSliders';
import { initFaqBox } from './modules/initFaqBox';
import { initTabs } from './modules/initTabs';
import { initPortalBlock } from './modules/initPortalBlock';

document.addEventListener('DOMContentLoaded', () => {
    initHeader();
    initForms();
    initAssortmentBox();
    initSliders();
    initFaqBox();
    initTabs();
    initPortalBlock('.hero .reserve-form', '.hero .container', 991);
});
