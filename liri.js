//Grabbing data from keys.js file
var keys = require("./keys.js");
// var spotifyKey = require("./keys.js");
// console.log(keys);




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
    var client = new Twitter(keys.twitter);
    var params = { screen_name: "flacomiz5", count: 20 };
    client.get('statuses/user_timeline', params, function(error, tweets, response) {

        if (!error) {
            console.log("Here are the most recent tweets");

            for (var i = 0; i < tweets.length; i++) {

                console.log("_____________________________________________");
                console.log("Tweeted on: " + tweets[i].created_at);
                console.log(tweets[i].text);

            }
        }
        // return console.log("Here are the most recent tweets from Michael");

    })
}


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
    var fs = require("fs");
    var Spotify = require('node-spotify-api');
    var spotify = new Spotify(keys.spotify);

    console.log(JSON.stringify())




    spotify
        .search({ type: 'track', query: 'Encore' })
        .then(function(response) {
            console.log(JSON.stringify(response, null, 10));
        })
        .catch(function(err) {
            console.log("test");
            console.log(err);
        });
}
