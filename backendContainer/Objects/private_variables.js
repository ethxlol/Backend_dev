const Person = ({ name, age, job }) => {
	// Private variables (i.e not directly accessible outside of the Person scope)
	let _name = name;
	let _age = age;
	let _job = job;

	return {
		// Getters - Retrieve the values of private variables
		getName: () => _name, // Returns the value of the name property
		getAge: () => _age, // Returns the value of the age property
		getJob: () => _job, // Returns the value of the job property

		// Setters - Update the values of private variables
		setJob: (newJob) => (_job = newJob), // Updates the value of the job property
		setName: (newName) => (_name = newName), // Updates the value of the name property
		setAge: (newAge) => (_age = newAge), // Updates the value of the age property
	};
};

// Create a new Person object
const me = Person({ name: 'Emil', age: 32, job: 'Developer' });
console.log(me.getName());
// me.setJob('Senior Developer');
console.log(me.getJob());
console.log(me.getAge());
me.setAge(33);
console.log(me.getAge());
