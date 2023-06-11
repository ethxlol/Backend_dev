const input = 'I enjoy the tangy zip... of miracle whip!';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

for (let i = 0; i < input.length; i++) {
	for (let j = 0; j < vowels.length; j++) {
		if (input[i] === vowels[j]) {
			resultArray.push(input[i]);
			console.log(resultArray);
		}
		// console.log(`j is ${j}`);
	}
	// console.log(`i is ${i}`);
}
