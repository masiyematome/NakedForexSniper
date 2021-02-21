
const navTogglerButton = document.querySelector(".navbar-toggler");
const navBarLinks = document.querySelector(".navbar-links");
const closeButton = document.querySelector(".close-button");
const menu = document.querySelector(".menu");


navTogglerButton.addEventListener("click" , ()=> {
    navBarLinks.classList.add("showing");
    menu.classList.add("showing");
})

closeButton.addEventListener("click" , ()=> {
    navBarLinks.classList.remove("showing");
    menu.classList.remove("showing");
})