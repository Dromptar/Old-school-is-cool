class VideoGame {

    constructor(name, plateform, price, image) {
        this.name = name.toLowerCase();
        this.price = parseFloat(price);
        this.plateform = plateform;
        this.image = image;
    }

}

const myGames = [];
myGames.push(new VideoGame("Super Mario Bros", "Nes", 10, "https://robohash.org/mario" ));
myGames.unshift(new VideoGame("Alone in the dark", "Pc", 6,"https://robohash.org/alone"));

const localSave = (key, value) => { localStorage.setItem(key, value)};
localSave("gamesList", JSON.stringify(myGames));

let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let input3 = document.getElementById('input3');
let input4 = document.getElementById('input4');
let form = document.getElementById('form');
let listViewButton = document.querySelector('#listView');


// recuperando values de los input en el DOM y push al array games
const addGameToMyList = (e) => {
    e.preventDefault();
    // Eso todavia no funciona pero quizé probar los operadores avanzados
    myGames.includes(input1.value) ? alert("This game is already is the list.") : myGames.push(new VideoGame(input1.value, input2.value, parseInt(input3.value), input4.value));        
    console.log(input1.value);
    console.log(myGames);
};

// creating a card via bootstrap directo en el Dom para cada objeto del array "games"
const createCard = (game) => {
    const col = document.createElement("div");
    col.className = "col";
    let content = `<div class="card" style="width: 18rem;">
                    <img src="${game.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${game.name}</h5>
                        <p class="card-text">
                        ${game.price} Euros
                        </p>
                    </div>
                </div>`;

    col.innerHTML = content;
    document.querySelector("#myGamesCatalog").append(col);

};

// funcion para mostrar la lista/array de juegos guardados via los input
const displayGames = (e) => {
    e.preventDefault();
    const cat  = document.getElementById("myGamesCatalog");
    const col = document.querySelector(".col");
    if(cat.contains(col)) {
        Swal.fire({
            imageUrl: "img/logopanda.png",
            imageHeight: 100,
            text:"Your list is already displayed."
    });
    } else {
        for(const game of myGames) {
            createCard(game);
            }
    }
    
}

form.addEventListener("submit", addGameToMyList); // to add game to the list
listViewButton.addEventListener("click", displayGames); // to display the list of games




