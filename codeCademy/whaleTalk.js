// Translating human to whale talk 🐋

const input = 'turpentine and turtles'; // The input string to be processed
const vowels = ['a', 'e', 'i', 'o', 'u']; // An array of vowels for comparison
let resultArray = []; // An array to store the resulting characters

for (let i = 0; i < input.length; i++) {
	if (input[i] === 'e') {
		// Check if the current character is 'e'
		resultArray.push(input[i]); // Push 'e' to the resultArray, because a whale uses 2 e's in succession, not just 1
	}
	if (input[i] === 'u') {
		// Check if the current character is 'u'
		resultArray.push(input[i]); // Push 'u' to the resultArray, because a whale uses 2 u's in succession, not just 1
	}
	for (let j = 0; j < vowels.length; j++) {
		// Iterate through the vowels array
		if (input[i] === vowels[j]) {
			// Check if the current character matches a vowel
			resultArray.push(input[i]); // Push the matching vowel to the resultArray
		}
	}
}

console.log(resultArray); // Output the resultArray containing the processed characters
let resultString = resultArray.join('').toUpperCase(); // Join the characters in the resultArray making it a string and converting to uppercase
console.log(resultString); // Output the resultString
