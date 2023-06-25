// CaesarCipher will take the amount passed in the call and + it to a char, so if caesar 1 emil it will be fnjm (because e+1 = f and m+1=n and i+1=j and l+1=m)
const caesarCipher = (str, amount = 0) => {
	if (amount < 0) {
		return caesarCipher(str, amount + 26);
	}
	let output = '';
	for (let i = 0; i < str.length; i++) {
		let char = str[i];
		if (char.match(/[a-z]/i)) {
			let code = str.charCodeAt(i);
			if (code >= 65 && code <= 90) {
				char = String.fromCharCode(((code - 65 + amount) % 26) + 65);
			} else if (code >= 97 && code <= 122) {
				char = String.fromCharCode(((code - 97 + amount) % 26) + 97);
			}
		}
		output += char;
	}
	return output;
};
// symbolCipher is letters hardcoded to match a symbol
const symbolCipher = (str) => {
	const symbols = {
		i: '!',
		'!': 'i',
		l: '1',
		1: 'l',
		s: '$',
		$: 's',
		o: '0',
		0: 'o',
		a: '@',
		'@': 'a',
		e: '3',
		3: 'e',
		b: '6',
		6: 'b',
	};

	let output = '';
	for (let i = 0; i < str.length; i++) {
		let char = str.toLowerCase()[i];

		if (symbols[char]) {
			output += symbols[char];
		} else {
			output += char;
		}
	}
	return output;
};
// ReverseCipher will take the passed elements and reverse it so emil = lime
const reverseCipher = (sentence) => {
	let words = sentence.split(' ');
	for (let i = 0; i < words.length; i++) {
		words[i] = words[i].split('').reverse().join('');
	}
	return words.join(' ');
};

// BinaryCipher takes a charCode and converts it into a binary representation of the charCode based on ASCII
const binaryCipher = (str) => {
	let binaryString = '';

	for (let i = 0; i < str.length; i++) {
		const charCode = str.charCodeAt(i);
		const binaryCode = charCode.toString(2); // Convert character code to binary string
		binaryString += binaryCode + ' '; // Space separator between binary codes
	}

	return binaryString.trim(); // Remove trailing space
};

module.exports = {
	caesarCipher,
	symbolCipher,
	reverseCipher,
	binaryCipher,
};
