const numbers = [8, 1, 2, 5, 9, 12];

/* Using the map method to transform each element in the array by multiplying it by 3.
The map method internally iterates over each element and applies the transformation function to it */
const tripledNumbers = numbers.map((x) => x * 3);
console.log(tripledNumbers);

/* Modifying the elements in the numbers array: adding 2 and then multiplying the result by 2.
By chaining multiple map methods, each element goes through consecutive transformations */
const modifiedNumbers = numbers.map((x) => x + 2).map((x) => x * 2);
console.log(modifiedNumbers);

/* This code filters the numbers array to extract the odd numbers.
   The callback function (x) => x % 2 == 1 is used to determine which elements should be included in the filtered result.

   The callback function checks if each element (x) in the array has a remainder of 1 when divided by 2.
   If the remainder is equal to 1, it means the number is odd and satisfies the filtering condition.

   The filter() method invokes(calls for) the callback function for each element in the array.
   It includes the element in the resulting array if the callback function returns true for that element.

   The resulting array, stored in the 'odd' variable, contains all the odd numbers from the original 'numbers' array. */
const odd = numbers.filter((x) => x % 2 == 1); // (3) [1, 5, 9]
console.log(odd);
const oddModified = numbers.map((x) => x + 2).filter((x) => x % 2 == 1); // (3) [3, 7, 11]
console.log(oddModified);

// Define functions to be used in the functionsArray
const double = (x) => x * 2;
const triple = (x) => x * 3;
const addFour = (x) => x + 4;
const subtractThree = (x) => x - 3;
// Create an array containing the functions to be applied in sequence
const functionsArray = [triple, addFour, subtractThree, double, Math.sqrt];

/*

  Reduce

The reduce method iterates over the functionsArray and applies each function to the accumulated value.
Starting with an initial value of 10, it applies the functions in sequence:

1. triple: 10 * 3 = 30
2. addFour: 30 + 4 = 34
3. subtractThree: 34 - 3 = 31
4. double: 31 * 2 = 62
5. Math.sqrt: Square root of 62 ≈ 7.874007874011811

The final result is approximately 7.87, which is displayed using the toFixed method with 2 decimal places.
*/

// Use the reduce method to apply the functions in the functionsArray and accumulate the results
const value = functionsArray.reduce((acc, func) => {
	return func(acc); // Invoke the current function with the current accumulator value
}, 10);

console.log(value.toFixed(2));
