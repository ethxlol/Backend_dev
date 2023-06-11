let secretMessage = [
	'Learning',
	'is',
	'not',
	'about',
	'what',
	'you',
	'get',
	'easily',
	'the',
	'first',
	'time,',
	'it',
	'is',
	'about',
	'what',
	'you',
	'can',
	'figure',
	'out.',
	'-2015,',
	'Chris',
	'Pine,',
	'Learn',
	'JavaScript',
];
/* Checking how many elements are in the array,
removing the last using .pop(),
checking again how many there are left
logging the array to the console */
console.log(secretMessage.length); // 24
secretMessage.pop(); // removes the last string in the array
console.log(secretMessage.length); // 23
console.log(secretMessage);

// ---------------------------------------------------------------------------------------------------------------------------

// Adding two new string elements to the array
secretMessage.push('to', 'Program'); // Adding two new string elements to the end of the array
console.log(secretMessage); // Logging updated array to the console

// Changing the word easily to the word right in the array
console.log(secretMessage.indexOf('easily')); // Checking what index the word easily has
secretMessage[7] = 'right'; // Changing the string element in the array by indexing the word we wanted to change
console.log(secretMessage); // Logging the updated array to the console

// Removing the first string element of the array
secretMessage.shift(); // Using the shift method to remove the first element of the array
console.log(secretMessage); // Logging the updated array to the console

// Adding an element to the beginning of the array
secretMessage.unshift('Programming'); // Adding the string element to the beginning of the array

// Removing multiple elements from the array and replacing it with a single one
console.log(secretMessage.indexOf('get')); // Finding the index of the first element that is to be changed
console.log(secretMessage.indexOf('time,')); // Finding the index of the last index that is to be changed
secretMessage.splice(6, 5, 'know,'); // Starting to remove from the 6nth index and doing so for the next 5 indices
// And replacing it with the new string element 'know,'
console.log(secretMessage); // Logging the updated array to the console

// Using .join(' ') to add the array into a string
console.log(secretMessage.join(' ')); // we are adding an empty string with a space inside the join method so there concatenation will separate the words
