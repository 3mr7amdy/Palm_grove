document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".swiper-container", {
        loop: true, // Infinite loop
        autoplay: {
            delay: 4000, // Auto-slide every 4 seconds
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true, // Makes dots animated
        },
        slidesPerView: 1, // Show only one slide at a time
        spaceBetween: 0, // Remove spacing between slides
    });
});
