const hamburguerMenu = document.querySelector(".menu__ul");
const categoriesSpan = document.querySelector(".categories__span");

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
  event.preventDefault();

  console.log(event.target);

  if (event.target < 1024) {
    hamburguerMenu.addEventListener("click", openHamburguerMenu);
    categoriesSpan.removeEventListener("click", openHamburguerMenu);
  } else {
    categoriesSpan.addEventListener("click", openHamburguerMenu);
    hamburguerMenu.removeEventListener("click", openHamburguerMenu);
  }
};
