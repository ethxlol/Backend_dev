console.log(process.pid); // This is the process id
console.log(process.versions.node); // This is the version of node currently
console.log(process.argv); // This will show an array, the first array is the directory of node itself, then the second is the path to the file executed, argv is the argument vector

// const [, , firstName, lastName] = process.argv; // So we are working this as we would a normal array, the two first values in the array is the path to node and the current module working
// The third and fourth are predetermined by us to be first and last name, so to get this template literal string to make sense we would in the terminal write node gobalProcess emil nordheim
// console.log(`Your name is: ${firstName} ${lastName}`); // Output: Your name is: Emil Nordheim

const grab = (flag) => {
	let indexAfterFlag = process.argv.indexOf(flag) + 1;
	return process.argv[indexAfterFlag];
};

const greeting = grab('--greeting');
const user = grab('--user');

console.log(`${greeting} ${user}`);
