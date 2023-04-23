// ================== toggle icon navbar =============== //
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// ================== onClick function =============== //
var subject = document.getElementById('subject').value;

function newTab() {
    window.open(
        `https://mail.google.com/mail/u/0/?fs=1&to=instructable03@gmail.com&su=Contact from Portfolio&body=Full Name:%0d%0aPhone Number:%0d%0a%0d%0aBody:&bcc=&tf=cm`, '_blank'
    );
}

// ================== Contact Me Submit Button =============== //
// let SendMessage = document.querySelector('#sndMsg');

// SendMessage.onclick = () => {
//     window.location.href = "http://www.w3schools.com";
// }

// ================== scroll sections active link =============== //
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    // ================== sticky navbar =============== //
    let header = document.querySelector('header')

    header.classList.toggle('sticky', window.scrollY > 100);

    // ================== remove toggle icon and navbar when click navbar limk (scroll) =============== //
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


// ================== scroll reveal =============== //
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .sercices-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


// ================== typed js =============== //
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'ML & Ai Enthusiast', 'App Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});