document.addEventListener("DOMContentLoaded", function () {
    let carousel = new bootstrap.Carousel(document.querySelector("#testimonialCarousel"), {
        interval: 5000,
        ride: "carousel"
    });
});