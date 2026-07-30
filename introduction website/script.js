







/*
// Scroll-triggered fade-in animation for sections
const sections = document.querySelectorAll('.fade-section');
 
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });
 
sections.forEach(section => observer.observe(section));
*/

// Scroll-triggered fade-in animation for sections
const sections = document.querySelectorAll('.fade-section');
 
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });
 
sections.forEach(section => observer.observe(section));











