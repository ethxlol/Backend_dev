// Functional Programming in JavaScript

/* OOP is an imperative paradigm of programming, meaning that we focus on how to create something rather than what the data is
  Functional programming on the other hand is a Declarative programming paradigm, this is focusing on what the data is. so instead of objects,
  we use functions to process the data.
  
  since JS is a multi-paradigm language we can combine, mix and match as we would please. The functional programming is focused on bug free code,
  while OOP can allow for a lot of bugs in the state change. I.e when we are declaring a new const to change values in the parameters of the class.
  
  When using the function programming paradigm, we are actually not creating objects that can be freely mutated when declaring new variables.
  Instead we are creating new const's over other ones that will render the program itself immutable. The side effect of that is that functional programs are more predictable,
  as there are no unexpected modifications to the object, they will be easier to test and debug.
  
  In other words we are simply creating new objects with new values with Functional programming
	
	in conclusion, it seems to me that if you have a fixed set of what should be done(operations) to things you use OOP
	and as the code evolves we are adding new things, we are adding new classes which implement existing methods and the existing are left alone.
	For Functional Programming we are adding new operations to fixed set of things, this by adding new functions to compute with existing data types
	the existing functions are left alone */

// OOP Example:
class Person {
	constructor(name, friends) {
		this.name = name;
		this.friends = friends;
	}
	isFriend(person) {
		return this.friends.includes(person);
	}
}

const personfriends1 = new Person('Bob', ['Alice', 'Charles']);
console.log(personfriends1.isFriend('Charles'));

// Functional Programming Example:
const personFriends = ['Joe', 'Carla', 'Marie']; // This is the friends list
const person = 'Joe'; // We are checking if Joe is inside of the friends list

const isFriend = function (friends, person) {
	/* This is comparing the personFriends with Person, but we are using the includes build-in method so we can add friends as a parameter that is representing personFriends
  This is just for clarity, in case the array was called something like array1, we would change the parameter the user is interacting with to friends, so its clearer what we are
  checking it against */
	return friends.includes(person);
};
console.log(isFriend(personFriends, person));

/* This is a great "real-world" example

we have John and his salary */
const employee1 = {
	name: 'John',
	salary: 60000,
};
/* And now we are making a new function that will give John a raise of 10 000$ */
const raiseAmount = 10000; // we are adding a new const here to input the raise
const updatedEmployee1 = {
	name: employee1.name + ' Smith', // we are copying the values from the original, btw John got a last name
	salary: (employee1.salary + raiseAmount).toLocaleString('en-US', {
		// toLocaleString is a super nice built-in method that will format it to the specifications that you are inputting
		style: 'currency',
		currency: 'USD',
	}), // we are copying the values from the original, and adding some more money
};
// So we log the updated information about John and his salary.
console.log(updatedEmployee1);

// But for a more direct Functional Programming version of it:
const employee = {
	name: 'John',
	salary: 60000,
};

const addLastName = (employee) => {
	const lastName = 'Smith';
	const updatedName = employee.name.includes(lastName)
		? employee.name
		: `${employee.name} ${lastName}`;

	return {
		...employee,
		name: updatedName,
	};
};

const giveRaise = (employee, amount) => {
	const updatedSalary = employee.salary + amount;
	return {
		...employee,
		salary: updatedSalary.toLocaleString('en-US', {
			// toLocaleString is a super nice built-in method that will format it to the specifications that you are inputting
			style: 'currency',
			currency: 'USD',
		}),
	};
};

const updatedEmployee = giveRaise(addLastName(employee), 10000);

console.log(updatedEmployee);

// ⬇️ This is to show what the ... does in JS, this is the same code as above but without the ...(spread) making it in essence mutable now.
// so as you can see the ... is soft copying from the original const employee ⬇️

// const employee = {
// 	name: 'John',
// 	salary: 60000,
// };

// const addLastName = (employee) => {
// 	const lastName = 'Smith';
// 	const updatedName = employee.name.includes(lastName)
// 		? employee.name
// 		: `${employee.name} ${lastName}`;

// 	const updatedEmployee = Object.assign({}, employee, { name: updatedName });

// 	return updatedEmployee;
// };

// const giveRaise = (employee, amount) => {
// 	const updatedEmployee = Object.assign({}, employee, { salary: employee.salary + amount });

// 	return updatedEmployee;
// };

// const updatedEmployee = giveRaise(addLastName(employee), 10000);

// console.log(updatedEmployee);
