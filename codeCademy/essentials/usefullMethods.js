// Map
/* The map method is a built-in function that takes an array and applies a specified operation to each element.
   It then creates a new array containing the results of these operations.
   In this example, we have an array of temperatures in Celsius.
   We use the map method to convert each temperature to Fahrenheit by applying the conversion algorithm: (Celsius * 9/5) + 32.
   The resulting array, temperaturesInFahrenheit, holds the converted temperatures.
   Finally, we log the temperatures in Fahrenheit to the console. */

const temperaturesInCelsius = [25, 30, 18, 22, 28];
const temperaturesInFahrenheit = temperaturesInCelsius.map(
	(celsius) => (celsius * 9) / 5 + 32
);
console.log(`The temperatures in Fahrenheit are: ${temperaturesInFahrenheit}`); // Converts the array into a string
console.log(temperaturesInFahrenheit); // Shows the array and the number of elements inside

// Filter
/* The filter method is a built-in function that takes an array and returns a new array containing only the elements that pass a specific condition.
   It iterates over each element in the array and applies a callback function that determines if the element should be included in the filtered array.
   In this example, we have an array of numbers.
   We use the filter method to create a new array, evenNumbers, that contains only the even numbers from the original array.
   Finally, we log the even numbers to the console. */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log('The even numbers are:', evenNumbers);
