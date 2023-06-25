// Import the encryptors functions here.
const { caesarCipher, symbolCipher, reverseCipher } = require('./encryptors');

const encodeMessage = (str) => {
	return reverseCipher(symbolCipher(caesarCipher(str, 6)));
};

const decodeMessage = (str) => {
	// Use the encryptor functions here.
	return caesarCipher(symbolCipher(reverseCipher(str)), -6);
};

// User input / output.
// In order to run this with node: node super-encoder.js encode to make an encrypted message
// And to decode it its: node super-encoder.js decode

const handleInput = (userInput) => {
	const str = userInput.toString().trim();
	let output;
	if (process.argv[2] === 'encode') {
		output = encodeMessage(str);
	}
	if (process.argv[2] === 'decode') {
		output = decodeMessage(str);
	}

	process.stdout.write(output + '\n');
	process.exit();
};

// Run the program.
process.stdout.write('Enter the message you would like to encrypt...\n> ');
process.stdin.on('data', handleInput);
