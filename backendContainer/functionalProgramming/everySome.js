// Demonstrating the usage of the every() and some() functions in JavaScript

const numbers = [2, 3, 7, 8, 10];
const isOdd = (x) => x % 2 == 0;

/* The every() function checks if every element in the array satisfies the condition
defined by the callback function (isOdd in this case).
It returns true only if every element is even (satisfies the condition), and false if at least one element does not.

The filter() function, on the other hand, creates a new array containing only the elements that satisfy the condition
defined by the callback function and returns that new array.*/
console.log(numbers.every(isOdd));

/* The some() function checks if at least one element in the array satisfies the condition
defined by the callback function (isOdd in this case).
It returns true if there is at least one even element in the array, and false otherwise.

Unlike the every() function, which requires every element to satisfy the condition,
some() is more lenient and can return true even if just one number in the array satisfies the condition. */
console.log(numbers.some(isOdd));
console.log(numbers.filter(isOdd));
/* The expression "!numbers.every(isOdd)" checks if there are numbers in the array
that do not satisfy the condition defined by the callback function (isOdd in this case).
It returns true if there are numbers that are not even in the array,
and false if every element is even.

By using the logical NOT operator (!) before the "numbers.every(isOdd)" expression,
we are negating the result. So, this statement returns true when there are numbers
that are not even in the array. */
console.log(!numbers.every(isOdd));

const employees = [
	{
		name: 'Emil',
		salary: 60000,
	},
	{
		name: 'Renate',
		salary: 55000,
	},
	{
		name: 'Odin',
		salary: 1000,
	},
	{
		name: 'Laila',
		salary: 900,
	},
];
const makesMoreThan1000 = (employees) => employees.salary >= 1000;
const result = employees.some(makesMoreThan1000);
console.log(result);
const resultFilter = employees.filter(makesMoreThan1000);
console.log(resultFilter);

const formValues = ['Emil', 'Nordheim', 'Leiknesveien213', ''];
// The isNotEmpty function checks if a string is not empty.
// It uses the logical NOT operator (!) twice to convert the string into a boolean value.
// If the string is empty (i.e., has a length of 0), the double negation will result in false.
// Otherwise, if the string is not empty, the double negation will result in true.
// So, the function returns true if the string is not empty and false if it is empty.
// because in JS an empty string is a falsy value
const isNotEmpty = (string) => !!string;
const allFieldsFilled = formValues.every(isNotEmpty);
console.log(allFieldsFilled);
