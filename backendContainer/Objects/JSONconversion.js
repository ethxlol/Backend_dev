// this is an example of JSON stringify and parsed(js), this is how we can convert them.
// so if we recieve a JSON object, that are quite hard to read we can parse it so its easier to read
// and if we would like to send some JSON object that is in JS form to a person that is not using js we can make it JSON object by stringifying it

// This would have to be linked to a html to be able to read
// $.ajax({
// 	url: 'https://api.giphy.com/v1/gifs/random',
// 	type: 'GET',
// 	data: { api_key: 'JGU0rTSfjcvO8biiekVN8X2CUwqH8tYY', tag: 'squirrels', rating: 'G' },
// 	success: function (response) {
// 		console.log(response);
// 		const serialized = JSON.stringify(response);
// 		console.log(serialized);
// 		const deserialized = JSON.parse(response);
// 		console.log(deserialized);
// 	},
// });

// to read this directly inside of the debugger terminal or terminal we can use axios!
// PS: npm install axios

const axios = require('axios');

axios
	.get('https://api.giphy.com/v1/gifs/random', {
		params: {
			api_key: 'JGU0rTSfjcvO8biiekVN8X2CUwqH8tYY',
			tag: 'squirrels',
			rating: 'G',
		},
	})
	.then((response) => {
		console.log(response.data);
		const serialized = JSON.stringify(response.data);
		console.log(serialized);
		const deserialized = JSON.parse(serialized);
		console.log(deserialized);
	})
	.catch((error) => {
		console.error(error);
	});
