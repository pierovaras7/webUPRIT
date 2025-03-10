document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.carousel-slide');
    const dotsContainer = document.querySelector('.carousel-dots');
    let currentIndex = 0;
    let startX = 0;
    let currentTranslate = 0;
    let isDragging = false;

    // Crear los dots basados en el número de slides
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    // Función para ir a un slide específico
    function goToSlide(index) {
        currentIndex = index;
        updateCarousel();
    }

    // Actualizar el carrusel
    function updateCarousel() {
        const offset = -currentIndex * 100;
        track.style.transform = `translateX(${offset}%)`;
        
        // Actualizar dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    // Auto avance cada 5 segundos
    function autoAdvance() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
    }

    let autoAdvanceInterval = setInterval(autoAdvance, 3000);

    // Eventos touch para dispositivos móviles
    track.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isDragging = true;
        clearInterval(autoAdvanceInterval);
    });

    track.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        const currentX = e.touches[0].clientX;
        const diff = currentX - startX;
        const slideWidth = track.clientWidth;
        currentTranslate = (-currentIndex * slideWidth) + diff;
        track.style.transform = `translateX(${currentTranslate}px)`;
    });

    track.addEventListener('touchend', (e) => {
        isDragging = false;
        const slideWidth = track.clientWidth;
        const movedBy = currentTranslate + (currentIndex * slideWidth);
        
        if (Math.abs(movedBy) > slideWidth / 3) {
            if (movedBy > 0 && currentIndex > 0) {
                currentIndex--;
            } else if (movedBy < 0 && currentIndex < slides.length - 1) {
                currentIndex++;
            }
        }
        
        updateCarousel();
        autoAdvanceInterval = setInterval(autoAdvance, 5000);
    });

    // Pausar auto avance cuando el mouse está sobre el carrusel
    track.addEventListener('mouseenter', () => {
        clearInterval(autoAdvanceInterval);
    });

    // Reanudar auto avance cuando el mouse sale del carrusel
    track.addEventListener('mouseleave', () => {
        autoAdvanceInterval = setInterval(autoAdvance, 3000);
    });
});