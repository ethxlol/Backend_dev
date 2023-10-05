const fs = require('fs');
const path = require('path');

// SYNCHRONOUS FILE OPERATIONS:
// ---------------------------
// 1. Write 'text' into 'example.txt' synchronously.
// 2. Read the contents of 'example.txt' synchronously.
// 3. Append '$' to the read data.
// 4. Log the modified data.

// writeFile(filename, data, callback)

// fs.writeFileSync('example.txt', 'text');
// let data = fs.readFileSync('example.txt');
// data = data + '$';
// console.log(data);

// ASYNCHRONOUS FILE OPERATIONS:
// ----------------------------
// Using async operations is advantageous for non-blocking I/O operations, especially for large files or
// when performing many file operations simultaneously, as they prevent the main thread from being blocked.
//
// 1. Asynchronously write 'fast' into 'example.txt'.
// 2. Once the writing is done, asynchronously read the contents of 'example.txt'.
// 3. Append '$' to the read data.
// 4. Log the modified data.

// fs.writeFile('example.txt', 'fast', (err) => {
// 	if (err) throw err; // Handle any potential write errors
// 	fs.readFile('example.txt', (err, data) => {
// 		if (fs.existsSync('example.txt')) throw err; // Handle any potential read errors
// 		data = data + '$';
// 		console.log(data);
// 	});
// });

// Check if the file already exists
if (fs.existsSync('exampless.txt')) {
	throw new Error('File already exists! Not overwriting.');
} else {
	fs.writeFile('exampless.txt', 'farts', { flag: 'wx' }, (err) => {
		if (err) throw err;
		console.log(`File written successfully to ${path.basename(__dirname)}`);
	});
}
