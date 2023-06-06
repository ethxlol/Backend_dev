const numbers = [5, 7, 2, 40, 23, 14, 8, 4, 11];

// Section: Sum of the array
const sum = numbers.reduce((acc, x) => {
	console.log(`acc is: ${acc}`);
	console.log(`x is: ${x}`);

	return acc + x;
}, 0);

console.log(sum);

// Section: Product of the array (The product in an array context means that we multiply the array, its therefor critical that the starting value is 1 not 0)
const product = numbers.reduce((acc, x) => {
	console.log(`acc is: ${acc}`);
	console.log(`x is: ${x}`);

	return acc * x;
}, 1); // IMPORTANT the starting value NEEDS to be 1 or else we cannot multiply

console.log(product);

/*

  Section: Function Composition using Reduce

  The reduce method iterates over the functionsArray and applies each function to the accumulated value.
  Starting with an initial value of 10, it applies the functions in sequence:

  1. triple: 10 * 3 = 30
  2. addFour: 30 + 4 = 34
  3. subtractThree: 34 - 3 = 31
  4. double: 31 * 2 = 62
  5. Math.sqrt: Square root of 62 ≈ 7.87

  The final result is approximately 7.87, which is displayed using the toFixed method with 2 decimal places.
*/

// Define functions to be used in the functionsArray
const double = (x) => x * 2;
const triple = (x) => x * 3;
const addFour = (x) => x + 4;
const subtractThree = (x) => x - 3;
const squareRoot = (x) => Math.sqrt(x);

// Create an array containing the functions to be applied in sequence
const functionsArray = [triple, addFour, subtractThree, double, squareRoot];

// Use the reduce method to apply the functions in the functionsArray and accumulate the results
const value = functionsArray.reduce((acc, func) => {
	return func(acc); // Invoke the current function with the current accumulator value
}, 10);

console.log(value.toFixed(2));
