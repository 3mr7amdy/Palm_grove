document.addEventListener("DOMContentLoaded", function () {
    // ✅ Mobile Menu Toggle Functionality
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener("click", function (event) {
            mobileMenu.classList.toggle("hidden");
            event.stopPropagation();
        });

        // Close menu when clicking outside
        document.addEventListener("click", function (event) {
            if (!mobileMenu.classList.contains("hidden") &&
                !menuToggle.contains(event.target) &&
                !mobileMenu.contains(event.target)) {
                mobileMenu.classList.add("hidden");
            }
        });
    }

    // ✅ Active Navigation Highlighting for Both Desktop & Mobile
    const navLinks = document.querySelectorAll(".nav-link");
    const currentPath = window.location.pathname.split("/").pop(); // Get current page file name

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPath) {
            link.classList.add("text-orange-700", "underline", "decoration-2", "underline-offset-4");
        } else {
            link.classList.add("hover:text-orange-700", "hover:underline", "decoration-2", "underline-offset-4");
        }
    });
});
