$.ajax({
	url: 'https://api.giphy.com/v1/gifs/random?api_key=JGU0rTSfjcvO8biiekVN8X2CUwqH8tYYa&rating=g',
	success: function (response) {
		console.log(response);
		if (response.data.user != null) {
			var originalUrl = response.data.user.avatar_url;
			$('body').append("<img src = '" + originalUrl + "'></img>");
		}
	},
	error: function () {
		console.log('Something went wrong!');
	},
});
