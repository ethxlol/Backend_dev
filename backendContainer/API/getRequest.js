// so what we are doing here is getting a request from the api and using the console we are getting the data

$.ajax({
	url: 'https://api.giphy.com/v1/gifs/random?api_key=JGU0rTSfjcvO8biiekVN8X2CUwqH8tYY',

	// here we are adding the url to the browser, so the gif in this instance, i also added some margin to make a padding between the files
	// added the caption of the gif under the element as well so its easier to distinguish between them
	success: function (response) {
		console.log(response);
		var originalUrl = response.data.images.original.url;
		var caption = response.data.title;
		$('body').append(
			"<figure style='padding: 10px'><img src='" +
				originalUrl +
				"'><figcaption>" +
				caption +
				'</figcaption></figure>'
		);
	},
});

$.ajax({
	url: 'https://api.giphy.com/v1/gifs/random',
	type: 'GET',
	data: {
		api_key: 'JGU0rTSfjcvO8biiekVN8X2CUwqH8tYY',
		tag: 'squirrels',
		rating: 'G',
	},

	// here we are appending the avatar of the creator of the data (gif in this case) in the browser
	// also added caption which is containing the user name of the creator
	success: function (response) {
		console.log(response);
		if (response.data.user != null) {
			var originalUrl = response.data.user.avatar_url;
			var caption = response.data.user.username;
			$('body').append(
				"<figure><img src='" +
					originalUrl +
					"'><figcaption>" +
					caption +
					'</figcaption></figure>'
			);
		}
	},
});
