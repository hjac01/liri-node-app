// var fs = require("dotenv").config();

// var keys = require("./keys.js");

var axios = require('axios');

var action = process.argv[2];
var query = process.argv[3];


function concertThis(artist) {
console.log("searching for concerts")

var queryUrl = ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")

 
// Make a request for a user with a given ID
axios.get(queryUrl)
  .then(function (response) {
    // handle success
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
function movieThis(movie) {
    var queryUrl = ("http://www.omdbapi.com/?t=" + movie + "&apikey=trilogy")
    
    axios.get(queryUrl)
    .then(function (response){
        console.log(response)
    }) 
}

switch (action) {
    case "concert-this":
        concertThis(query)
        break 

        case "movie-this":
            movieThis(query)
}