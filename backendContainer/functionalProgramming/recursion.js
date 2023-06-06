const double = (x) => x * 2; // Doubles the input number
const triple = (x) => x * 3; // Triples the input number
const addFour = (x) => x * 4; // Multiplies the input number by 4
const subtractThree = (x) => x - 1; // Subtracts 1 from the input number

const functionsArray = [triple, addFour, subtractThree, double, Math.sqrt];

let number = 10;

// Apply functions using forEach
// This section iterates over the functions in the functionsArray using forEach.
// Each function is applied to the current value of the number variable sequentially.
functionsArray.forEach((func) => (number = func(number)));
console.log(number);

// ------------------------------------------------------------------------------------
// Demonstrating how this can be solved with Recursion:

// Recursive function to apply functions in reverse order
const getNumber = function (index, currentResult, array) {
	if (index === 0) {
		// Base case: When index is 0, apply the function at index 0 to the current result
		return array[index](currentResult);
	}
	// Recursive case: Apply the current function to the result of calling getNumber with the previous index
	return array[index](getNumber(index - 1, currentResult, array));
};

number = getNumber(functionsArray.length - 1, 10, functionsArray);
console.log(number);

// ------------------------------------------------------------------------------------
// Function to count down from a given number to 0
const countDown = (x) => {
	if (x < 0) return; // Base case: Stop recursion when x is negative
	console.log(x);
	countDown(x - 1); // Recursive call: Decrement x for each iteration and call countDown again
};
console.log(countDown(10));

// ------------------------------------------------------------------------------------
// Function to count up from 0 to a given number
const countUp = (x, max) => {
	if (x > max) return; // Base case: Stop recursion when x exceeds the maximum value
	console.log(x);
	countUp(x + 1, max); // Recursive call: Increment x and call countUp again
};
console.log(countUp(0, 10));
