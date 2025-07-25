// Gestion du menu hamburger pour mobile
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Gestion du formulaire
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message envoyé ! Nous vous répondrons bientôt.');
    e.target.reset();
});

// Smooth scroll pour les liens de navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        // Ferme le menu mobile après clic
        navMenu.classList.remove('active');
    });
});

// ScrollReveal animations (réduites pour mobiles)
const isMobile = window.innerWidth <= 768;
ScrollReveal().reveal('.resource-card', {
    delay: isMobile ? 100 : 200,
    distance: isMobile ? '30px' : '50px',
    origin: 'bottom',
    interval: isMobile ? 100 : 200,
    duration: isMobile ? 600 : 800,
    mobile: true
});

ScrollReveal().reveal('.article-card', {
    delay: isMobile ? 100 : 200,
    distance: isMobile ? '30px' : '50px',
    origin: 'bottom',
    interval: isMobile ? 100 : 200,
    duration: isMobile ? 600 : 800,
    mobile: true
});

ScrollReveal().reveal('#contact form', {
    delay: isMobile ? 100 : 200,
    distance: isMobile ? '30px' : '50px',
    origin: 'bottom',
    duration: isMobile ? 600 : 800,
    mobile: true
});
