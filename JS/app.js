// AOS
if (typeof AOS !== "undefined") {
    AOS.init({
        duration: 1000,
        once: true,
        easing: "ease-in-out"
    });
}

// Scroll to top button
const scrollButton = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (!scrollButton) return;

    if (window.scrollY > 300) {

        scrollButton.style.display = "block";

    } else {

        scrollButton.style.display = "none";

    }

});

if (scrollButton) {

    scrollButton.addEventListener("click", () => {

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}