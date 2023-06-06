// This is a constant variable that shows the temperature in kelvin
const kelvin = 293;

// Converting K to C and logging it to the console.
const celsius = kelvin - 273;
console.log('The c temp is: ' + celsius);

// Converting C to F using an algorithm
let fahrenheit = celsius * (9 / 5) + 32;

// Rounding the F number
fahrenheit = Math.floor(fahrenheit);

// Logging the result using a template literal to the console.
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);

// Converting C to N and logging it to console.
const newton = celsius * (33 / 100);
console.log(newton);

// Rounding the N and logging it to the console.
const newtonFloored = Math.floor(newton);
console.log(`The temperature is ${newtonFloored} Newton!`);
