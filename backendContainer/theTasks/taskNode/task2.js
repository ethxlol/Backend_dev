const bubble = require('bubblesort'); // does not work now because the task wanted me to uninstall bubblesort after i was done
// npm install bubblesort

const ascOutput = bubble([0, 5, 2, 9, 10]);
console.log(`Asc : ${ascOutput}`);

function comparator(a, b) {
	return b - a;
}
const decOutput = bubble([5, 2, 2, 6, 1, 3], comparator);
console.log(`dec ${decOutput}`);
