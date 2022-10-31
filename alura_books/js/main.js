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
