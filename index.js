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

document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.querySelector(".contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent page reload on form submission

            // Get form values
            const name = document.querySelector('input[name="name"]').value.trim();
            const email = document.querySelector('input[name="email"]').value.trim();
            const message = document.querySelector('textarea[name="message"]').value.trim();
            const responseMessage = document.getElementById("form-response");

            if (name === "" || email === "" || message === "") {
                alert("Please fill in all fields.");
                return;
            }

            // Simulating form submission (Replace with backend request)
            responseMessage.style.display = "block";
            responseMessage.textContent = "Thank you, " + name + "! Your message has been sent.";
            
            // Clear form after submission
            contactForm.reset();
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".navbar-toggler");
    const navCollapse = document.querySelector("#navbarNav");

    document.addEventListener("click", function (event) {
        if (!toggleButton.contains(event.target) && !navCollapse.contains(event.target)) {
            navCollapse.classList.remove("show"); 
        }
    });

    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", function () {
            navCollapse.classList.remove("show");
        });
    });
});
