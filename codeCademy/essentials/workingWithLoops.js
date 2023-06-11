// making a for loop that counts from 5 to 10
// so the starting point is 5 and will iterate as long as the number is less than 11
// finally appending to the counter with counter ++ (value +1 for each iteration)
for (let counter = 5; counter < 11; counter++) {
	console.log(counter);
}

// This loop counts backwards from 10 to 5
for (let counter = 10; counter >= 5; counter--) {
	console.log(counter);
}

// Looping through an array
const vacationSpots = ['Bali', 'Paris', 'Tulum'];

// So the `i` is the placeholder in this case for the index (i is commonly used as a short for the word index)
// So we set the value to 0, and the stopper is when the `vacationSpots` length is exhausted
// So it will iterate through all the elements of the `vacationSpots` array
// `i++` adds 1 to the index for each iteration
for (let i = 0; i < vacationSpots.length; i++) {
	console.log(`I would love to visit ${vacationSpots[i]}`);
}

// Working with nested loops

// Declaring two arrays, bobsFollowers and tinasFollowers
// The goal is to compare the followers of the two arrays and save them in mutualFollowers
const bobsFollowers = ['flanders', 'piper', 'jacob', 'john'];
const tinasFollowers = ['flanders', 'piper', 'sonya'];
const mutualFollowers = [];

// Iterating through bobsFollowers using i as the index placeholder
// Stopping when the array length is exhausted
for (let i = 0; i < bobsFollowers.length; i++) {
	// Nested loop to iterate through tinasFollowers using j as the index placeholder
	// Comparing the two arrays to each other
	for (let j = 0; j < tinasFollowers.length; j++) {
		// Checking if there are elements in both arrays that are the same
		if (bobsFollowers[i] === tinasFollowers[j]) {
			// Pushing the common elements from the two arrays into the mutualFollowers variable
			// Using bobsFollowers[i] since the perspective is from Bob, comparing his list to Tina's list
			mutualFollowers.push(bobsFollowers[i]);
		}
	}
}

console.log(mutualFollowers); // Output: (2) ['flanders', 'piper']

// Working with While loops

/* So we are declaring an array with cards in them
then we are declaring an empty variable currentCard.

the while loop is checking if the currentCard contains the 'spade' element,
it does so by choosing a random number between 0-3 by bracket notating to the value of currentCard:
currentCard = cards[Math.floor(Math.random() * 4)], the floor is just to make it an integer.

So as long as the currentCard dont pick the number 1 which is the index for 'spade' in this instance,
the loop will run indefinitely */
const cards = ['diamond', 'spade', 'heart', 'club']; // Array of cards to be picked from
let currentCard; // empty var for the current card array to be stored to
while (currentCard !== 'spade') {
	// using the logical not operator
	currentCard = cards[Math.floor(Math.random() * 4)]; // we can think of the random numbers as a place holder for random index in this case
	console.log(currentCard); // printing it to the console.
}

// Working with do-while loops

/* Variables used in the do-while loop
cupsOfSugarNeeded represents the target number of cups of sugar needed
cupsAdded keeps track of the current number of cups added */
const cupsOfSugarNeeded = 7;
let cupsAdded = 0;

/* The do-while loop ensures that the code block is executed at least once,
regardless of the initial value of cupsOfSugarNeeded

Inside the loop, cupsAdded is incremented by 1 each time
The loop continues until cupsAdded is no longer less than cupsOfSugarNeeded */

do {
	cupsAdded++;
	console.log(`${cupsAdded} Cup(s) of sugar was added`);
} while (cupsAdded < cupsOfSugarNeeded);

// Using the break keyword
// So we are iterating through the array
const rapperArray = ["Lil' Kim", 'Jay-Z', 'Notorious B.I.G.', 'Tupac'];
for (let i = 0; i < rapperArray.length; i++) {
	console.log(rapperArray[i]); // Logging the for loop iterations... until⬇️
	// When the 2nth index is met the for loop will break because of the break at the end of this
	// And if you don't know, now you know...
	if (i >= 2) {
		console.log(
			`this is how the break keyword works... And if you don't know, now you know.`
		);
		break;
	}
}

// BONUS: another fun way to demonstrate the break keyword

// Standard for loop
for (let i = 0; i < 99; i++) {
	if (i > 2) {
		break;
	}
	// The word banana would be iterated 99 times if it were'nt for the if statement that breaks if index exceeds 2
	console.log('Banana.');
}

console.log('Orange you glad I broke out the loop!');
