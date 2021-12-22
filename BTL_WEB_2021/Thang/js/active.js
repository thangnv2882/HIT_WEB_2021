const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const navItems = $$(".nav-item");
navItems.forEach((navItem) => {
  navItem.onclick = () => {
    // $(".nav-item.active").classList.remove("active");
    navItem.classList.add("active");
  };
});


