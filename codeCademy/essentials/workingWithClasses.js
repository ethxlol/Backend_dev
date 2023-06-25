// creating a class for DOG
class Dog {
	constructor(name) {
		this._name = name;
		this._behavior = 0;
	}
	// making a getter for the name
	get name() {
		return this._name;
	}
	// making a getter for behavior
	get behavior() {
		return this._behavior;
	}
	// making a method for incrementing the behavior
	incrementBehavior() {
		this._behavior++;
	}
}

const halley = new Dog('Halley');
console.log(halley.name);
console.log(halley.behavior);
halley.incrementBehavior();
console.log(halley.name);
console.log(halley.behavior);

// -----------------------------------------------------------------------------

class Surgeon {
	// Setting the params for the constructor
	constructor(name, department) {
		// setting the properties for the constructor
		this._name = name;
		this._department = department;
		this._remainingVacationDays = 20; // adding a new property to the class
	}
	// Getter for name
	// we are using getter so that we can quick access the value of a property in the obj
	get name() {
		return this._name;
	}
	// Getter for department
	// we are using getter so that we can quick access the value of a property in the obj
	get department() {
		return this._department;
	}
	// getter for remainingVacationDays,
	// we are using getter so that we can quick access the value of a property in the obj
	get remainingVacationDays() {
		return this._remainingVacationDays;
	}
	// A method that will -1 vacation day from the remainingVacationDays variable
	takeVacationDays(daysOff) {
		this._remainingVacationDays -= daysOff;
	}
}
// Creating instances of the class (i.e making some objects from the class containing info about surgeons with the class as a template)
const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');
const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');
surgeonRomero.takeVacationDays(1); // This is how we use the method that will take vacationDays from the obj
console.log(surgeonRomero.name); // this is how we use the name getter
console.log(surgeonRomero.department); // this is how we use the department getter
console.log(surgeonRomero.remainingVacationDays); // this is how we use the remainingVacationDays getter

// --------------------------------------------------------------------------------------------------------------------------------------------
// Inheritance

// Parent class that will be used to inherit to other subclasses(children)
class HospitalEmployee {
	constructor(name) {
		this._name = name;
		this._remainingVacationDays = 20;
	}
	get name() {
		return this._name;
	}
	get remainingVacationDays() {
		return this._remainingVacationDays;
	}
	takeVacationDays(daysOff) {
		this._remainingVacationDays -= daysOff;
	}
	// A static method that will generate a random int between 0-10000
	// Static methods cannot be called on instances
	static generatePassword() {
		return Math.floor(Math.random() * 10000);
	}
}

// Creating a child class(subclass) that is inheriting from the parent HospitalEmployee
// We are also appending a class specific property of _certifications
class Nurse extends HospitalEmployee {
	constructor(name, certifications) {
		// The super is to inherit the properties from the parent
		super(name);
		// This is the class specific property added
		this._certifications = certifications;
	}
	// Getter for this._certifications
	get certifications() {
		return this._certifications;
	}
	// Class specific method that will push a new certification to the _certifications property value array
	addCertification(newCertification) {
		this._certifications.push(newCertification);
	}
}
// We are creating a new instance of nurse with the name, and we are setting the values of certifications in an array
const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);
// calling the new instance to the console
console.log(nurseOlynyk);
// Calling the method on the obj
nurseOlynyk.addCertification('Genetics');
// Logging the results of the new certifications array
console.log(nurseOlynyk.certifications); // Getter
// Calling the inherited method from the parent to the child on the new obj
nurseOlynyk.takeVacationDays(5);
// Logging the new value of vacation days to the console
console.log(nurseOlynyk.remainingVacationDays); // Getter
console.log(HospitalEmployee.generatePassword());
