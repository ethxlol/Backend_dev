// Import the HTTP module from Node.js
const http = require('http');

// Create an HTTP server
http
	.createServer((req, res) => {
		// Send a response with the text 'Hello World!'
		res.write('Hello World!');
		// Signal that the response is complete
		res.end();
	})
	// Have the server listen on port 8080
	.listen(8080);
