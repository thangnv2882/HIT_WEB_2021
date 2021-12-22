document.addEventListener("scroll", ()=> {
  if(window.scrollY >= 30) {
    document.querySelector(".header").classList.add("header-fix")
  }
  else {
    document.querySelector(".header").classList.remove("header-fix")
  }
})