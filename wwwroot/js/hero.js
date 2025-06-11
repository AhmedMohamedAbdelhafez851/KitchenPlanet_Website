document.addEventListener('DOMContentLoaded', () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    new Swiper('.hero-slider', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        autoplay: prefersReducedMotion ? false : {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        effect: 'slide',
        speed: 800,
        on: {
            init: function () {
                if (!prefersReducedMotion) {
                    this.el.querySelectorAll('.hero-image').forEach(img => {
                        img.style.transition = 'transform 0.8s ease';
                    });
                }
            },
            slideChangeTransitionStart: function () {
                const slides = this.slides;
                slides.forEach(slide => {
                    const img = slide.querySelector('.hero-image');
                    if (slide.classList.contains('swiper-slide-active')) {
                        img.style.transform = 'scale(1.1)';
                    } else {
                        img.style.transform = 'scale(1)';
                    }
                });
            },
        },
    });

    document.querySelector('.cta-button').addEventListener('focus', (e) => {
        e.target.style.boxShadow = '0 0 15px rgba(168, 202, 186, 0.7)';
    });

    document.querySelector('.cta-button').addEventListener('blur', (e) => {
        e.target.style.boxShadow = '0 5px 15px rgba(74, 112, 76, 0.3)';
    });
});