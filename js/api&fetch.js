const gameSearchInput = document.getElementById('gameSearchInput');
const gameSearchBtn = document.getElementById('searchBtn');

fetch(`https://www.pricecharting.com/api/products?t=c0b53bce27c1bdab90b1605249e600dc43dfd1d5&q=${gameSearchInput.value}`)
  .then((response) => response.json()
  .then((data) => console.log(data)));