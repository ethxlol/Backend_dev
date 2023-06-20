// Functions as data
// Stupid for loop that will check a million times if 2 + 2 = 4
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
	for (let i = 1; i <= 1000000; i++) {
		if (2 + 2 != 4) {
			console.log('Something has gone very wrong :( ');
		}
	}
	return `The check is complete`;
};

// Re-assigned the name of the function above because the name was to long,
// We are logging the name of the variable in the console, this is will output the name of the function inside the var
const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;
console.log(isTwoPlusTwo.name);
console.log(isTwoPlusTwo());

// Functions as parameters

// Define a function named 'addTwo' that takes a parameter 'num'(num being a placeholder)
// Return the sum of 'num' and 2
const addTwo = (num) => {
	return num + 2;
};

// Define a function named 'checkConsistentOutput' that takes two parameters 'func' and 'val'
// Create a variable 'checkA' and assign the value of 'val' plus 2
// Create a variable 'checkB' and assign the value of invoking the 'func' function with 'val'
const checkConsistentOutput = (func, val) => {
	let checkA = val + 2; // the passed param + 2
	let checkB = func(val); // the passed param + 2 as a function

	// Check if 'checkA' is equal to 'checkB'
	// If they are equal, return the result of invoking the 'func' function with 'val'
	// If they are not equal, return the string "inconsistent results"
	if (checkA === checkB) {
		return func(val);
	} else {
		return 'inconsistent results';
	}
};

// Call the 'checkConsistentOutput' function with the 'addTwo' function as 'func' and the number 5 as 'val'
console.log(checkConsistentOutput(addTwo, 5));

// // Define a function called 'addTwo' that takes a parameter 'num'
// const addTwo = (num) => {
// 	// Return the sum of 'num' and 2
// 	return num + 2;
// };

// // Define a function called 'checkConsistentOutput' that takes two parameters: 'func' and 'val'
// const checkConsistentOutput = (func, val) => {
// 	// Calculate 'checkA' by adding 2 to 'val'
// 	let checkA = val + 2;
// 	// Call the function 'func' with 'val' as the argument and assign the result to 'checkB'
// 	let checkB = func(val);

// 	// Check if 'checkA' is equal to 'checkB'
// 	if (checkA === checkB) {
// 		// If they are equal, return the result of calling 'func' with 'val' as the argument
// 		return func(val);
// 	} else {
// 		// If they are not equal, return the string "inconsistent results"
// 		return 'inconsistent results';
// 	}
// };

// // Call the 'checkConsistentOutput' function with 'addTwo' as the 'func' parameter and 5 as the 'val' parameter,
// // and log the result to the console
// console.log(checkConsistentOutput(addTwo, 5));
