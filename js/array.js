class VideoGame {

    constructor(name, plateform, price){
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
    }
}

const games = [];
games.push(new VideoGame("Super Mario Bros", "Nes", 10));
games.push(new VideoGame("Donkey Kong Country", "Super Nes", 8));
games.push(new VideoGame("Legend of Zelda", "Nes", 15));
games.push(new VideoGame("Metal Gear Solid", "PS1", 12));
games.unshift(new VideoGame("Alone in the dark", "Pc", 6));

const mags = [{name: "Gamekult", rate: 15},
              {name: "Jeuxvideocom", rate: 12},
              {name: "Gameblog", rate: 16},
              {name: "Millenium", rate: 18}];

console.log(games.isExpensive);

   for (const game of games.filter(x => x > 10)) {
        console.log(game.name + "'s price is " + game.price);           
 }
