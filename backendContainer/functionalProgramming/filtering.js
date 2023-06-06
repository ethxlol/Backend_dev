// Functional Programming Approach with Numbers

// Title: Array Declaration
// Description: We are declaring an array that we will pass through the functions.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Title: Function Declaration
// Description: We are declaring a function that we can later pass inside the filter function to shorten the code.
const isEven = (x) => x % 2 === 0;

// Title: Using the filter() method
// Description: Declaring a new function (isEven) and using it inside the filter() method to filter even numbers from the numbers array.
const evenNumbersFilter = numbers.filter(isEven);
console.log(evenNumbersFilter);

// Title: Using the filter() method (Anonymous Function)
// Description: We can also apply the function anonymously by declaring the callback function in the filter() function itself.
console.log(numbers.filter((x) => x % 2 === 0));

/*
Title: Comparison - Functional vs. Imperative Approach
Description: Explaining the benefits of the functional approach over the imperative approach.
Functional programming allows us to specify the filtering criteria (isEven) without worrying about the internal implementation of filter().
This approach focuses on expressing how we want to transform each element using a function.
The filter() method takes care of applying the logic to each element in the array.
*/

// Imperative Approach with Numbers

// Title: Imperative Approach
// Description: Using a for loop to iterate over each element in the numbers array and manually check if it is even.
let evenNumbers = [];
for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] % 2 === 0) {
		evenNumbers.push(numbers[i]);
	}
}
console.log(evenNumbers);

// Functional Programming Approach with Words

// Title: Array Declaration
// Description: We are declaring an array of words.
const words = ['hello', 'goodbye', 'africa', 'somalia'];

/*
Title: Higher Order Function - createLengthTest
Description: We can create a higher-order function that generates length test functions.
The createLengthTest function takes a minimum length (minLength) as a parameter and returns a new function.
The returned function checks if a string's length is greater than the minimum length.
*/
const createLengthTest = (minLength) => (x) => x.length > minLength;

// Title: Using the filter() method with a Length Test Function
// Description: Applying the createLengthTest(5) function to filter words longer than 5 characters from the words array.
const longWordsHigherFunction = words.filter(createLengthTest(5));
console.log(longWordsHigherFunction);

/*
Title: Using the filter() method with a Function Expression
Description: Declaring a function (isLongerThanFive) that checks if a word's length is longer than 5 characters.
Then, using it to filter long words from the words array.
*/
const isLongerThanFive = (x) => x.length > 5;
const longWords = words.filter(isLongerThanFive);
console.log(longWords);
