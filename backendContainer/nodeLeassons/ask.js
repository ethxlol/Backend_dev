const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.question('how do you like node?', (answer) => {
	console.log(`your answer: ${answer}`);
	process.exit();
});

/*
This code imports Node.js's 'readline' module, 
which provides an interface for reading data from a readable stream (like the standard input) and writing to a writable stream (like the standard output). 

The code then creates a readline interface, 'rl', 
with the standard input (keyboard) as the input stream and the standard output (console) as the output stream.

Using this interface, the code prompts the user with the question 'how do you like node?'. 
Once the user provides an answer by typing it and pressing Enter, 
the code captures their answer and logs it back to the console with a prefix 'your answer: ' using the callback function from the question.
*/
