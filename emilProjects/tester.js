import readline from 'readline';

const json_fruitData = `{
	"strawberry": {
		"name": "strawberry",
		"attributes": "soft",
		"taste": "sweet"
	},
	"apple": {
		"name": "apple",
		"attributes": "hard",
		"taste": "sweet"
	}
}`;

const fruitData = JSON.parse(json_fruitData);

class FruitParent {
	constructor(fruitInfo) {
		this.name = fruitInfo.name;
		this.attributes = fruitInfo.attributes;
		this.taste = fruitInfo.taste;
	}
	infoFruit() {
		return `This fruit is ${this.taste} and when ripe it is ${this.attributes}.`;
	}
}

class Strawberry extends FruitParent {
	constructor(fruitInfo) {
		super(fruitInfo);
	}
	strawberryFunFact() {
		return 'A fun fact about strawberries is that despite their name, they are not technically berries. In botanical terms, strawberries are considered "accessory fruits" because the edible part is not derived from the plants ovaries but from the receptacle in which the ovaries are located. So, what we commonly refer to as the strawberry fruit is actually a receptacle that holds the true fruits, which are the tiny seeds on the outer surface.';
	}
}

class Apple extends FruitParent {
	constructor(fruitInfo) {
		super(fruitInfo);
	}
	appleFunFact() {
		return 'Did you know that there are more than 7,500 known varieties of apples grown around the world?';
	}
}

class FruitFactory {
	create(type, fruitInfo) {
		switch (type) {
			case 'apple':
				return new Apple(fruitInfo);
			case 'strawberry':
				return new Strawberry(fruitInfo);
			default:
				throw new Error(`Invalid fruit type ${type}`);
		}
	}
}

const fruitFactory = new FruitFactory();

// Pick a random fruit
const fruitNames = ['strawberry', 'apple'];
const randomFruitName =
	fruitNames[Math.floor(Math.random() * fruitNames.length)];

// Create a fruit object
const randomFruit = fruitFactory.create(
	randomFruitName,
	fruitData[randomFruitName]
);

// Read user input
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

// Provide a hint to the user and ask them to guess the fruit's name
rl.question(
	`Hint: ${randomFruit.infoFruit()} Guess the fruit's name: `,
	(userGuess) => {
		// Check the user's guess
		if (userGuess.toLowerCase() === randomFruit.name) {
			console.log(
				`Congratulations! You guessed it! It's a ${randomFruit.name}!`
			);
			if (randomFruit.name === 'strawberry') {
				console.log(randomFruit.strawberryFunFact());
			} else if (randomFruit.name === 'apple') {
				console.log(randomFruit.appleFunFact());
			}
		} else {
			console.log(`Sorry, that's incorrect. It was a ${randomFruit.name}.`);
		}
		rl.close();
	}
);
