let lastScrollY = window.scrollY;
const navbar = document.querySelector('.navbar');

window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
        // Scrolling down
    navbar.classList.add("navbar-hidden");
    } else {
        // Scrolling up
        navbar.classList.remove("navbar-hidden");
    }
    lastScrollY = window.scrollY;
});

function zoomImage(imageSrc) {
    window.open(
        imageSrc,
        "_blank",
        "width=800,height=600"
    );
}

function zoomImage(src) {
    window.open(src, "_blank", "width=600,height=600");
}