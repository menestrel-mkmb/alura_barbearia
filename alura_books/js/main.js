let slidesNumber = 3;
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
  // changeSlidesPerView();
};

let changeEvents = () => {
  if (window.innerWidth < 1024) {
    hamburguerMenu.addEventListener("click", openHamburguerMenu);
    categoriesMenu.removeEventListener("click", openHamburguerMenu);
    window.innerWidth > 480 ? (slidesNumber = 2) : (slidesNumber = 1);
  } else {
    categoriesMenu.addEventListener("click", openHamburguerMenu);
    hamburguerMenu.removeEventListener("click", openHamburguerMenu);
    slidesNumber = 3;
  }
};

changeEvents();

//slider

const swiper = new Swiper(".swiper", {
  slidesPerView: slidesNumber,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let changeSlidesPerView = () => {
  const slides = document.querySelectorAll(".swiper");
};
