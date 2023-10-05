const fs = require('fs');

const text = fs.readFileSync('./assets/text.txt', 'utf-8'); // Reading the text into the variable named text

console.log(text); // Logging the text to the console

// Reading asynchronously

// Reading a text file
fs.readFile('./assets/text.txt', 'utf-8', (err, text) => {
	if (err) {
		console.log(`An error has occurred: ${err}`);
		process.exit();
	}

	console.log('file contents read');
	console.log(text);
});

// Reading an image file as binary
fs.readFile('./assets/testtobecopied.jpeg.png', (err, img) => {
	if (err) {
		console.log(`An error has occurred: ${err}`);
		process.exit();
	}

	console.log('file contents read');
	console.log(img);
});
