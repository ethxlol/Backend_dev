document.write('Hello world!');
var a = 5;
var b = 8;
var c = a + b;
document.writeln(a);
document.writeln(b);
document.writeln(c);

let x = 15;
let firstName = 'john';
let y = 5;
let result1 = x + y + firstName;
console.log(result1);
// so js will solve tasks from left to right, the result of result1 will add the numbers together and then the firstName (20john)
// so it converted it after the numbers where outputted into string
// the result from result2 will output the name and then the numbers but not added together (john155) now it will convert it before the numbers are added, making it a string before it can be converted
let result2 = firstName + x + y;
console.log(result2);

let _x;
_x = 5;
_x = 'john';
console.log(_x);

// we are chaning the exponent for the numbers by using the e inside of the numbers,
// for ex value we are adding 5x0 to the number 56: 5600000
// for yh we are adding 5 decimal points to the number 56: 0.00056
let ex = 56e5;
let yh = 56e-5;
console.log(ex, yh);

// analyzing the variables below we find that xe = 55 (number)
let xe = 55;
// x2 = NaN
let x2 = xe / 'text';
// x3 = infinity                                                                                       ,
let x3 = xe / 0;
console.log(x3);
console.log(x2);

// we are declaring 8 as variable a1, multiplying it by 2 and subtracting 7 from the value, resulting in 9
let a1 = 8;
a1 *= 2;
a1 -= 7;
console.log(a1);

let a2 = (!(1 + 2 == 3) && !(2 + 3 > 4)) === (!(1 + 2 == 3) || !(2 + 3 > 4));
console.log(a2);
