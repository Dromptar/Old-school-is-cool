class VideoGame {

    constructor(name, plateform, price, image) {
        this.name = name.toLowerCase();
        this.price = parseFloat(price);
        this.plateform = plateform;
        this.image = image;
    }

}

const games = [];
games.push(new VideoGame("Super Mario Bros", "Nes", 10, "https://robohash.org/mario" ));
games.unshift(new VideoGame("Alone in the dark", "Pc", 6,"https://robohash.org/alone"));

const localSave = (key, value) => { localStorage.setItem(key, value)};
localSave("gamesList", JSON.stringify(games));

let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let input3 = document.getElementById('input3');
let input4 = document.getElementById('input4');
let form = document.getElementById('form');
let listViewButton = document.querySelector('#listView');

const addGameToMyList = (e) => {
    e.preventDefault();
    games.push(new VideoGame(input1.value, input2.value, parseInt(input3.value), input4.value));
    console.log(games);
};

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
    document.querySelector("#catalog").append(col);

    //return content;
};

const displayGames = (e) => {
    e.preventDefault();
    for(const game of games) {
        createCard(game);
        }
}

form.addEventListener("submit", addGameToMyList); // to add game to the list
listViewButton.addEventListener("click", displayGames); // to display the list of games




