const sayHello = () => console.log('Hello');
console.log(sayHello.name);
// Functions are objects and have attributes, such as the 'name' property.
// The 'name' property holds the name of the function ('sayHello' in this case).

const add = (x, y, z) => x + y + z;
console.log(add.length);
console.log(add.toString());
// Functions also have a 'length' property that indicates the number of expected arguments.
// The 'toString()' method converts the function to a string representation.

console.log(add.call(null, 1, 2, 3));
// The 'call' method invokes the 'add' function with the provided arguments (1, 2, 3).
// The first argument, 'null' in this case, represents the value of 'this' inside the function.
// In functional programming, the 'this' value is often set to 'null' as it is not used.

console.log(add.apply(null, [1, 2, 3]));
// The 'apply' method is similar to 'call' but accepts arguments as an array.
// It invokes the 'add' function with the provided arguments (1, 2, 3) using the 'apply' method.

const args = [1, 2, 3];
console.log(add(...args));
// The spread operator (...) allows us to expand an array into individual arguments.
// In this case, it spreads the 'args' array into separate arguments (1, 2, 3) for the 'add' function.

const add1 = add.bind(null, 1);
// The 'bind' method creates a new function by fixing the value of 'x' parameter to 1.
// The first argument, 'null' in this case, sets the value of 'this' inside the function.
// The resulting function, 'add1', can be called with the remaining arguments (2, 3).
// similar to partial functions

console.log(add1(2, 3));
// The 'add1' function, created using 'bind', is called with arguments (2, 3).
// The fixed parameter 'x' has a value of 1, and the remaining arguments are passed as 'y' and 'z' respectively.
