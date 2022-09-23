const gameSearchInput = document.getElementById('gameSearchInput');
const gameSearchBtn = document.getElementById('searchBtn');
const gamesCatalog = document.getElementById('gameSearchResult')

const options2 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2436939bbbmshf8b75d0be0c1bfap13437cjsn390ab5986801',
		'X-RapidAPI-Host': 'opencritic-api.p.rapidapi.com'
	}
};


function lookingForGame() {

  const cat  = document.getElementById("gameSearchResult");
  const col = document.querySelector(".col");

  if(cat.contains(col)) {
    Swal.fire({
        imageUrl: "img/logopanda.png",
        imageHeight: 100,
        text:"Have a look, your research is already displayed!"
});
 } else {
    fetch(`https://videogames-news2.p.rapidapi.com/videogames_news/search_news?query=${gameSearchInput.value}`, options)
    .then(response => response.json())
    .then(data => {
        data.forEach((game) => {

              console.log(game);
              const col = document.createElement("div");
              col.className = "col";
              let content = `<div class="card" style="width: 22rem;">
                              <img src="${game.image}" class="card-img-top" alt="...">
                              <div class="card-body">
                                <h5 class="card-title">${game.title}</h5>
                                  <p class="card-text">${game.description}</p>
                                  <a href="${game.link}" class="btn btn-primary">Read more</a>
                              </div>
                            </div>`;
          col.innerHTML = content;
          document.querySelector("#gameSearchResult").append(col);
              })
            })
    .catch(err => console.error(err));

  }
}



gameSearchBtn.addEventListener("click", lookingForGame);




