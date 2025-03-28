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

function updateLanguageLabels() {
    const select = document.querySelector(".language-switch");
    const isMobile = window.innerWidth <= 525;
    select.options[0].textContent = isMobile ? "EN" : "English";
    select.options[1].textContent = isMobile ? "SK" : "Slovak";
}

window.addEventListener("resize", updateLanguageLabels);
window.addEventListener("load", updateLanguageLabels);

document.querySelectorAll('.navlist a').forEach(link => {
    link.addEventListener('mouseenter', function(e) {
        const width = link.offsetWidth;
        const offsetX = e.clientX - link.getBoundingClientRect().left;
        
        let origin;
        if (offsetX < width / 3) {
            origin = 'left';
        } else if (offsetX > (2 * width) / 3) {
            origin = 'right';
        } else {
            origin = 'center';
        }
        
        link.style.setProperty('--transform-origin', origin);
    });

    link.addEventListener('mouseleave', function() {
        link.style.setProperty('--transform-origin', 'center');
    });
});

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.hero-text', {delay:200, origin:'top'});
sr.reveal('.hero-img', {delay:450, origin:'top'});
sr.reveal('.icons', {delay:500, origin:'left'});

//Javascript for video slider nav
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");

var sliderNav = function(manual){
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);
    })
});

//Membership page

document.addEventListener("DOMContentLoaded", function () {
    console.log("Membership page loaded");
    
    const membershipLinks = document.querySelectorAll("a[href='#']");
    membershipLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            alert("This feature is coming soon!");
        });
    });

    // Form validation (if needed)
    const forms = document.querySelectorAll("form");
    forms.forEach(form => {
        form.addEventListener("submit", function (event) {
            const inputs = form.querySelectorAll("input, textarea");
            let valid = true;
            
            inputs.forEach(input => {
                if (input.hasAttribute("required") && !input.value.trim()) {
                    valid = false;
                    input.style.border = "2px solid red";
                } else {
                    input.style.border = "";
                }
            });

            if (!valid) {
                event.preventDefault();
                alert("Please fill in all required fields.");
            }
        });
    });
});

//Animate On Scroll

