document.addEventListener("DOMContentLoaded", function () {
    let carousel = new bootstrap.Carousel(document.querySelector("#testimonialCarousel"), {
        interval: 5000,
        ride: "carousel"
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const testimonialCards = document.querySelectorAll(".testimonial-card");

    testimonialCards.forEach(card => {
        const ratingValue = card.getAttribute("data-rating"); // Get rating from data attribute
        const ratingContainer = card.querySelector(".rating");

        for (let i = 1; i <= 5; i++) {
            const star = document.createElement("i");

            if (i <= ratingValue) {
                star.classList.add("fas", "fa-star"); // Filled star
            } else {
                star.classList.add("far", "fa-star"); // Empty star
            }

            ratingContainer.appendChild(star);
        }
    });
});
