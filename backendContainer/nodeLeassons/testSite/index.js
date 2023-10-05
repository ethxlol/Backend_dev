// Import the 'createServer' method from the 'http' module to create an HTTP server.
// Import the 'createReadStream' method from the 'fs' (file system) module to read files.
const { createServer } = require('http');
const { createReadStream } = require('fs');

// Define a helper function 'sendFile' to send files as responses.
// This function sets the appropriate headers and then streams the file to the response.
const sendFile = (res, status, type, file) => {
	// Set the HTTP status code and content type header.
	res.writeHead(status, { 'Content-Type': type });
	// Read the specified file and pipe (stream) its content to the response.
	createReadStream(file).pipe(res);
};

// Create the HTTP server.
createServer((req, res) => {
	// Use a switch statement to determine which URL path was requested.
	switch (req.url) {
		// If the root ('/') is requested, send the 'home-page.html' file.
		case '/':
			return sendFile(res, 200, 'text/html', './home-page.html');
		// If the specific image URL path is requested, send the 'desert-mountains.jpg' image.
		case '/img/desert-mountains.jpg':
			return sendFile(res, 200, 'image/jpg', './desert-mountains.jpg');
		// If the '/styles.css' path is requested, send the 'styles.css' file.
		case '/styles.css':
			return sendFile(res, 200, 'text/css', './styles.css');
		// For any other path, send a 404 error page.
		default:
			return sendFile(res, 404, 'text/html', './404.html');
	}
	// Set the server to listen for incoming connections on port 3000.
}).listen(3000);

// Print a message to the console to indicate the server is running.
console.log('web server at 3000');
