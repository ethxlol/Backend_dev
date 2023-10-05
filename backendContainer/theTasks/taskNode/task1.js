// Standard output for a number between 0 and 10
process.stdout.write(
	'Give us a numeric symbol thwarting from nill till over 9 \n'
);

// Function for inputting the numbers
process.stdin.on('data', (number) => {
	const n = parseInt(number);
	if (n < 0 || n > 10) {
		process.stdout.write('Art thou a fool?! \n\n');
		// process.exit();
	}
	if (n == 7) {
		process.stdout.write("Oh! By the beard of Zeuz! You've done it! Huzzah!");
		process.exit();
	} else {
		process.stdout.write('Tsk Tsk! Encore!');
	}
});
