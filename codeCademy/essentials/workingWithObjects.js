// Setting a simple object of spaceship with some properties

// for properties that are camelTyped we can access them using dot notations, we do not need quotations either
// for properties that contain a space and are quoted we need to use bracket notation to access them
let spaceship1 = {
	homePlanet: 'Earth',
	color: 'silver',
	'Fuel Type': 'Turbo Fuel',
	numCrew: 5,
	flightPath: ['Venus', 'Mars', 'Saturn'],
};

// Setting some variables to dot notate some of the properties of the spaceship1 object.
let crewCount = spaceship1.numCrew;
let planetArray = spaceship1.flightPath;
// Logging them to the console.
console.log(planetArray);
console.log(crewCount);

// ----------------------------------------------------------------------------------------

let spaceship = {
	'Fuel Type': 'Turbo Fuel',
	homePlanet: 'Earth',
	color: 'silver',
	'Secret Mission': 'Discover life outside of Earth.',
};

spaceship.color = 'glorious gold';
// adding a property to the object with dot notations
spaceship.numEngines = 1;
// this can also be done with bracket notations
spaceship['New Value'] = 'This is the new shiz';
// deleting a property from the object
delete spaceship['Secret Mission'];
console.log(spaceship);

// -------------------------------------------------------

let retreatMessage =
	'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Making an object and adding two methods to them
const alienShip = {
	retreat() {
		console.log(retreatMessage);
	},
	takeOff() {
		console.log('Spim... Borp... Glix... Blastoff!');
	},
};
// invoking the methods
alienShip.takeOff();
alienShip.retreat();

// ---------------------------------------------------------------------------------------------

let spaceship2 = {
	// array of objects (passengers)
	passengers: [{ name: 'John Smith' }],
	telescope: {
		yearBuilt: 2018,
		model: '91031-XLT',
		focalLength: 2032,
	},
	crew: {
		captain: {
			name: 'Sandra',
			degree: 'Computer Engineering',
			encourageTeam() {
				console.log('We got this!');
			},
			'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'],
		},
	},
	engine: {
		model: 'Nimbus2000',
	},
	nanoelectronics: {
		computer: {
			terabytes: 100,
			monitors: 'HD',
		},
		'back-up': {
			battery: 'Lithium',
			terabytes: 50,
		},
	},
};

//
let capFave = spaceship2.crew.captain['favorite foods'][0];
let firstPassenger = spaceship2.passengers[0];

// ------------------------------------------------------------------------
// Object of spaceship3
let spaceship3 = {
	'Fuel Type': 'Turbo Fuel',
	homePlanet: 'Earth',
};

// functions that will change the value of a property in the object
let greenEnergy = (spaceship3) => {
	spaceship3['Fuel Type'] = 'avocado oil';
};

// function that disables
let remotelyDisable = (obj) => {
	obj.disabled = true;
};

// invoking and calling to the console
greenEnergy(spaceship3);
remotelyDisable(spaceship3);
console.log(spaceship3);

// -------------------------------------------------------------------------------------

let spaceship4 = {
	crew: {
		captain: {
			name: 'Lily',
			degree: 'Computer Engineering',
			cheerTeam() {
				console.log('You got this!');
			},
		},
		'chief officer': {
			name: 'Dan',
			degree: 'Aerospace Engineering',
			agree() {
				console.log('I agree, captain!');
			},
		},
		medic: {
			name: 'Clementine',
			degree: 'Physics',
			announce() {
				console.log(`Jets on!`);
			},
		},
		translator: {
			name: 'Shauna',
			degree: 'Conservation Science',
			powerFuel() {
				console.log('The tank is full!');
			},
		},
	},
};

// Iterating through the crew members and logging their names
// using a for...in loop, with 'crewMember' as the placeholder for each iteration
for (let crewMember in spaceship4.crew) {
	console.log(`${crewMember}: ${spaceship4.crew[crewMember].name}`);
}

// Logging the name and degree of each crew member
// using the same for...in loop with 'crewMember' as the placeholder
for (let crewMember in spaceship4.crew) {
	console.log(
		`${spaceship4.crew[crewMember].name}: ${spaceship4.crew[crewMember].degree}`
	);
}

// -----------------------------------------------------------------------------------------------

// Intro to advanced objects

// declaring the robot object
// giving it some properties and a method to call the properties in a string using template literal
const robot = {
	model: '1E78V2',
	energyLevel: 100,

	provideInfo() {
		return `I am ${this.model} and my current energy level is ${this.energyLevel}`;
	},
};
// testing the method
console.log(robot.provideInfo()); // output: I am 1E78V2 and my current energy level is 100

// Using the prepend _ to privatize a property inside of the object

const robotPrivate = {
	_energyLevel: 100,
	recharge() {
		this._energyLevel += 30;
		console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`);
	},
};

// We are mutating the private _energyLevel property
// This is prepended with an underscore to other dev's so they know it should not be augmented
// The results make the method recharge output something that does not make sense
robotPrivate._energyLevel = 'high';
robotPrivate.recharge();

// GETTERS

const robotGetter = {
	_model: '1E78V2',
	_energyLevel: 100,
	// if statement checking if the _energyLevel is a number and returning a string containing the energy level if truthy
	// if it is falsy it will return a default string that is declared in the else statement
	get energyLevel() {
		if (typeof this._energyLevel === 'number') {
			return `My current energy level is ${this._energyLevel}`;
		} else {
			return `System malfunction: cannot retrieve energy level`;
		}
	},
};
// When we are calling a getter we do not need to add a set of () to the end
robotGetter.energyLevel;
// printing the getter to the console
console.log(robotGetter.energyLevel);

// Another example of using the getter method

const person = {
	_firstName: 'John',
	_lastName: 'Doe',
	get fullName() {
		if (this._firstName && this._lastName) {
			return `The full name: ${this._firstName} ${this._lastName}`;
		} else {
			return 'Missing a first name or a last name.';
		}
	},
};

// To call the getter method:
person.fullName; // 'John Doe'
console.log(person.fullName);

// SETTERS

const robotSetters = {
	_model: '1E78V2',
	_energyLevel: 100,
	_numOfSensors: 15,

	// Getter for the number of sensors
	// Returns the value of _numOfSensors if it is a valid number,
	// otherwise returns a message indicating that the sensors are down.
	get numOfSensors() {
		if (typeof this._numOfSensors === 'number') {
			return this._numOfSensors;
		} else {
			return 'Sensors are currently down.';
		}
	},

	// Setter for the number of sensors
	// Sets the value of _numOfSensors to the newNum if it is a valid number (greater than or equal to 0),
	// otherwise logs an error message.
	set numOfSensors(newNum) {
		if (typeof newNum === 'number' && newNum >= 0) {
			this._numOfSensors = newNum;
		} else {
			console.log('Pass in a number that is greater than or equal to 0');
		}
	},
};

// Setting the numOfSensors
robotSetters.numOfSensors = 100;
console.log(robotSetters.numOfSensors);

// Factories
// This is a factory for robots, it accepts 2 params
// model and mobile(true or false)
// It has a method that will log a string to the console.
const robotFactory = (model, mobile) => {
	return {
		model: model,
		mobile: mobile,
		beep() {
			console.log('Beep Boop');
		},
	};
};
// We are declaring a new robot called tinCan as a variable, we are setting the model to p-500 and mobile to true
const tinCan = robotFactory('P-500', true);
// we are calling the method
tinCan.beep();
// we are logging the whole "function"
console.log(robotFactory('c-3po', false));

// -----------------------------------------------------------------------------------------------------------------

// PROPERTY VALUE SHORTHAND

// This function creates and returns a new robot object with the specified model and mobility properties.
// It utilizes the property value shorthand technique for cleaner and faster code.
const robotFactory1 = (model, mobile) => {
	return {
		model, // Property value shorthand: Assigns the value of the `model` parameter as the `model` property.
		mobile, // Property value shorthand: Assigns the value of the `mobile` parameter as the `mobile` property.
		beep() {
			console.log('Beep Boop');
		},
	};
};

// To check that the property value shorthand technique worked:
const newRobot = robotFactory1('P-501', false);
console.log(newRobot.model); // Outputs: P-501
console.log(newRobot.mobile); // Outputs: false

// -------------------------------------------------------------------------------------------------------------

// DESTRUCTURED ASSIGNMENT

// Define an object named `robot` with various properties
const robotFunctionality = {
	model: '1E78V2',
	energyLevel: 100,
	functionality: {
		// Method that logs 'Beep Boop' to the console
		beep() {
			console.log('Beep Boop');
		},
		// Method that logs 'Pew Pew' to the console
		fireLaser() {
			console.log('Pew Pew');
		},
	},
};

// Destructuring assignment to extract the `functionality` property from the `robot` object
// this way we do not have to reference the robot object when we are using something within the functionality
const { functionality } = robotFunctionality;

// Call the `beep()` method on the `functionality` object, logging 'Beep Boop' to the console
functionality.beep();

// --------------------------------------------------------------------------------------------------------------

// Define an object named 'robot' with various properties.
const robotNew = {
	model: 'SAL-1000',
	mobile: true,
	sentient: false,
	armor: 'Steel-plated',
	energyLevel: 75,
};

// Retrieve an array of keys (property names) from the 'robotNew' object.
const robotKeys = Object.keys(robotNew);

console.log(robotKeys); // Output the array of keys.

// Declare a new variable named 'robotEntries' and assign it an array of arrays,
// where each inner array contains a key-value pair from the 'robotNew' object.
const robotEntries = Object.entries(robotNew);

console.log(robotEntries); // Output the array of key-value pairs.

// Declare a new variable named 'newRobot' and assign it a new object created by
// merging two objects: one with additional properties and the 'robotNew' object itself.
const nuveRobot = Object.assign(
	{ laserBlaster: true, voiceRecognition: true },
	robotNew
);

console.log(newRobot); // Output the merged object.
