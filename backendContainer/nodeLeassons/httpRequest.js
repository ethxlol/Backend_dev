// Import required modules
const https = require('https');
const fs = require('fs');

// Define request options
const options = {
	// Target website is Wikipedia
	hostname: 'en.wikipedia.org',
	// Using HTTPS protocol standard port
	port: 443,
	// Path to the "John Wick" Wikipedia page
	path: '/wiki/John_Wick',
	// Using the GET method to retrieve the page
	method: 'GET',
};

// Initiate the request
const request = https.request(options, (res) => {
	// Variable to accumulate the received data
	let responseBody = '';

	// Set character encoding for the response
	res.setEncoding('utf-8');

	// Event listener for 'data' event: triggered when a data chunk is received.
	// This allows us to process the response in parts rather than waiting for the entire content.
	res.on('data', (chunk) => {
		// Log the size of each received chunk
		console.log('---chunk', chunk.length);
		// Append the chunk to our accumulated data
		responseBody += chunk;
	});

	// Event listener for 'end' event: triggered when the entire response has been received.
	res.on('end', () => {
		// Write the accumulated data to an HTML file
		fs.writeFile('johnWick.html', responseBody, (err) => {
			// If there's an error while writing, throw it
			if (err) {
				throw err;
			}
			// Log a success message when done
			console.log('file downloaded');
		});
	});
});

// End the request, signaling we're done sending data (if any) and the server can now process it and send a response
request.end();
