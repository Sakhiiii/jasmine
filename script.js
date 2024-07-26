let currentSlide = 0;
let slideInterval;

function updateSlide() {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentSlide);
    });
}

function nextSlide() {
    const slides = document.querySelectorAll('.slide');
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlide();
    resetInterval();
}

function prevSlide() {
    const slides = document.querySelectorAll('.slide');
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlide();
    resetInterval();
}

function startSlideShow() {
    slideInterval = setInterval(nextSlide, 5000);
}

function resetInterval() {
    clearInterval(slideInterval);
    startSlideShow();
}

document.addEventListener('DOMContentLoaded', () => {
    updateSlide();
    startSlideShow();
});
