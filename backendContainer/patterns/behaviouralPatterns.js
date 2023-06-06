class Car {
	// The Car class represents a car object with a gas property and a list of actions.

	constructor(gas) {
		this.gas = gas; // Initialize the gas level of the car.
		this.actions = []; // An array to store subscribed actions.
	}

	setGasLevel(val) {
		this.gas = val; // Update the gas level of the car.
		this.notifyAll(); // Notify all subscribed actions about the gas level change.
	}

	subscribe(observer) {
		this.actions.push(observer); // Add an action to the list of subscribed actions.
	}

	unsubscribe(observer) {
		this.actions = this.actions.filter(function (el) {
			return el !== observer; // Remove an action from the list of subscribed actions.
		});
	}

	notifyAll() {
		// Notify all subscribed actions about the gas level change.

		return this.actions.forEach(
			function (el) {
				el.update(this); // Call the update method of each subscribed action.
			}.bind(this)
		);
	}
}

class Consumption {
	// The Consumption class represents an action that increases the gas level of a car.

	update(car) {
		car.gas = car.gas + 1; // Increase the gas level of the car by 1.
	}
}

var c = new Car(1); // Create a new Car object with an initial gas level of 1.
var co = new Consumption(); // Create a new Consumption object.
c.subscribe(co); // Subscribe the Consumption action to the Car object.
c.setGasLevel(11); // Set the gas level of the car to 11, triggering the Consumption action.
c.unsubscribe(co); // Unsubscribe the Consumption action from the Car object.
c.setGasLevel(10); // Set the gas level of the car to 10, without triggering any subscribed actions.

// ---------------------------------------------------------------------------------------------------------

var JSSort = function () {
	// JSSort class represents a sorting algorithm implemented in JavaScript.

	this.sort = function (data) {
		// The sort method takes an array of data as input and performs the sorting algorithm.

		return data.sort((x, y) => parseInt(x) > parseInt(y));
	};
};

function swap(arr, a, b) {
	// The swap function takes an array, and two indices a and b as input, and swaps the elements at those indices.

	let temp = arr[a];
	arr[a] = arr[b];
	arr[b] = temp;
}

var BubbleSort = function () {
	// BubbleSort class represents the bubble sort algorithm.

	this.sort = function (data) {
		// The sort method takes an array of data as input and performs the bubble sort algorithm.

		for (let i = 0; i < data.length; i++) {
			for (let j = 0; j < data.length - 1 - i; j++) {
				if (data[j] > data[j + 1]) {
					swap(data, j, j + 1); // Call the swap function to swap elements if needed.
				}
			}
		}
		return data; // Return the sorted array.
	};
};

var InsertionSort = function () {
	// InsertionSort class represents the insertion sort algorithm.

	this.sort = function (data) {
		// The sort method takes an array of data as input and performs the insertion sort algorithm.

		let temp;
		for (let i = 1; i < data.length; i++) {
			let j = i;
			temp = data[i];
			while (j > 0 && data[j - 1] > temp) {
				data[j] = data[j - 1];
				j--;
			}
			data[j] = temp;
		}
		return data; // Return the sorted array.
	};
};

var Sorter = function () {
	// Sorter class represents a sorting algorithm sorter.

	this.algorithm = new JSSort(); // Initialize the algorithm property with the JSSort algorithm by default.
};

Sorter.prototype = {
	setStrategy: function (algorithm) {
		// The setStrategy method sets the sorting algorithm strategy.

		this.algorithm = algorithm; // Set the algorithm to the provided strategy.
	},

	sort: function (data) {
		// The sort method takes an array of data as input and performs the sorting using the chosen algorithm.

		return this.algorithm.sort(data); // Call the sort method of the selected algorithm.
	},
};

function run() {
	// The run function demonstrates the sorting algorithms using sample data.

	var data = [1, 10, 24, 22, 11, 9, 2, 0];

	var bubble = new BubbleSort(); // Create an instance of BubbleSort algorithm.
	var standard = new JSSort(); // Create an instance of JSSort algorithm.
	var insert = new InsertionSort(); // Create an instance of InsertionSort algorithm.

	var sorter = new Sorter(); // Create a Sorter object.

	sorter.setStrategy(bubble); // Set the sorting strategy to BubbleSort.
	console.log('Bubble Sort Strategy: ' + sorter.sort(data)); // Sort and print the result using BubbleSort.

	sorter.setStrategy(standard); // Set the sorting strategy to JSSort.
	console.log('JavaScript Sort Strategy: ' + sorter.sort(data)); // Sort and print the result using JSSort.

	sorter.setStrategy(insert); // Set the sorting strategy to InsertionSort.
	console.log('Insertion Sort: ' + sorter.sort(data)); // Sort and print the result using InsertionSort.
}

// ------------------------------------------------------------------------------------------------------------------

class TrafficTower {
	// TrafficTower class represents a traffic control tower.

	constructor() {
		this.airplanes = []; // An array to store registered airplanes.
	}

	requestPositions() {
		// The requestPositions method retrieves the positions of all registered airplanes.

		return this.airplanes.map((airplane) => {
			return airplane.position; // Retrieve the position of each airplane.
		});
	}
}

class Airplane {
	// Airplane class represents an airplane.

	constructor(position, trafficTower) {
		// The constructor initializes an airplane with a position and a trafficTower reference.

		this.position = position; // Set the initial position of the airplane.
		this.trafficTower = trafficTower; // Set the traffic tower that the airplane is registered with.
		this.trafficTower.airplanes.push(this); // Register the airplane with the traffic tower.
	}

	requestPositions() {
		// The requestPositions method of an airplane requests positions from the traffic tower.

		return this.trafficTower.requestPositions(); // Request positions of all airplanes from the traffic tower.
	}
}
