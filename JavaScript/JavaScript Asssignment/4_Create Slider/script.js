document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");
    const slideCount = slides.length;
    let currentSlide = 0;

    function updateSlider() {
        const offset = -currentSlide * 300;
        slider.style.transform = `translateX(${offset}px)`;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slideCount;
        updateSlider();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slideCount) % slideCount;
        updateSlider();
    }

    slides.forEach((slide, index) => {
        slide.addEventListener("click", () => {
            currentSlide = index;
            updateSlider();
        });
    });

    document.getElementById("prevBtn").addEventListener("click", prevSlide);
    document.getElementById("nextBtn").addEventListener("click", nextSlide);
});