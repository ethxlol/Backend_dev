// User choice rock/paper/scissors

// const getUserChoice = (userInput) => {
// 	userInput = userInput.toLowerCase();
// 	if (userInput == 'rock') {
// 		return userInput;
// 	} else if (userInput == 'paper') {
// 		return userInput;
// 	} else if (userInput == 'scissors') {
// 		return userInput;
// 	} else if (userInput == 'bomb') {
// 		return userInput;
// 	} else {
// 		console.log('invalid input');
// 	}
// };

// so this ⬇️ is the same as this ⬆️, although using ternary instead of writing it out

const getUserChoice = (userInput) => {
	userInput = userInput.toLowerCase();
	if (
		userInput === 'rock' ||
		userInput === 'paper' ||
		userInput === 'scissors' ||
		userInput === 'bomb'
	) {
		return userInput;
	} else {
		console.log('invalid input');
	}
};

// Computer choice rock/paper/scissors

function getComputerChoice() {
	const randomNumber = Math.floor(Math.random() * 3);

	switch (randomNumber) {
		case 0:
			return 'rock';
			break;
		case 1:
			return 'paper';
			break;
		case 2:
			return 'scissors';
			break;
	}
}

// setting the winning conditions
const determineWinner = (userChoice, computerChoice) => {
	if (userChoice === computerChoice) {
		return 'This is a tie!';
	}
	if (userChoice === 'bomb') {
		return 'Your Putin way makes you win!';
	}
	if (userChoice === 'rock') {
		if (computerChoice === 'paper') {
			return 'The computer won!';
		} else {
			return 'You won!';
		}
	}
	if (userChoice === 'paper') {
		if (computerChoice === 'scissors') {
			return 'The computer won!';
		} else {
			return 'You won!';
		}
	}
	if (userChoice === 'scissors') {
		if (computerChoice === 'rock') {
			return 'The computer won!';
		} else {
			return 'You won!';
		}
	}
};
// console.log(determineWinner("rock", "rock"));
// console.log(determineWinner("rock", "paper"));
// console.log(determineWinner("paper", "rock"));
// console.log(determineWinner("paper", "Scissors"));

const playGame = () => {
	const userChoice = getUserChoice('rock'); // This is a way you could do it also, not as dynamic though
	const computerChoice = getComputerChoice();
	console.log(`Your hand shows ${userChoice}`);
	console.log(`Computer hand shows ${computerChoice}`);
	console.log(determineWinner(userChoice, computerChoice));
};

playGame();
