let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    menu.style.transform = 'scale(0.8)';

    setTimeout(() => {
        menu.classList.toggle('ri-menu-line');
        menu.classList.toggle('ri-close-line');
        menu.style.opacity = '1';
        menu.style.transform = 'scale(1)';
    }, 150);
    navlist.classList.toggle('open');
};

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.hero-text', {delay:200, origin:'top'});
sr.reveal('.hero-img', {delay:450, origin:'top'});
sr.reveal('.icons', {delay:500, origin:'left'});