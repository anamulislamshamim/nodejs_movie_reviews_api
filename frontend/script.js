const APILINK = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c6c69d4f17dab0318ac6920c53b0b44c&page=1';
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=c6c69d4f17dab0318ac6920c53b0b44c&query=";


const main = document.getElementById('section');
const form = document.getElementById('form');
const search = document.getElementById('query');


returnMovies(APILINK);
/*

<!-- <div class="row">
            <div class="column">
                <div class="card">
                    <center><img class="thumbnail" src="./demo_image.jpg"></center>
                    <h3>Movie Title</h3>
                </div>
            </div>
        </div> -->

*/
function returnMovies(url) {
    fetch(url).then(response => response.json()).then(data => {
        console.log(data.results);
        data.results.forEach(element => {
            const div_card = document.createElement('div');
            div_card.setAttribute('class', 'card');
            const div_row = document.createElement('div');
            div_row.setAttribute('class', 'row');
            const div_column = document.createElement('div');
            div_column.setAttribute('class', 'column');
            const image = document.createElement('img');
            image.setAttribute('class', 'thumbnail');
            image.setAttribute('id', 'image');
            const title = document.createElement('h3');
            title.setAttribute('id', 'title');
            const center = document.createElement('center');

            title.innerHTML = `${element.title}`
            image.src = IMG_PATH + element.poster_path;
            center.appendChild(image);
            div_card.appendChild(center);
            div_card.appendChild(title);
            div_column.appendChild(div_card);
            div_row.appendChild(div_column);

            main.appendChild(div_row);
        });
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    main.innerHTML = '';
  
    const searchItem = search.value;
  
    if (searchItem) {
      returnMovies(SEARCHAPI + searchItem);
        search.value = "";
    }
  });






