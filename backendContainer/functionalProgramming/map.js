const numbers = [1, 2, 3, 4, 5];

const double = (x) => x * 2;

const doubledNumbers = numbers.map(double);

console.log(doubledNumbers);

// The functional approach (⬆️) is more readable and concise compared to the imperative approach (⬇️).
// With functional programming, we focus on expressing how we want to transform each element in our array using a function,
// in this case, the `double` function. We define the logic for doubling an individual element,
// and the `map()` method takes care of applying this logic to each element in the array.
// We don't have to worry about the internal implementation of `map()` or the iteration process,
// as functional programming is more concerned with specifying the transformation operation
// rather than explicitly controlling the iteration mechanics.

const doubleNumbers = [];
for (let i = 0; i < numbers.length; i++) {
	doubleNumbers.push(numbers[i] * 2);
}
console.log(doubleNumbers);
// numbers.map((x) => x * 2); // this does nothing
// console.log(numbers.map((x) => x * 2)); // this does what we think it will do
// numbers.reverse();

// console.log(numbers);
