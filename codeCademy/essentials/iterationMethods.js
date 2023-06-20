// Iteration Methods (Iterators)

// Iterating with the forEach method
const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];
// The artists array is being iterated with the string one by one forEach element in the array,
// The reason why it is concatenated with the string is because we declared artist as a arrow function
// instructing it to do so
// So the arrow function is used as a callback function, so its called back for each element in the array
// The forEach method no in itself immutable, but it is a non-mutating method
artists.forEach((artist) => {
	console.log(artist + ' is one of my favorite artists.'); // This is concatenated with a string so it becomes a string in the output
});

// Another example of forEach iterations

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
// the function is declared with fruit as the placeholder for each element in the array
// Allowing us to log each fruit element into a string with the fruit embedded element in the template literal
fruits.forEach((fruit) => {
	console.log(`I want to eat a ${fruit}`);
});

// Iterating with the .map() method

// Create an array named 'numbers' with several numbers
const numbers = [1, 2, 3, 4, 5];

// The .map() method is used to create a new array 'squareNumbers'
// Each element in the 'numbers' array is multiplied by itself using an arrow function
const squareNumbers = numbers.map((number) => {
	return number * number;
});

// Log the 'squareNumbers' array to the console
console.log(squareNumbers);

// Iterating with the .filter() method

// Creating an array with different data values including numbers, strings, and other types
const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

// The .filter() method is used to create a new array 'onlyNumbers'
// We filter out the elements in the 'things' array that have a type strictly equal to 'number'
// This is achieved using an arrow function that takes 'thing' as a parameter (a placeholder for the elements in the array)
// The condition checks if the typeof 'thing' is strictly equal to 'number'
const onlyNumbers = things.filter((thing) => {
	return typeof thing === 'number';
});

// Log the 'onlyNumbers' array to the console, which contains only the filtered number values
console.log(onlyNumbers);

// Other examples of the .map() method iterations

const animals = [
	'Hen',
	'elephant',
	'llama',
	'leopard',
	'ostrich',
	'Whale',
	'octopus',
	'rabbit',
	'lion',
	'dog',
];

// The arrow function here takes 'animal' as a parameter, serving as a placeholder for each element in the 'animals' array.
// It iterates over each string, and passes the first index of each element in a new array 'secretMessage'
// The join method in the console log with secretMessage converts the array of letters into a concatenated string
const secretMessage = animals.map((animal) => animal[0]);

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// The arrow function here takes 'number' as a parameter, serving as a placeholder for each element in the 'bigNumbers' array.
// It iterates over each number (element in the array), divides it by 100, and stores the result in the new array 'smallNumbers'.
const smallNumbers = bigNumbers.map((number) => number / 100);

console.log(smallNumbers);

// ------------------------------------------------------------------------------------------------------------------------------------

// a short summary of all iterator methods combined into one app
const cities = [
	'Orlando',
	'Dubai',
	'Edinburgh',
	'Chennai',
	'Accra',
	'Denver',
	'Eskisehir',
	'Medellin',
	'Yokohama',
];

// array of numbers
const nums = [1, 50, 75, 200, 350, 525, 1000];

// Using the forEach method to iterate over each city in the cities array
// This method doesn't return anything (undefined) but executes the provided function for each element
cities.forEach((city) => console.log('Have you visited ' + city + '?'));

// Using the filter method to create a new array (longCities) with cities having a length greater than 7
const longCities = cities.filter((city) => city.length > 7);

// Using the reduce method to iterate over each city in the cities array and concatenate their first characters
// The initial value for the accumulator (acc) is "C"
// This method returns a single value (a string in this case)
const word = cities.reduce((acc, currVal) => {
	return acc + currVal[0];
}, 'C');

console.log(word); // Output: CODECADEMY

// Using the map method to create a new array (smallerNums) by subtracting 5 from each number in the nums array
const smallerNums = nums.map((num) => num - 5);

// Using the some method to check if there is at least one number in the nums array that is less than 0
// This method returns a boolean value (true if any element satisfies the condition, false otherwise)
nums.some((num) => num < 0);
