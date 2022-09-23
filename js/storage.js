const tryMeBtn = document.getElementById("tryMe");

function nameStorage() {
    
    let result = localStorage.getItem("name");
    if(result) {
        const spanNode = document.getElementById("nameId");
        spanNode.innerHTML = result.value;
    } else {
        result = Swal.fire({
            imageUrl: "img/jim.png",
            imageHeight: 100,
            text: "Hello there, and welcome! What's your name ?:",
            input: 'text',
            showCancelButton: true        
        }).then((result) => {
            if (result.value) {
                console.log("Result: " + result.value);
                localStorage.setItem("name", result.value);
        const spanNode = document.getElementById("nameId");
        spanNode.innerHTML = result.value;
            }
        });
    }
    
}

tryMeBtn.addEventListener('click', nameStorage);

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

typeWriter(subtitle)

    


