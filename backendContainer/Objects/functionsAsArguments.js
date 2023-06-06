const add = (x, y) => x + y;
const subtract = (x, y) => x - y;

// Declaring a function as a parameter, than setting it to a fixed value of x,y, in this case 2 and 3⬇️
const combine2and3 = (func) => func(2, 3);

// Using fixed methods with a fixed function⬇️
console.log(combine2and3(add));
console.log(combine2and3(subtract));
// Using anonymous function⬇️
console.log(combine2and3((x, y) => x + y));
// Using build-in methods ⬇️
console.log(combine2and3(Math.max));

const addition = (y) => (x) => x + y;
const add2 = addition('2');
const add3 = addition('3');
const add4 = addition('4');
console.log(add4);
