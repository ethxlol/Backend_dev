function extractMiddleString() {
	const text = prompt('Provide a string containing at least 5 characters.');
	let middleSubstring;
	const middleIndex = Math.floor(text.length / 2);
	if (text.length % 2 === 0) {
		middleSubstring = text.slice(middleIndex - 1, middleIndex + 1);
	} else if (text.length % 2 === 1) {
		middleSubstring = text.slice(middleIndex, middleIndex + 1);
	} else if (text.length < 5) {
		alert('Needs to be at least 5 characters!');
	}
}

function ifExample() {
	const age = parseInt(prompt('How old are you?'));
	if ((age = NaN || age < 1)) {
		if (confirm(`Are you sure that your age is ${age}?`)) {
			if (confirm('definitely?')) {
				alert('well its to low! or not a number');
			} else {
				alert('i still dont know your age');
				return age;
			}
		} else {
			alert('i still dont know your age');
			return age;
		}
	} else {
		alert(`your age is ${age}`);
	}
}
