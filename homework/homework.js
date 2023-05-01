// Get references to the input element and buttons
const input = document.getElementById('input');
const increaseBtn = document.getElementById('increase-btn');
const decreaseBtn = document.getElementById('decrease-btn');

// Initialize the value variable to 0
let value = 0;

// Function to increment the value variable
function incrementValue() {
	// Check if the value is less than 100
	if (value < 100) {
		// Increment the value variable
		value++;
		// Log the current value to the console
		console.log('Current value: ' + value);
	} else {
		// Log "Game over" to the console
		console.log('Game over');
	}
}

// Function to decrement the value variable
function decrementValue() {
	// Check if the value is greater than 0
	if (value > 0) {
		// Decrement the value variable
		value--;
		// Log the current value to the console
		console.log('Current value: ' + value);
	} else {
		// Log "Game over" to the console
		console.log('Game over');
	}
}

// Add event listeners to the increase and decrease buttons
increaseBtn.addEventListener('click', incrementValue);
decreaseBtn.addEventListener('click', decrementValue);

// Add an event listener to the input element
input.addEventListener('input', function () {
	// Parse the input value as an integer and assign it to the value variable
	value = parseInt(input.value);
	// Log the current value to the console
	console.log('Current value: ' + value);
});
