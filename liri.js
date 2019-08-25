var fs = require("dotenv").config();

var keys = require("./keys.js");

var axios = require('axios');

var action = process.argv[2];
var query = process.argv[3];


function concertThis(artist) {
console.log("searching for concerts")

var queryUrl = ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")

 

axios.get(queryUrl)
  .then(function (response) {
    
    // console.log(response.data);
    for (var i = 0; i < response.data.length; i++) {
        console.log("----------");
        console.log(response.data[i].venue.name);
        console.log(response.data[i].venue.city);
        console.log(response.data[i].venue.country);
        console.log(response.data[i].datetime);
        console.log("----------");
        
    }

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed 
  });
}

function spotifyThis(song) {
    if (!song) {
        return console.log(`Lisen to The Sign by Ace of Base!`);
    }    
    // console.log("searching for songs")
var Spotify = require('node-spotify-api');    
var spotify = new Spotify(keys.spotify);

song = query; 
spotify.search({ type:'track', query: song }, function(err, data) {

    if ( err ) {
        console.log('Error occurred: ' + err);
        return;  //from spotify npm docs
    }
    else{
    var songInfo = data.tracks.items[0];
    var songResult = console.log(songInfo.artists[0].name)
                     console.log(songInfo.name)
                     console.log(songInfo.preview_url)
                     console.log(songInfo.album.name)
    
    };
  });
    
    }



function movieThis(movie) {
   if (!movie) {
       return console.log(`If you haven't watched "Mr. Nobody," then you should: <http://www.imdb.com/title/tt0485947/`);
   }
    var queryUrl = ("http://www.omdbapi.com/?t=" + movie + "&apikey=trilogy")
    
    axios.get(queryUrl)
    .then(function (response){
        console.log(response.data)

            console.log("-----------");
            console.log(response.data.Title);
            console.log(response.data.Released);
            console.log(response.data.imdbRating);
            console.log(response.data.Country);
            console.log(response.data.Language);
            console.log(response.data.Plot);
            console.log(response.data.Actors);
            console.log("----------");
        
    }) 
    .catch(function (error) {
        
        console.log(error);
      })
      .finally(function () {
       
      });
   
      
    
}

switch (action) {
    case "concert-this":
        concertThis(query)
        break 

        case "movie-this":
            movieThis(query)
            break

            case "spotify-this":
            spotifyThis(query) 
            break
            
}