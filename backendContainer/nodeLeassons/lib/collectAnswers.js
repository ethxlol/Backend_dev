const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

module.exports = (questions, done = (f) => f) => {
	const answers = [];
	const [firstQuestion] = questions;

	const questionAnswered = (answer) => {
		answers.push(answer);
		if (answers.length < questions.length) {
			rl.question(questions[answers.length], questionAnswered);
		} else {
			done(answers);
		}
	};

	rl.question(firstQuestion, questionAnswered);
};

/*
This code uses Node.js's 'readline' module to interactively ask the 
user a series of questions via the console.

A readline interface 'rl' is initialized to communicate through the 
standard input and output streams.

An array named 'questions' contains a list of queries to be presented 
to the user.

The main function 'collectAnswers' processes the array of questions 
and gathers the user's responses. Within this function:

- An empty 'answers' array collects user responses.
- The first question is de-structured from the 'questions' array for 
  immediate use.
  
- The nested 'questionAnswered' function handles the user's answer to 
  a prompt. After recording the user's response, it checks if there are 
  more questions left to ask by comparing the length of the 'answers' 
  array to the 'questions' array.
  
  If there are more questions:
  - It uses the length of the 'answers' array as an index to retrieve 
    the next question from the 'questions' array. This ensures the questions 
    are asked in the order they appear in the 'questions' array.
    
  If all questions are answered:
  - The 'done' callback is called, passing in the collected answers.

Finally, the 'collectAnswers' function is invoked, and upon its 
completion, a callback thanks the user, displays their answers, and 
exits the process.
*/
