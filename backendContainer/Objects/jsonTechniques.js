// JSON.stringify(value, replacer, spacer);

const jsonData = '{"name": "John", "age": 30, "car": null}'; // we are setting the JSON file
// console.log(jsonData);

const object = JSON.parse(jsonData); // we ar converting it to javascript
console.log(JSON.stringify(object, null, 5)); // we are converting it back to JSON but we are making it more readable with the value, replacer and spacer
const jsonString = JSON.stringify(jsonData);
console.log(jsonString);

const jsonStringData = '{"name": "John", "age": 30, "car": null}';
console.log(JSON.parse(jsonStringData));
('{"truck_json": "wheels": 18, "doors": 2, "color": "red"}');
json_truck = '"wheels": 18, "doors": 2, "color" : "red"';
