function nameStorage() {
    
    let userName = localStorage.getItem("name");
    if(userName) {
        const spanNode = document.getElementById("nameId");
        spanNode.innerHTML = userName;
    } else {
        userName = prompt("Hello there! What's your name?");
        localStorage.setItem("name", userName);
        const spanNode = document.getElementById("nameId");
        spanNode.innerHTML = userName;
    }
    
}
nameStorage();

/* efecto animacion de tipo "writter" en un texto*/
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


