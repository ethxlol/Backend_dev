class TrafficTower {
	constructor() {
		this.airplanes = []; // Array to store registered airplanes.
	}

	requestPositions() {
		// The requestPositions method retrieves the positions of all registered airplanes.

		return this.airplanes.map((airplane) => {
			return airplane.position; // Retrieve the position of each airplane.
		});
	}
}

class Airplane {
	constructor(position, trafficTower) {
		this.position = position; // Set the initial position of the airplane.
		this.trafficTower = trafficTower; // Set the traffic tower that the airplane is registered with.
		this.trafficTower.airplanes.push(this); // Register the airplane with the traffic tower.
	}

	returnPositions() {
		// The returnPositions method of an airplane requests positions from the traffic tower.

		return this.trafficTower.requestPositions(); // Request positions of all airplanes from the traffic tower.
	}
}

// Usage example
const tower = new TrafficTower(); // Create a new TrafficTower instance.
const airplane1 = new Airplane('Position 1', tower); // Create an Airplane instance with position and register it with the traffic tower.
const airplane2 = new Airplane('Position 2', tower); // Create another Airplane instance with position and register it with the traffic tower.

console.log(tower.requestPositions()); // Output: ["Position 1", "Position 2"] - Log positions of all registered airplanes in the traffic tower.
console.log(airplane1.returnPositions()); // Output: ["Position 1", "Position 2"] - Log positions of airplane1 by requesting positions from the traffic tower.
console.log(airplane2.returnPositions()); // Output: ["Position 1", "Position 2"] - Log positions of airplane2 by requesting positions from the traffic tower.
