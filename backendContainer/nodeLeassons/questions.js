// stdout = standard output, this is outputs from the program to the user, using the .write at the end will let use send data in a string
// stdin = standard input, this is inputs from the user to the program

// An array of questions to ask the user.
const questions = [
	'What is your name?',
	'What would you rather be doing?',
	'What is your preferred programming language?',
];

// The 'ask' function displays a question to the user based on the index provided.
// By default, it starts with the first question.
const ask = (i = 0) => {
	process.stdout.write(`\n\n\n ${questions[i]}`); // Display the question.
	process.stdout.write(` > `); // Provide a prompt for the user's input.
};

// Initially ask the first question.
ask();

// An array to store the user's answers.
const answers = [];

// This event listener captures the user's input.
// CALLBACK FUNCTION STARTS HERE.
process.stdin.on('data', (data) => {
	// Store the user's input (after trimming extra spaces) in the answers array.
	answers.push(data.toString().trim());

	// Check if there are more questions to ask.
	if (answers.length < questions.length) {
		ask(answers.length); // Ask the next question.
	} else {
		process.exit(); // If all questions have been asked, exit the process.
	}
});
// CALLBACK FUNCTION ENDS HERE.

// This event listener is triggered when the process is about to exit.
// CALLBACK FUNCTION STARTS HERE.
process.on('exit', () => {
	// Destructure the answers for personalized output.
	const [name, activity, lang] = answers;

	// Display a custom message based on the user's answers.
	console.log(`
	
Thank you for your answers.

Go ${activity} ${name} you can write ${lang} code later!!!
	
	`);
});
// CALLBACK FUNCTION ENDS HERE.
