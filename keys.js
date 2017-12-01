console.log('Here You Go!');

//Twitter

function twitter() {

    var twitterKeys = {
        consumer_key: 'aL1ICCT1UdNJzxPaanSSTckXz',
        consumer_secret: 'RxBSxsxXDuSOhEPdqSUESGXQboPyHPBhrB1I6R9FebZRZl468m',
        access_token_key: '	935881270109843463-hKiLdtvbAFnct5TykL65F7IAOFkWc43',
        access_token_secret: 'JRTf2OhjMEBWPinvSD0rpcH7GmK7B2ELzK9bEr2hVIBOb',
    }

    module.exports = twitterKeys;
}

//==========================================================================================================================================================================

//Spotify

function spotify() {

    var Spotify = require('node-spotify-api');

    var spotifyKey = new Spotify({
        id: '6869f814db454d34a34ce5fa771679fb',
        secret: 'a54eea76080c488dae14e45bcb10703e'
    });

    spotify.search({ type: 'artist', query: 'Big K.R.I.T' }, function(err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        console.log('data');
        console.log('statusCode', response && response.statusCode === 200);
    });

    module.exports = spotifyKey

}

//===========================================================================================================================================================================

//OMDB

function omdb() {
    var request = require('request');
    // request("http://www.omdbapi.com/?apikey=40e9cece&t=Blow&type=movie", function(error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode === 200); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
}
