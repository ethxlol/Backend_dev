// the require function is used to load modules
const path = require('path');

console.log(`The file name is ${path.basename(__filename)}`); // this will show us the filename because we are using the path.basename
console.log(__dirname); // showing the dir we are using
console.log(__filename); // showing the dir plus the file we are using
