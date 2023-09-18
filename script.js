// JavaScript to show/hide scroll-to-top icon when footer is reached
window.addEventListener("scroll", function () {
    let scrollToTop = document.querySelector(".scroll-to-top");
    let footer = document.querySelector("footer");

    if (footer.getBoundingClientRect().top <= window.innerHeight && footer.getBoundingClientRect().top > 0) {
        scrollToTop.style.display = "block";
    }
    else {
        scrollToTop.style.display = "none";
    }
});

// JavaScript code to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}