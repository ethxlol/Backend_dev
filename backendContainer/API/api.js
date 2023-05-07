// this is the request made to the "giphy" api to get info
// this needs to be connected to a html file of course
// this is the XMLHttpRequest method

// var request = new XMLHttpRequest();

// starting with the get parameter, to get info
// applying the https and separating random with a ? writing the api_key= to write down my key, pasting in the key that i got from my app
// and then ive filtered it, & to separate it from the key, and then i want to look at squirrel gif's, with g rated content
// request.open(
// 	'GET',
// 	'https://api.giphy.com/v1/gifs/random?api_key=JGU0rTSfjcvO8biiekVN8X2CUwqH8tYY&tag=squirrels&rating=g'
// );

// request.onload = function (params) {
// 	var response = request.response;
// 	var parsedData = JSON.parse(response);
// 	console.log(parsedData);
// };

// request.send();

// this is the better jQuery request method

$.ajax({
	url: 'https://api.giphy.com/v1/gifs/random',
	type: 'GET',
	data: {
		api_key: 'JGU0rTSfjcvO8biiekVN8X2CUwqH8tYY',
		tag: 'squirrels',
		rating: 'G',
	},
	success: function (response) {
		console.log(response);
	},
});
