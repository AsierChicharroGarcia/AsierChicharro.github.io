// 1. Efecto Navbar al hacer Scroll
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 2. Animación de aparición de elementos (Scroll Reveal)
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const elementVisible = 150;

    revealElements.forEach((reveal) => {
        const elementTop = reveal.getBoundingClientRect().top;

        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);

// Disparar una vez al cargar por si hay elementos ya visibles
revealOnScroll();
