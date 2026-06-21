// src/assets/js/modules/initHeader.js
var initHeader = () => {
  const header = document.querySelector(".js-header");
  if (!header) return;
  let lastScroll = 0;
  let scrollWay = 200;
  const handleScroll = () => {
    const currentScroll = window.scrollY;
    currentScroll > 5 ? header.classList.add("is-colored") : header.classList.remove("is-colored");
    currentScroll > scrollWay ? header.classList.add("is-transform") : header.classList.remove("is-transform");
    currentScroll > lastScroll && currentScroll > scrollWay ? header.classList.add("is-transform") : header.classList.remove("is-transform");
    lastScroll = currentScroll;
  };
  window.addEventListener("scroll", handleScroll);
  handleScroll();
  const menuItems = document.querySelectorAll(
    ".js-header-nav > ul > li:has(.sub-menu) > a"
  );
  if (!menuItems.length) return;
  menuItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const isActive = item.classList.contains("is-active");
      menuItems.forEach((el) => {
        el.classList.remove("is-active");
      });
      if (!isActive) {
        item.classList.add("is-active");
        document.body.classList.add("is-locked");
      } else {
        document.body.classList.remove("is-locked");
      }
    });
  });
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".js-header-nav")) {
      menuItems.forEach((el) => {
        el.classList.remove("is-active");
        document.body.classList.remove("is-locked");
      });
    }
  });
};

// src/assets/js/modules/initForms.js
var initForms = () => {
  const forms = document.querySelectorAll("form");
  if (!forms.length) return;
  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
    });
  });
};

// src/assets/js/modules/initAssortmentBox.js
var initAssortmentBox = () => {
  const boxes = document.querySelectorAll(".js-assortment-box");
  if (!boxes.length) return;
  let currentAnimationId = null;
  function smoothScrollTo(container, target, duration = 500) {
    if (currentAnimationId) {
      cancelAnimationFrame(currentAnimationId);
    }
    const startTime = performance.now();
    const startScroll = container.scrollLeft;
    container.style.scrollSnapType = "none";
    function animate(time) {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const currentEnd = target.offsetLeft - (container.clientWidth - target.clientWidth) / 2;
      container.scrollLeft = startScroll + (currentEnd - startScroll) * ease;
      if (progress < 1) {
        currentAnimationId = requestAnimationFrame(animate);
      } else {
        container.style.scrollSnapType = "x proximity";
      }
    }
    currentAnimationId = requestAnimationFrame(animate);
  }
  boxes.forEach((box) => {
    box.addEventListener("mouseenter", () => {
      const container = box.parentElement;
      smoothScrollTo(container, box, 2e3);
    });
  });
};

// src/assets/js/modules/initSliders.js
var initSliders = () => {
  const simpleSlider = (rootSelector, slidesCount = 4, slidesGap = 20) => {
    if (typeof Swiper === "undefined") return;
    const root = document.querySelector(rootSelector);
    if (!root) return;
    const prevBtn = root.querySelector(".js-slider-prev");
    const nextBtn = root.querySelector(".js-slider-next");
    new Swiper(root.querySelector(".swiper"), {
      slidesPerView: slidesCount,
      spaceBetween: slidesGap,
      speed: 900,
      navigation: {
        prevEl: prevBtn,
        nextEl: nextBtn
      }
    });
  };
  simpleSlider(".js-relax-root");
  simpleSlider(".js-fun-root");
  simpleSlider(".js-events-root", 2, 32);
};

// src/assets/js/modules/initFaqBox.js
var initFaqBox = () => {
  const faqBoxes = document.querySelectorAll(".js-faq-toggle");
  if (!faqBoxes.length) return;
  faqBoxes.forEach((box) => {
    box.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = box.classList.contains("is-open");
      faqBoxes.forEach((el) => el.classList.remove("is-open"));
      if (!isOpen) box.classList.add("is-open");
    });
  });
};

// src/assets/js/app.js
document.addEventListener("DOMContentLoaded", () => {
  initHeader();
  initForms();
  initAssortmentBox();
  initSliders();
  initFaqBox();
});
