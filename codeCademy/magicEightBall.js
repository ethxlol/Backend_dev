// Name input

let userName = 'Jenkins';
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

// Initializing 8'ball

const userQuestion = 'Do you like farts ?';
if (userQuestion == 'Do you like farts ?') {
	console.log(
		`Salutations, ${userName}, the fragrant bliss that is a ${
			userQuestion.split(' ')[3]
		} is wonderful to me! `
	);
} else {
	console.log('I dont!');
}
// Math.floor to round the number to an int
// Math.random()to choose a random number from 0-8 in this case
const randomNumber = Math.floor(Math.random() * 8);
// The empty let variable eightBall is to store the case or if else if statement chosen from the random number
let eightBall = '';

// Switch statement version
// Taking the randomNumber and using this to choose a random number from the cases
// Storing the case to the eightBall variable and printing it to the console
switch (randomNumber) {
	case 0:
		eightBall = 'It is certain';
		break;
	case 1:
		eightBall = 'It is decidedly so';
		break;
	case 2:
		eightBall = 'Reply hazy try again';
		break;
	case 3:
		eightBall = 'Cannot predict now';
		break;
	case 4:
		eightBall = 'Do not count on it';
		break;
	case 5:
		eightBall = 'My sources say no';
		break;
	case 6:
		eightBall = 'Outlook not so good';
		break;
	case 7:
		eightBall = 'Signs point to yes';
		break;
}

// If / Else If / Else Statement Version
// The output is chosen by the randomNumber in the if or else if statement
// This is then stored to the eightBall variable and printed to the console
if (randomNumber === 0) {
	eightBall = 'It is certain';
} else if (randomNumber === 1) {
	eightBall = 'It is decidedly so';
} else if (randomNumber === 2) {
	eightBall = 'Reply hazy try again';
} else if (randomNumber === 3) {
	eightBall = 'Cannot predict now';
} else if (randomNumber === 4) {
	eightBall = 'Do not count on it';
} else if (randomNumber === 5) {
	eightBall = 'My sources say no';
} else if (randomNumber === 6) {
	eightBall = 'Outlook not so good';
} else if (randomNumber === 7) {
	eightBall = 'Signs point to yes';
} else {
	eightBall = 'Invalid random number';
}

console.log(eightBall);
