// JSON data representing fruit information
var json_fruitData = `{
  "strawberry": {
    "name": "Strawberry",
    "attributes": "soft",
    "taste": "sweet",
    "color": "red",
    "aroma": "fragrant"
  },
  "apple": {
    "name": "Apple",
    "attributes": "hard",
    "taste": "sweet",
    "color": "green/red/yellow",
    "aroma": "floral"
  },
  "orange": {
    "name": "Orange",
    "attributes": "soft",
    "taste": "sweet and tangy",
    "color": "orange",
    "aroma": "citrusy"
  },
  "banana": {
    "name": "Banana",
    "attributes": "soft",
    "taste": "sweet",
    "color": "yellow",
    "aroma": "fruity"
  }
}`;

// Parsing the JSON data to obtain a JavaScript object
const fruitData = JSON.parse(json_fruitData);

// Function to show random fruit information
function showRandomFruit() {
	// Get all the fruit names from the fruitData object
	const fruitNames = Object.keys(fruitData);

	// Select a random fruit name
	const randomFruitName =
		fruitNames[Math.floor(Math.random() * fruitNames.length)];

	// Get the fruit object for the random fruit name
	const randomFruit = fruitData[randomFruitName];

	// Display the fruit information in the output div
	const outputDiv = document.getElementById('fruitInfoOutput');
	outputDiv.innerHTML = `
    <h3>${randomFruit.name}</h3>
    <p><strong>Taste:</strong> ${randomFruit.taste}</p>
    <p><strong>Attributes:</strong> ${randomFruit.attributes}</p>
    <p><strong>Color:</strong> ${randomFruit.color}</p>
    <p><strong>Aroma:</strong> ${randomFruit.aroma}</p>
  `;
}

// Function to show the specific fun fact for each fruit
function showFunFact() {
	// Get all the fruit names from the fruitData object
	const fruitNames = Object.keys(fruitData);

	// Select a random fruit name
	const randomFruitName =
		fruitNames[Math.floor(Math.random() * fruitNames.length)];

	// Get the fruit object for the random fruit name
	const randomFruit = fruitData[randomFruitName];

	// Display the fun fact for the random fruit
	const outputDiv = document.getElementById('funFactOutput');
	outputDiv.innerHTML = `<p>${getFunFact(randomFruitName)}</p>`;
}

// Function to get the specific fun fact for a fruit
function getFunFact(fruitName) {
	switch (fruitName) {
		case 'strawberry':
			return 'Strawberries are not berries, but rather aggregate fruits.';
		case 'apple':
			return 'There are more than 7,500 known varieties of apples grown around the world.';
		case 'orange':
			return 'Oranges are an excellent source of vitamin C.';
		case 'banana':
			return 'Bananas are technically berries.';
		default:
			return 'Fun fact not available.';
	}
}

// Parent class for all fruits
class FruitParent {
	constructor(fruitInfo) {
		this.name = capitalizeFirstLetter(fruitInfo.name);
		this.attributes = fruitInfo.attributes;
		this.taste = fruitInfo.taste;
		this.color = fruitInfo.color;
		this.aroma = fruitInfo.aroma;
	}

	// Method to get the formatted information about the fruit
	infoFruit() {
		return `The ${this.name} is ${this.taste} and when ripe it is ${this.attributes}.
    Normal color(s) of this are ${this.color}.
    It has a ${this.aroma} smell to it.`;
	}
}

// Helper function to capitalize the first letter in whatever string and lowercase the rest
const capitalizeFirstLetter = (string) => {
	return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

// Child class for the Strawberry fruit, extending FruitParent (Inheritance)
class Strawberry extends FruitParent {
	constructor(fruitInfo) {
		super(fruitInfo);
	}

	// Method specific to strawberries
	strawberryFunFact() {
		console.log('Strawberries are not berries');
	}
}

// Child class for the Apple fruit, extending FruitParent (Inheritance)
class Apple extends FruitParent {
	constructor(fruitInfo) {
		super(fruitInfo);
	}

	// Method specific to apples
	appleFunFact() {
		console.log(
			'Did you know that there are more than 7,500 known varieties of apples grown around the world?'
		);
	}
}

// Factory class to create fruit objects based on type (Encapsulation)
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

// Creating an instance of the FruitFactory class
const fruitFactory = new FruitFactory();

// Creating a new Strawberry object using the fruitFactory
const newStrawberry = fruitFactory.create('strawberry', fruitData.strawberry);
console.log(newStrawberry.infoFruit());
// Unique method of strawberry
newStrawberry.strawberryFunFact();

// Creating a new Apple object using the fruitFactory
const newApple = fruitFactory.create('apple', fruitData.apple);
console.log(newApple.infoFruit());
// Unique method of Apple
newApple.appleFunFact();
