// Partial application, the process of making a function with some parameters
// Then when the function refers to the next function we are able to sort what of the parameters
// we chose to use in the new one. Making it a partial of the original.

// In the example below, we are going to use this principal with an addition function that initially takes 3 params
// For the purpose of demonstration we are only going to use 2 of the params in the subsequent function

const addThree = (x, y, z) => x + y + z;
const addPartial = (x) => (y, z) => addThree(x, y, z);
const addTwo = addPartial(0);
console.log(addTwo(2, 3));
/*
In the above code, we demonstrate partial application.
The 'addThree' function adds three numbers together.
The 'addPartial' function creates a new function by providing a value for 'x',
which is then used to add 'x', 'y', and 'z' in the 'addThree' function.
The 'addTwo' function is created using 'addPartial' with 'x' value set to 0,
which adds 0 to the provided 'y' and 'z' values.
Finally, we invoke 'addTwo' with arguments 2 and 3, resulting in the sum of 0, 2, and 3, which is 5.
*/

// Another example to show the functions strength

// Function that adds three numbers together
const addition = (x, y, z) => x + y + z;

// Partial application: Fix the value of the first argument and return a new function
const partialAddition = (x) => (y, z) => addition(x, y, z);

// Currying: Break down a function with multiple arguments into a sequence of functions
const curryAdd = (x, y) => (z) => addition(x, y, z);

// Currying and partial application combined
const curryAddAll = (x) => (y) => (z) => addition(x, y, z);

// Create a partially applied function with the first argument fixed as 5
const curryAddAllPartial = curryAddAll(5);

// Create a new function with the second argument fixed as 6
const add5and6 = curryAddAllPartial(6);

// Call the function with the third argument as 7 to get the final sum
const sumAll = add5and6(7);
console.log(sumAll);

// Create a curried function with the first two arguments fixed as 5 and 6
const add5and6Curried = curryAdd(5, 6);

// Call the curried function with the third argument as 7 to get the final sum
const sumCurry = add5and6Curried(7);
console.log(sumCurry);

// Create a partially applied function with the first argument fixed as 5
const add5 = partialAddition(5);

// Call the partially applied function with the remaining two arguments, 6 and 7
const sumPartial = add5(6, 7);
console.log(sumPartial);
/* So we are declaring the function that takes 3 params and adds them together, numbers in this case,
we are then making a partial version of it additionPartial so that we can fix the x param to what we want,
in this case the number 5... Because for whatever reason we would like to add 2 other numbers with 5.
we are fixing the number 5 in the add5 variable, and we are setting the numbers to be added to 5 to 6 and 7.
Finally we are declaring a variable that shows the sum of the entire operation and logging this to the console */

/*
  - Define the employee data array.
  - Each employee object contains a name and salary.
*/
const employees = [
	{
		name: 'James',
		salary: 25000,
	},
	{
		name: 'Mathilda',
		salary: 28000,
	},
	{
		name: 'Geoffrey',
		salary: 22000,
	},
];

/*
  - Define the raise amount.
  - This value will be added to each employee's salary.
*/
const raise = 5000;

/*
  - Define the raiseObj function.
  - Takes two parameters: x (raise) and z (salary).
  - Returns the sum of raise and salary.
*/
const raiseObj = (x, z) => x + z;

/*
  - Define the raisePartial function.
  - Takes one parameter: x (raise).
  - Returns a new function that takes one parameter: z (salary).
  - The returned function applies the raiseObj function to x (raise) and z (salary).
*/
const raisePartial = (x) => (z) => raiseObj(x, z);

/*
  - Create the addRaise function by applying the raisePartial function to the raise value.
  - The addRaise function takes one parameter: z (salary).
  - It invokes raisePartial with the fixed raise value and returns a new function that adds the fixed raise to z (salary).
*/
const addRaise = raisePartial(raise);

/*
  - Calculate the new salary for each employee.
  - Use the map method to iterate over the employees array.
  - For each employee, create a new object with the updated salary using the addRaise function.
  - Spread the employee object properties using the spread operator (...) and override the salary property.
  - Store the updated employee objects in a new array called newSalary.
*/
const newSalary = employees.map((employee) => ({
	...employee,
	salary: addRaise(employee.salary),
}));

// Output the array of employee objects with the updated salaries
console.log(newSalary);
