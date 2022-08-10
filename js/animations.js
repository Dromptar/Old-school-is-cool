function menuToggle() {
    let nav = document.getElementById('nav');
    let toggle = document.getElementById('toggle');
    nav.classList.toggle("active");
    toggle.classList.toggle("active");
}

let video = document.querySelector('video');
window.addEventListener('scroll', function() {
    let value = 1 + window.scrollY / -1100;
    video.style.opacity = value;
})

'use strict';

function typeWriter(el) {
    const textArray = el.innerHTML.split('');
    el.innerHTML = '';
    textArray.forEach((letter, i) =>
        setTimeout(() => (el.innerHTML += letter), 95 * i)
    );
    setInterval(() => typeWriter(el), 8000);
}

typeWriter(subtitle);

