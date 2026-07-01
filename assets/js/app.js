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
  if (menuItems.length) {
    const closeSubMenus = () => {
      menuItems.forEach((item) => {
        item.classList.remove("is-active");
      });
      document.body.classList.remove("is-locked");
    };
    const openSubMenu = (item) => {
      closeSubMenus();
      item.classList.add("is-active");
      document.body.classList.add("is-locked");
    };
    menuItems.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        if (item.classList.contains("is-active")) {
          closeSubMenus();
        } else {
          openSubMenu(item);
        }
      });
    });
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".js-header-nav")) {
        closeSubMenus();
      }
    });
  }
  const initMobileMenu = () => {
    const menuTrigger = document.querySelector(".js-menu-trigger");
    const menuBox = document.querySelector(".js-menu-box");
    if (!menuTrigger || !menuBox) return;
    const ddMenu = menuBox.querySelectorAll("li:has(.sub-menu)");
    ddMenu.forEach((el) => {
      el.addEventListener("click", (e) => {
        e.stopPropagation();
        el.classList.toggle("is-open");
      });
    });
    const openState = () => {
      menuBox.classList.add("is-open");
      menuTrigger.classList.add("is-active");
      document.body.classList.add("is-menu-open");
    };
    const closeState = () => {
      menuBox.classList.remove("is-open");
      menuTrigger.classList.remove("is-active");
      document.body.classList.remove("is-menu-open");
      ddMenu.forEach((el) => {
        el.addEventListener("click", (e) => {
          el.classList.remove("is-open");
        });
      });
    };
    const toggleStatement = () => {
      menuTrigger.classList.contains("is-active") ? closeState() : openState();
    };
    menuTrigger.addEventListener("click", toggleStatement);
  };
  initMobileMenu();
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
  const isMob = innerWidth < 768;
  if (isMob) return;
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
  const initGroupedSliders = (selector, configBuilder) => {
    const roots = document.querySelectorAll(selector);
    roots.forEach((root) => {
      if (typeof Swiper === "undefined") return;
      const slidesCount = root.querySelectorAll(".swiper-slide").length;
      const prevBtn = root.querySelector(".js-slider-prev");
      const nextBtn = root.querySelector(".js-slider-next");
      const config = typeof configBuilder === "function" ? configBuilder(root) : configBuilder || {};
      root.swiper = new Swiper(root.querySelector(".swiper"), {
        speed: 900,
        navigation: {
          prevEl: prevBtn,
          nextEl: nextBtn
        },
        ...config
      });
    });
  };
  initGroupedSliders(".js-relax-root", {
    slidesPerView: "auto",
    spaceBetween: 10,
    breakpoints: {
      992: {
        slidesPerView: 2
      },
      1025: {
        slidesPerView: 4
      }
    }
  });
  initGroupedSliders(".js-fun-root", {
    slidesPerView: "auto",
    spaceBetween: 10,
    breakpoints: {
      992: {
        slidesPerView: 2
      },
      1025: {
        slidesPerView: 4
      }
    }
  });
  initGroupedSliders(".js-events-root", {
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      768: {
        slidesPerView: 2
      },
      992: {
        spaceBetween: 32
      }
    }
  });
  const roomRoot = document.querySelector(".js-room-root");
  if (roomRoot) {
    const slidesCount = roomRoot.querySelectorAll(".swiper-slide").length;
    const hasEnoughSlides = slidesCount >= 3;
    initGroupedSliders(".js-room-root", {
      slidesPerView: hasEnoughSlides ? 1.1 : 1,
      spaceBetween: 10,
      centeredSlides: hasEnoughSlides,
      breakpoints: {
        768: {
          slidesPerView: hasEnoughSlides ? 1.5 : 1,
          spaceBetween: 24
        },
        1025: {
          slidesPerView: hasEnoughSlides ? 1.63 : 1,
          spaceBetween: 60
        }
      }
    });
  }
  const initPhotosGallery = () => {
    const isMob = innerWidth < 768;
    if (!isMob) return;
    initGroupedSliders(".js-photos-root", {
      slidesPerView: "auto",
      spaceBetween: 10
    });
  };
  initPhotosGallery();
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

// src/assets/js/modules/initTabs.js
var initTabs = () => {
  const nav = document.querySelector(".js-tab-nav");
  if (!nav) return;
  const tabBtns = nav.querySelectorAll(".js-descr-tab");
  const tabsContent = document.querySelectorAll(".js-tabcontent");
  if (!tabBtns.length || !tabsContent.length) return;
  const hideContent = () => {
    tabBtns.forEach((btn) => {
      btn.classList.remove("is-active");
    });
    tabsContent.forEach((tab) => {
      tab.classList.add("tab-hide");
      tab.classList.remove("tab-show", "tab-fade");
    });
  };
  const showContent = (i = 0) => {
    tabBtns[i].classList.add("is-active");
    tabsContent[i].classList.remove("tab-hide");
    tabsContent[i].classList.add("tab-show", "tab-fade");
  };
  hideContent();
  showContent();
  nav.addEventListener("click", (e) => {
    const btn = e.target.closest(".js-descr-tab");
    if (!btn) return;
    e.preventDefault();
    const index = Array.from(tabBtns).indexOf(btn);
    hideContent();
    showContent(index);
  });
};

// src/assets/js/modules/initPortalBlock.js
var initPortalBlock = (elementSelector, targetSelector, breakpoint, position = "beforeend") => {
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
  window.addEventListener("resize", move);
};

// src/assets/js/app.js
document.addEventListener("DOMContentLoaded", () => {
  initHeader();
  initForms();
  initAssortmentBox();
  initSliders();
  initFaqBox();
  initTabs();
  initPortalBlock(".hero .reserve-form", ".hero .container", 991);
});
