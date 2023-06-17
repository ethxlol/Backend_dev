const animals = [
	'hippo',
	'tiger',
	'lion',
	'seal',
	'cheetah',
	'monkey',
	'salamander',
	'elephant',
];

// Using the findIndex method to search for the index of the element "elephant" in the animals array.
const foundAnimal = animals.findIndex((animal) => {
	return animal === 'elephant';
});

console.log(foundAnimal); // Outputs the index of "elephant" in the array

// Declaring a variable with an arrow function that iterates through the animals array using the findIndex method.
// The placeholder "animal" represents the element currently being iterated.

// We check if the first character of the current animal name is 's' by using `animal[0] === 's'`.
// If the condition is met (i.e., the animal name starts with 's'), the expression `true` is returned.
// Otherwise, if the condition is not met, the expression `false` is returned.
const startsWithS = animals.findIndex((animal) => {
	return animal[0] === 's' ? true : false;
});

console.log(startsWithS); // Outputs the index of the first element in the array starting with the letter 's'

// Working with reduce method

const newNumbers = [1, 3, 5, 7];

// Using the reduce method on the newNumbers array to calculate the sum of its elements.
// The reduce method takes a callback function and an initial value for the accumulator.

const newSum = newNumbers.reduce((accumulator, currentValue) => {
	console.log('The value of accumulator: ', accumulator);
	console.log('The value of currentValue: ', currentValue);

	// The callback function takes two arguments, `accumulator` and `currentValue`.
	// The `accumulator` holds the accumulated value as the reduce method iterates through the array.
	// The `currentValue` represents the current element being processed.

	// Logging the value of the accumulator and currentValue for each iteration.

	return accumulator + currentValue;

	// The callback function returns the updated value of the accumulator after performing the addition
	// of the current element with the accumulated value.
}, 10);

// The reduce method also accepts an initial value for the accumulator.
// In this case, the initial value is 10, which means the first iteration will add 10 to the first element of the array.

console.log(newSum); // Outputs the final sum of the newNumbers array elements.
