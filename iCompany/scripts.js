document.addEventListener('DOMContentLoaded', function () {
    let currentSlide = 0;
    const slides = Array.from(document.querySelectorAll('.slide'));
    const totalSlides = slides.length;
    if (!totalSlides) return;

    function show(index) {
        currentSlide = (index + totalSlides) % totalSlides;
        slides.forEach((s, i) => s.style.display = i === currentSlide ? 'block' : 'none');
    }

    function nextSlide() { show(currentSlide + 1); }
    function prevSlide() { show(currentSlide - 1); }

    // attach click handlers
    const nextBtn = document.getElementById('next');
    const prevBtn = document.getElementById('prev');
    nextBtn?.addEventListener('click', nextSlide);
    prevBtn?.addEventListener('click', prevSlide);

    // keyboard support
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') nextSlide();
        if (e.key === 'ArrowLeft') prevSlide();
    });

    // init
    show(0);
});