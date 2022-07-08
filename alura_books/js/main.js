const hamburguerMenu = document.querySelector(".menu__ul");

let openHamburguerMenu = (event) => {
  event.preventDefault();

  const subMenu = document.querySelector(".sub-menu");
  subMenu.classList.toggle("hidden");
  subMenu.classList.toggle("show-sub-menu");
};

hamburguerMenu.addEventListener("click", openHamburguerMenu);
