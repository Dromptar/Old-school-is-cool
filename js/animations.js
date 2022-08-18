/* Para mostrar un menu que permite seleccionar una plataforma*/
function menuToggle() {
    let nav = document.getElementById('nav');
    let toggle = document.getElementById('toggle');
    nav.classList.toggle("active");
    toggle.classList.toggle("active");
}

/* Efecto de scroll que hace mas obscuro la video mas haces scrolling down */
let video = document.querySelector('video');
window.addEventListener('scroll', function() {
    let value = 1 + window.scrollY / -1200;
    video.style.opacity = value;
})



/* Full screen menu on click*/
let side1 = document.querySelector(".side1");
let side2 = document.querySelector(".side2");
let overlay = document.querySelector(".menu_overlay");
let open = document.querySelector(".fa-bars");
let close = document.querySelector(".fa-times");

open.addEventListener("click", () => {
  overlay.style.transform = "translateX(0)";
  side2.style.transform = "translateX(0)";
});

close.addEventListener("click", () => {
  overlay.style.transform = "translateX(110%)";
  side2.style.transform = "translateX(-110%)";
});



