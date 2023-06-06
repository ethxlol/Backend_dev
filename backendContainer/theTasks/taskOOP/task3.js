const priceArray = [800, 200, 100, 300, 700];

/* Task: Calculate the total price of all products in the priceArray.
   Solution should adhere to the paradigms of functional programming. */

/* The reduce function is used to iterate over each number in the array.
   The accumulator (acc) is a running total that stores the sum of prices,
   and the current value (x) represents each individual price during iteration. */

/* By starting with an initial value of 0, the reduce function ensures that
   the first price in the array is added to the accumulator. As the function
   iterates through the remaining prices, each value of 'x' is added to the
   running total in the accumulator ('acc'). The final value of 'acc' is the
   total sum of all the prices in the array. */

const sum = priceArray.reduce((acc, x) => {
	return acc + x;
}, 0);

console.log(sum);
