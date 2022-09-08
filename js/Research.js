class Research {

    constructor(name, image, description, plateform, price) {
        this.name = name.toLowerCase();
        this.image = image;
        this.description = description;
        this.plateform = plateform;
        this.price = price;;
    }

}

const allGames = [{name: 'Mario', image: "https://robohash.org/mario", description: 'poupuopoou', plateform: 'Nes', price: 10},
                  {name: 'zelda', image: "https://robohash.org/zelda", description: 'poupuopoou', plateform: 'Nes', price: 12},
                  {name: 'DK', image: "https://robohash.org/dk", description: 'poupuopoou', plateform: 'Super Nes', price: 12},
                  {name: 'Final Fantasy', image: "https://robohash.org/ff", description: 'poupuopoou', plateform: 'Ps1', price: 12},
                  {name: 'Megaman', image: "https://robohash.org/megaman", description: 'poupuopoou', plateform: 'Nes', price: 12},
                  {name: 'altered Beast', image: "https://robohash.org/abeast", description: 'poupuopoou', plateform: 'MegaDrive', price: 12}
]

console.log(allGames.map(a => a.name));

const gameSearchInput = document.getElementById('gameSearchInput');
const gameSearchBtn = document.getElementById('searchBtn');

// Create a card to display with details and properties
const createCard = (obj) => {
    const col = document.createElement("div");
    col.className = "col";
    let content = `<div class="card" style="width: 18rem;">
                    <img src="${obj.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${obj.name}</h5>
                        <p class="card-text">
                        ${obj.description}
                        </p>
                    </div>
                </div>`;

    col.innerHTML = content;
    document.querySelector("#gameSearchResult").append(col);

};

// display created card of the game that user put in the input 
const displayResult = (e) => {
    e.preventDefault();
    if(allGames.map(a => a.name.includes(gameSearchInput.value))) {      
            console.log(obj);
            createCard(obj);           
    } else {
        Swal.fire({
            imageUrl: "img/logopanda.png",
            imageHeight: 100,
            text:`We don't have this ${gameSearchInput.value} on our website`
    });
    }
}


searchBtn.addEventListener("click", displayResult); // Display the game card

