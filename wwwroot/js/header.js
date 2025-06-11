document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    // Toggle mobile menu with improved UX
    menuToggle.addEventListener('click', () => {
        const isExpanded = !navLinks.classList.contains('active');
        navLinks.classList.toggle('active');
        menuToggle.setAttribute('aria-expanded', isExpanded);
        menuToggle.innerHTML = isExpanded ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        if (isExpanded) {
            navLinks.style.animation = 'fadeIn 0.3s ease-out';
        }
    });

    // Toggle dropdown with click and keyboard support
    dropdownToggle.addEventListener('click', (e) => {
        e.preventDefault();
        const isExpanded = !dropdownMenu.classList.contains('active');
        dropdownMenu.classList.toggle('active');
        dropdownToggle.setAttribute('aria-expanded', isExpanded);
        if (isExpanded) {
            dropdownMenu.style.animation = 'fadeIn 0.3s ease-out';
        }
    });

    // Close dropdown and menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.navbar')) {
            navLinks.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', false);
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            dropdownMenu.classList.remove('active');
            dropdownToggle.setAttribute('aria-expanded', false);
        } else if (!e.target.closest('.dropdown')) {
            dropdownMenu.classList.remove('active');
            dropdownToggle.setAttribute('aria-expanded', false);
        }
    });

    // Keyboard navigation
    dropdownToggle.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const isExpanded = !dropdownMenu.classList.contains('active');
            dropdownMenu.classList.toggle('active');
            dropdownToggle.setAttribute('aria-expanded', isExpanded);
            if (isExpanded) {
                dropdownMenu.style.animation = 'fadeIn 0.3s ease-out';
            }
        } else if (e.key === 'Escape') {
            dropdownMenu.classList.remove('active');
            dropdownToggle.setAttribute('aria-expanded', false);
        }
    });

    // Close mobile menu with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', false);
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
});