const hamburguerMenu = document.querySelector(".menu__ul");
const categoriesMenu = document.querySelector(".categories");

let openHamburguerMenu = (event) => {
  event.preventDefault();

  const subMenu = document.querySelector(".sub-menu");
  subMenu.classList.toggle("hidden");
  subMenu.classList.toggle("show-sub-menu");
};

let openCategories = (event) => {
  event.preventDefault();

  const subMenu = document.querySelector(".sub-menu");
  subMenu.classList.toggle("hidden");
};

window.onresize = function () {
  changeEvents();
};

let changeEvents = () => {
  if (window.innerWidth < 1024) {
    hamburguerMenu.addEventListener("click", openHamburguerMenu);
    categoriesMenu.removeEventListener("click", openHamburguerMenu);
  } else {
    categoriesMenu.addEventListener("click", openHamburguerMenu);
    hamburguerMenu.removeEventListener("click", openHamburguerMenu);
  }
};

changeEvents();

//slider

const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  centerInsufficientSlides: true,
  centeredSlides: true,
  centeredSlidesBounds: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    1024: {
      slidesPerView: 3,
    },
    600: {
      slidesPerView: 2,
    },
    200: {
      slidesPerView: 1,
    },
  },
});
