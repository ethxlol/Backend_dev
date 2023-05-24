/* so to make an iterable object in js, we have to make an empty object first */
numbers = {};
/* then we have to assign the Symbol.iterator property with a function returning the next() function */

numbers[Symbol.iterator] = function () {
	// we start the iteration with 0 in this case
	let n = 0;
	// and end it with the done, so we are just setting them now to 0 and false
	done = false;
	return {
		next() {
			// so we are now setting the n to iterate +2 every time it iterates
			n += 2;
			// and when it reaches 10 done will be set to true, hence ending the loop
			if (n == 10) {
				done = true;
			}
			return { value: n, done: done };
			// so basically what the program is doing is this:
			// return { value: 2, done: false };
			// return { value: 4, done: false };
			// return { value: 6, done: false};
			// return { value: 8, done: false};
			// return { value: 10, done: true };
		},
	};
};
// each iteration (n) is assigned the number variable, this is so we can read each iteration.
for (let number of numbers) {
	console.log(number);
}

// this is the code without all the comments:
numbers = {};
numbers[Symbol.iterator] = function () {
	let n = 0;
	done = false;
	return {
		next() {
			n += 2;
			if (n == 10) {
				done = true;
			}
			return { value: n, done: done };
		},
	};
};

for (let number of numbers) {
	console.log(number);
}
