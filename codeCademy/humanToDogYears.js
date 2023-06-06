// This is my age in human years
const myAge = 32;

// This is my early age
let earlyYears = 2;

// multiplying this by 10.5 to represent the first 2 years of a dogs life
// earlyYears *= 10.5; with augmented assignment operator
earlyYears = earlyYears * 10.5;

// Removing 2 years since they are accounted for in earlyYears
let laterYears = myAge - 2;

// This will calculate my human years - 2 since they are accounted for in the earlyYears
// laterYears *= 4; with augmented assignment operator
laterYears = laterYears * 4;

// console.log(earlyYears, laterYears)

// adding my First 2 years as dog years and later years as dog years together to sum my total human age in dog years
let myAgeInDogYears = earlyYears + laterYears;

// Made my name in a variable and added the toLowerCase method to make it all lowercase when printed
let myName = 'Emil'.toLowerCase();
// console.log(myName)

// Using Template Literal syntax i wrote a sentence about my age in dog and human years with the variables.
console.log(
	`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
);
