
const navTogglerButton = document.querySelector(".navbar-toggler");
const navBarLinks = document.querySelector(".navbar-links");
const closeButton = document.querySelector(".close-button");
const menu = document.querySelector(".menu");
const links = document.querySelectorAll(".menu a");

links.forEach(link => {
    link.addEventListener("click", () => {
        navBarLinks.classList.remove("showing");
        document.body.style.overflow = "scroll";
    })
})


navTogglerButton.addEventListener("click", () => {
    navBarLinks.classList.add("showing");
    menu.classList.add("showing");
    document.body.style.overflow = "hidden";
})

closeButton.addEventListener("click", () => {
    navBarLinks.classList.remove("showing");
    menu.classList.remove("showing");
    document.body.style.overflow = "scroll";
})