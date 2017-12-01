//Grabbing data from keys.js file
var twitterKey = require("./keys.js");


//Represents prompt entered into terminal, after 'node liri.js' - Options are "movie-this, spotify-this-song, my-tweets"
var action = process.argv[2];

var nodeArgs = process.argv;

var value = "";

// LOOPS THROUGH ALL THE WORDS IN THE NODE ARGUMENT 
// DO A LOOP TO GET EVERYTHING AFTER THE INDEX OF 2 NODE ARGUMENT
for (var i = 2; i < nodeArgs.length; i++) {

    if (i > 2 && i < nodeArgs.length) {

        value = value + "+" + nodeArgs[i];

    }
    else {

        value = value + nodeArgs[i];
    }
}

// SWITCH STATEMENT FOR RUNNING DIFFERENT APPS 
switch (action) {
    case 'my-tweets':
        twitter();
        break;

    case 'spotify-this-song':
        Spotify();
        break;

    case 'movie-this':
        omdb();
        break;
}

//============================================================================================================================


//TWITTER

function twitter() {
    var fs = require("fs");
    // var twitterKey = require("./keys.js");
    var Twitter = require("twitter");
    var client = new Twitter(twitterKey.twitterKeys);
    var params = { screen_name: "flacomiz5", count: 20 };
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error && response.statusCode === 200) {
            return console.log("Here are the most recent tweets from Michael");
        }
    });
};

//=============================================================================================================================================================================

//OMDB

function omdb() {
    var request = require('request');
    request("http://www.omdbapi.com/?apikey=40e9cece&t=the-punisher&type=movie", function(error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode === 200); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
    });
}

//=============================================================================================================================================================================

//SPOTIFY
function Spotify() {
    var Spotify = require('node-spotify-api');
    var spotifyKey = require("./keys.js");
    var spotify = new Spotify({
        id: '6869f814db454d34a34ce5fa771679fb',
        secret: 'a54eea76080c488dae14e45bcb10703e'
    });

    spotify
        .search({ type: 'artist', query: 'Jimi Hendrix' })
        .then(function(response) {
            console.log(response);
        })
        .catch(function(err) {
            console.log(err);
        });
}
