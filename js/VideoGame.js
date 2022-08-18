class VideoGame {

    constructor(name, plateform, price) {
        this.name = name.toLowerCase();
        this.price = parseFloat(price);
        this.plateform = plateform;
        this.rateAverage = function(myArray) {
            let sum = 0;
            for( let i = 0; i < myArray.length; i++) {
                sum += parseInt(myArray[i].rate)
            }
            return sum / myArray.length;
        };
        this.isExpensive = function(x) {
            return x > 10;
        };
        this.priceDependingOnPlatform = function() {
            switch (this.platform){
    
                case "NES":
               //5% de aumento
               return this.price*1.05;
               Break;
               
               case "NINTENDO":
               //10% de aumento
               return this.price*1.10;
               }
        };
        // this.displayGames = function(game) {
    
        //     let text = `<div>
        //                 <h1>${game.name}</h1>
        //                 <p>${game.price}</p>
        //                 </div>`
        
        //     return text;
        // };
    }
}

const games = [];
games.push(new VideoGame("Super Mario Bros", "Nes", 10));
games.push(new VideoGame("Donkey Kong Country", "Super Nes", 8));
games.push(new VideoGame("Legend of Zelda", "Nes", 15));
games.push(new VideoGame("Metal Gear Solid", "PS1", 12));
games.unshift(new VideoGame("Alone in the dark", "Pc", 6));

let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let input3 = document.getElementById('input3');
let form = document.getElementById('form');

const addGameToMyList = (e) => {
    e.preventDefault();
    games.push(new VideoGame(input1.value, input2.value, parseInt(input3.value)));
    console.log(input1.value);
    console.log(games);
};

form.addEventListener("submit", addGameToMyList);

let gamesList = "";
const displayGames = (game) => {
    
    let content = `<div>
                <h1>${game.name}</h1>
                <p>${game.price}</p>
                </div>`

    return content;
};

for(let i = 0; i < games.length; i++) {
    gamesList += displayGames(games[i]);
}

const catalog = document.getElementById("catalog");
catalog.innerHTML = gamesList;




// console.log(games.isExpensive);

//    for (const game of games.filter(x => x > 10)) {
//         console.log(game.name + "'s price is " + game.price);           
//  }