let story =
	'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

// Making the story words into an array, the split() will always return an array
// The split is preformed at each space character so that the whole word is indexed and not just the letter
let storyWords = story.split(' ');
let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';
// console.log(storyWords)
// We are making a counter that will check how many string elements that are in the variable story
let count = 0;
storyWords.forEach(() => {
	count++;
});
console.log(count);

// Filtering out the world literally from the string
// We are doing this by re-declaring the storyWords and return all words that are not = unnecessaryWord
storyWords = storyWords.filter((word) => {
	return word !== unnecessaryWord;
});

// we are using the map method to spellcheck the string elements in the misspelledWords variable
// The if statement takes care of this.
storyWords = storyWords.map((word) => {
	if (word === misspelledWord) {
		return 'beautiful';
	} else {
		return word;
	}
});
// Finding the index of the bad word in the string
let badWordIndex = storyWords.findIndex((word) => {
	return word === badWord;
});
// since we have the index of the bad word we can change it by bracket notating the array with the index
// and assign it a new variable
storyWords[78] = 'really';

// checking for words over 10 chars, if it returns false we have a word that is longer than 10 chars,
// if true then the array does not have a word longer than 10 chars
let lengthCheck = storyWords.every((word) => {
	return word.length < 10;
});

// using a forEach iterator to find the word that is to long for the array
storyWords.forEach((word) => {
	word.length > 10 && console.log(word);
});
// finding the index of the long word
let longWord = storyWords.findIndex((word) => {
	return word === 'breathtaking';
});
// changing the value of the long word by bracket noting the index of it and reassigning the value
storyWords[111] = 'dazzling';

console.log(longWord);
console.log(lengthCheck);
console.log(badWordIndex);
console.log(storyWords.join(' '));
console.log(storyWords);
