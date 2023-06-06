// Singleton

// The Singleton pattern ensures that there is only one instance of a class throughout the application,
// providing a global point of access to that instance.

let instance = null;

class Person {
	constructor(name, age, gender) {
		// If the instance is not yet created, create a new instance and assign the properties.
		// Otherwise, return the existing instance.
		if (!instance) {
			this.name = name;
			this.age = age;
			this.gender = gender;
			instance = this;
		} else {
			return instance;
		}
	}
}

const john = new Person('John', 32, 'male');
const barbra = new Person('Barbra', 22, 'female');

console.log(john); // Person {name: 'John', age: 32, gender: 'male'}
console.log(barbra); // Person {name: 'John', age: 32, gender: 'male'}
/*
The Singleton pattern ensures there is only one instance of the Person class throughout the application,
providing a global point of access to that instance. In this example, when creating 'john' and 'barbra',
'john' is created first and becomes the shared instance. As a result, 'barbra' will have the same
properties as 'john' since it returns the existing instance and cannot be overwritten.
*/

// Factory Pattern

// The Factory pattern is a creational pattern that allows the creation of multiple types of objects
// through a common interface or base class. It provides a centralized factory class responsible for
// creating and returning instances of different object types based on specified parameters.

class Person1 {
	constructor(name, age, gender) {
		this.name = name;
		this.age = age;
		this.gender = gender;
	}
}

class personFactory {
	createPerson(type) {
		// Based on the specified type, the factory creates and returns instances of different object types.
		// We have selected the name of the person as the type here, since the cases are the names of the persons
		switch (type) {
			case 'John':
				return new Person1('John', 22, 'Male');
			case 'Barbra':
				return new Person1('Barbra', 42, 'Female');
		}
	}
}

const factory = new personFactory();
const newPerson = factory.createPerson('John');
console.log(newPerson);

/*
The Factory pattern is a creational pattern that allows the creation of multiple types of objects
through a common interface or base class. It employs a centralized factory class, 'personFactory',
that encapsulates the creation logic and returns instances of different object types based on the
specified parameters.

In this example, the factory creates a 'Person1' object based on the specified 'type'. By calling
'factory.createPerson('John')', a new instance of 'Person1' with the name 'John', age 22, and gender
'Male' is created and returned. The factory can be extended to support additional types, such as
'Barbra', by adding the appropriate case statements within the switch statement.
*/

// Abstract Factory

// The Abstract Factory pattern allows the creation of different families of objects through
// separate factory classes, each responsible for creating objects of a specific type.

class Teacher {
	constructor(name, age, gender) {
		this.name = name;
		this.age = age;
		this.gender = gender;
	}
}

class TeacherFactory {
	createPerson(type) {
		// Based on the specified type, the factory creates and returns instances of Teacher objects.
		switch (type) {
			case 'Emil':
				return new Teacher('Emil', 32, 'male');
			case 'Renate':
				return new Teacher('Renate', 41, 'female');
		}
	}
}

class Student {
	constructor(name, age, gender) {
		this.name = name;
		this.age = age;
		this.gender = gender;
	}
}

class StudentFactory {
	createPerson(type) {
		// Based on the specified type, the factory creates and returns instances of Student objects.
		switch (type) {
			case 'Bent':
				return new Student('Bent', 58, 'male');
			case 'Ronny':
				return new Student('Ronny', 49, 'male');
		}
	}
}

const teacherFactory = new TeacherFactory();
const studentFactory = new StudentFactory();

const peopleFactory = (type, model) => {
	switch (type) {
		case 'teacher':
			return teacherFactory.createPerson(model);
		case 'student':
			return studentFactory.createPerson(model);
	}
};

const emil = peopleFactory('teacher', 'Emil');
console.log(emil);
/*
The Abstract Family pattern allows the creation of different families of objects through separate
factory classes, each responsible for creating objects of a specific type.

In this example, we have two classes: Teacher and Student, representing different types of persons
in an abstract family. We also have two corresponding factory classes: TeacherFactory and
StudentFactory. Each factory is responsible for creating instances of its respective object type.

The TeacherFactory creates Teacher objects based on the specified type, such as 'Emil' or 'Renate'.
Similarly, the StudentFactory creates Student objects based on the specified type, such as 'Bent' or 'Ronny'.

The peopleFactory function acts as a centralized factory, accepting a type and model parameter. Based
on the specified type ('teacher' or 'student'), it delegates the object creation to the appropriate
factory (teacherFactory or studentFactory) and returns the created object.

In this example, by calling 'peopleFactory('teacher', 'Emil')', a new instance of Teacher with the
name 'Emil', age 32, and gender 'male' is created and returned, as defined by the TeacherFactory.

The Abstract Family pattern allows for easy extension by adding new classes and factory implementations
for different types of persons, without modifying the existing code. It promotes code reusability and
maintainability by separating object creation logic into dedicated factory classes.
*/
