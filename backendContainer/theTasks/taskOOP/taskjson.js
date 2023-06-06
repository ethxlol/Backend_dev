// Create JSON object:
// had to disable prettier for this

// This is how a real json file would look like but prettier keeps formatting it 😡
// const jsonData = {
// 	"name": "John",
// 	"age": 30,
// 	"car": null
// };
const jsonData = {
	name: 'John',
	age: 30,
	car: null,
};
// we have to use stringify to convert it from a js string to a JSON string
console.log('JSON data: ' + JSON.stringify(jsonData));

// Convert JSON to XML using json2xml()
let xmlData = json2xml(jsonData);
console.log('XML Data: ' + xmlData);
// This wont work in the debug for some reason, but working in the console of the browser

// output:
// JSON data: {"name":"John","age":30,"car":null}
// taskjson.js:20 XML Data: <name>John</name><age>30</age><car/>
