// Let's simulate a website that repertories a retro video game rating from differents vieogame website
// For example: User type Crash bandicoot, and he can see what is the average rating of the game from all website


//for now, manually creating rating from websites, simulating that we are gathering this from others website with API
let Ps1Gamekult = 17.5;
let Ps1JeuxvideoPointCom = 16;
let Ps1GameBlog = 12.5;
let Ps1Millenium = 13.5;

let N64Gamekult = 14;
let N64JeuxvideoPointCom = 17;
let N64GameBlog = 15.5;
let N64Millenium = 16.5;

let dreamCastGamekult = 12;
let dreamCastJeuxvideoPointCom = 18;
let dreamCastGameBlog = 11.5;
let dreamCastMillenium = 15.5;

// Creating a class VideoGame with properties name, plateform and a function rating
class VideoGame {

    constructor(name, platform) {
        this.name = name;
        this.platform = platform;
        this.rating = function() {

            let Ps1AverageRating = (Ps1Gamekult + Ps1JeuxvideoPointCom + Ps1GameBlog + Ps1Millenium) / 4;
            let N64AverageRating = (N64Gamekult + N64JeuxvideoPointCom + N64GameBlog + N64Millenium) / 4;
            let dreamCastAverageRating = (dreamCastGamekult + dreamCastJeuxvideoPointCom + dreamCastGameBlog + dreamCastMillenium) / 4;

            switch(this.platform.toUpperCase()) {
                case "PS1":
                    return Ps1AverageRating;
                    break;
    
                case "N64":
                    return N64AverageRating;
                    break;
    
                case "DREAMCAST":
                    return dreamCastAverageRating;
                    break;
                    
                default:
                    return "Doesn't have any reference on our website.";
            }
        } 
    }
}

// Asking user to chose
const game1 = new VideoGame(prompt("Give me a game"), prompt("Which platform?").toUpperCase());
//console.log(game1.name +" on " + game1.platform + " is rated " + game1.rating());
alert(game1.name +" on " + game1.platform + " is rated " + game1.rating());