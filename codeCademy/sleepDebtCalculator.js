// Function to calculate the number of sleep hours for a given day
// Arguments:
//   - day: A string representing the day of the week
// Returns:
//   - The number of hours of rest for the specified day, or "Invalid day" if the day is unrecognized
const getSleepHours = (day) => {
	switch (day) {
		case 'monday':
			return 8;
		case 'tuesday':
			return 5;
		case 'wednesday':
			return 7;
		case 'thursday':
			return 3;
		case 'friday':
			return 6;
		case 'saturday':
			return 1;
		case 'sunday':
			return 9;
		default:
			return 'Invalid day';
	}
};

// Function to calculate the total actual sleep hours for the week
const getActualSleepHours = () =>
	getSleepHours('monday') +
	getSleepHours('tuesday') +
	getSleepHours('wednesday') +
	getSleepHours('thursday') +
	getSleepHours('friday') +
	getSleepHours('saturday') +
	getSleepHours('sunday');

// Function to calculate the ideal sleep hours for the week based on a given daily ideal sleep hours
const getIdealSleepHours = (idealHours) => idealHours * 7;

// Function to calculate and output the sleep debt
const calculateSleepDebt = () => {
	let actualSleepHours = getActualSleepHours();
	const idealSleepHours = getIdealSleepHours(5);

	if (actualSleepHours < idealSleepHours) {
		console.log(
			`You got ${
				idealSleepHours - actualSleepHours
			} hour(s) less sleep than you needed this week. Get some rest.`
		);
	} else if (actualSleepHours === idealSleepHours) {
		console.log('You are getting the perfect amount of sleep.');
	} else {
		console.log('You are sleeping too much!');
	}
};

// Call the calculateSleepDebt function to calculate and display the sleep debt
calculateSleepDebt();
