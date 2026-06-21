'use strict';

import { initHeader } from './modules/initHeader';
import { initForms } from './modules/initForms';
import { initAssortmentBox } from './modules/initAssortmentBox';
import { initSliders } from './modules/initSliders';
import { initFaqBox } from './modules/initFaqBox';

document.addEventListener('DOMContentLoaded', () => {
    initHeader();
    initForms();
    initAssortmentBox();
    initSliders();
    initFaqBox();
});
