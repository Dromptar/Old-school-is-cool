const newsSearchBtn = document.getElementById('newsSearchBtn');
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2436939bbbmshf8b75d0be0c1bfap13437cjsn390ab5986801',
		'X-RapidAPI-Host': 'videogames-news2.p.rapidapi.com'
	}
};

function displayNews() {

    const cat  = document.getElementById("newsList");
    const col = document.querySelector(".col");
    if(cat.contains(col)) {
        Swal.fire({
            imageUrl: "img/logopanda.png",
            imageHeight: 100,
            text:"News are displayed !"
    });
    } else {
      fetch(`https://videogames-news2.p.rapidapi.com/videogames_news/recent`, options)
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
            document.querySelector("#newsList").append(col);
                })
              })
    .catch(err => console.error(err));
    }
}


newsSearchBtn.addEventListener("click", displayNews);

   