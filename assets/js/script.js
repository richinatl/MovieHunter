const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

function getPopularMovie() {
    var requestUrl='https://api.themoviedb.org/3/discover/movie?primary_release_year=2021&sort_by=vote_average.desc&api_key=67ee7262b46b2cfedff77e6b877aac65';
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
                for (var i=0; i<5; i++) {
                    if (data.results[i].title.length<20) {
                        var image = $('<img></img>').attr('src', 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/'+data.results[i].poster_path).addClass('col-3');
                        $('#image-container').append(image);
                        var title = $('<h4></h4>').text(data.results[i].title).addClass('col-3').css('text-align', 'center');
                        console.log(title.text().length);
                        $('#title-container').append(title);
                }
            }
        })
}
getPopularMovie();

function saveSearches() {
    var searches = {
        query: $('#search-input').val()
    };
    localStorage.setItem('searchWord', $('#search-input').val());
    localStorage.setItem("searchQuery", JSON.stringify(searches));
    var searchesArr = [];
    searchesArr.push(searches);
    searchesArr = searchesArr.concat(JSON.parse(localStorage.getItem("searchesArr")||"[]"));
    localStorage.setItem("searchesArr", JSON.stringify(searchesArr));
}

function showSearches() {
    var searches = JSON.parse(localStorage.getItem('searchesArr'));
    if (searches !== null) {
        $('#last-search-container').empty();
        for (var i=0; i<searches.length && i<6; i++) {
            var lastSearch = $('<button></button>').text(searches[i].query).addClass('btn btn-dark')
                .css({
                    'margin': '5px 10px'
                });
            $('#last-search-container').append(lastSearch).addClass('d-flex justify-content-center');
        }
    }
}

$(document).ready(function() {
    showSearches();
});

$('#search-button').on("click", function(event) {
    event.preventDefault();
    console.log($('#search-input').val().length)
    if ($('#search-input').val().length !== 0) {
        saveSearches();
    } else {
        alert("Please put in a movie name :)");
    }
    showSearches();
});

var top250URL = "https://imdb-api.com/en/API/Top250Movies/k_4s3kqyy2";
var top250ListEl = document.querySelector("#top250List");
var mostPopularListEl = document.querySelector("#mostPopularList");
var boxOfficeListEl = document.querySelector("#boxOfficeList");

fetch (top250URL)
    .then (function(response) {

        return response.json();
    })
    .then (function(data) {

        // console.log(data);

        for (var i = 0; i<250; i++) {

            var newListItemEl = document.createElement("li");
            var newListItem = data.items[i].fullTitle;

            newListItemEl.textContent = newListItem;
            newListItemEl.setAttribute("style", "text-decoration: underline; color: blue");
            newListItemEl.setAttribute("class", "listItem");

            top250ListEl.append(newListItemEl);
        
        }

        top250ListEl.addEventListener("click", findtop250Movie);

        function findtop250Movie (event) {

            console.log(event.target.textContent);

        }


    })


var mostPopularMoviesURL = "https://imdb-api.com/en/API/MostPopularMovies/k_4s3kqyy2";

fetch (mostPopularMoviesURL)
    .then (function(response) {

        return response.json();

    })

    .then (function(data){

        for (var i = 0; i<100; i++) {

            var newListItemEl = document.createElement("li");
            var newListItem = data.items[i].fullTitle;
            newListItemEl.textContent = newListItem;
            newListItemEl.setAttribute("style", "text-decoration: underline; color: blue");

            mostPopularListEl.append(newListItemEl);
        
        }
    })

var boxOfficeAllTimeURL = "https://imdb-api.com/en/API/BoxOfficeAllTime/k_4s3kqyy2"

fetch (boxOfficeAllTimeURL)
    .then (function(response){

        return response.json();

    })

    .then (function(data) {

        for (var i = 0; i<100; i++) {

            var newListItemEl = document.createElement("li");
            var newListItem = data.items[i].title;
            newListItemEl.textContent = newListItem;
            newListItemEl.setAttribute("style", "text-decoration: underline; color: blue");

            boxOfficeListEl.append(newListItemEl);
        
        }

    })

    function displayMovieInfo() {
        $('#search-button').on('click', function() {
            window.location = './movieinfo.html';
            getMovieInfo(localStorage.getItem('searchWord'));
        })
    }
     
    function getMovieInfo(name) {
        var requestUrl='https://api.themoviedb.org/3/search/movie?api_key=67ee7262b46b2cfedff77e6b877aac65&language=en-US&query='+name+'&page=1';
        fetch(requestUrl) 
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                $('#movie-title-text').text(data.results[0].title);
                getWatchProvider(data.results[0].id);
                $('#streaming-platform-name').text('Rent from '+localStorage.getItem('rentFrom')+', Buy from ' + localStorage.getItem('buyFrom'));
            })
        
    }

    function getWatchProvider(id) {
        var requestUrl='https://api.themoviedb.org/3/movie/'+id+'/watch/providers?api_key=67ee7262b46b2cfedff77e6b877aac65';
        fetch(requestUrl)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                localStorage.setItem('rentFrom', data.results.rent[0].provider_name);
                localStorage.getItem('buyFrom', data.results.buy[0].provider_name);
            })
    
    }