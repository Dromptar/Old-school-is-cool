// let headersList = {
//     "Accept": "*/*",
//     "User-Agent": "Thunder Client (https://www.thunderclient.com)",
//     "Content-Type": "application/json"
//    }
   
//    let bodyContent = JSON.stringify({
//      "user":"taller",
//      "password": "123"
//    });
   
//    let response = await fetch("http://api.vadok.dev:8000/login", { 
//      method: "POST",
//      body: bodyContent,
//      headers: headersList
//    });
   
//    let data = await response.text();
//    console.log(data);
   

//    const allGames = [{name: 'Mario', image: "https://robohash.org/mario", description: 'poupuopoou', plateform: 'Nes', price: 10},
//                   {name: 'zelda', image: "https://robohash.org/zelda", description: 'poupuopoou', plateform: 'Nes', price: 12},
//                   {name: 'DK', image: "https://robohash.org/dk", description: 'poupuopoou', plateform: 'Super Nes', price: 12},
//                   {name: 'Final Fantasy', image: "https://robohash.org/ff", description: 'poupuopoou', plateform: 'Ps1', price: 12},
//                   {name: 'Megaman', image: "https://robohash.org/megaman", description: 'poupuopoou', plateform: 'Nes', price: 12},
//                   {name: 'altered Beast', image: "https://robohash.org/abeast", description: 'poupuopoou', plateform: 'MegaDrive', price: 12}
// ]

// const lookingForGames = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const result = Math.round(Math.random());
//       if( result === 1) {
//         resolve(allGames);
//       } else {
//         reject("error");
//       }
//     }, 1000);
//   });
// };

// let test = 5;
// const tryToGetGames = () => {
//     const idInterval = setInterval(() => {
//       test -= 1;
//       lookingForGames()
//         .then((response) => {
//           console.log("We have this following games")
//           console.log(response);
//         })
//         .catch((error) =>  {
//           console.log(error);
//         })
//         .finally(() => {
//           console.log("promesse tenue")
//         });
//       if(test == 0) {
//         clearInterval(idInterval);
//       }
//     }, 2000)
// };

// tryToGetGames();


const gameSearchInput = document.getElementById('gameSearchInput');
const gameSearchBtn = document.getElementById('searchBtn');

fetch(`https://www.pricecharting.com/api/products?t=c0b53bce27c1bdab90b1605249e600dc43dfd1d5&q=${gameSearchInput.value}`)
  .then((response) => response.json()
  .then((data) => console.log(data)));