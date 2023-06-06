const TextGenerator = ({ textToAdd }) => {
	// Private variable to store the text to be added
	let _textToAdd = textToAdd;

	return {
		// (Getter)
		// Generate text by combining three parts: x, _textToAdd, and y
		// Returns a function that takes 'x' as an argument and returns another function
		// The inner function takes 'y' as an argument and generates the combined text
		generateText: (x) => (y) => x + _textToAdd + y,

		// Update the value of the _textToAdd variable (Setter)
		setTextToAdd: (newTextToAdd) => (_textToAdd = newTextToAdd),
	};
};

// Create a new TextGenerator object with an initial text to be added
const tg = TextGenerator({ textToAdd: '......' });

// Generate a function 'fun' that combines 'First text', _textToAdd, and 'second text'
const fun = tg.generateText('First text');

// Output: 'First text......second text'
console.log(fun('second text'));

// Update the value of _textToAdd to '^__^'
tg.setTextToAdd('^__^');

// Output: 'First text^__^second text'
console.log(fun('second text'));
