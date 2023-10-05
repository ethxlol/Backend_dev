// A simple module for counting

// Set to 0 initially
let count = 0;

// + and - counts
const inc = () => ++count;
const dec = () => --count;

// Total of counts
const getCount = () => count;

// exporting all functions
module.exports = {
	inc,
	dec,
	getCount,
};
