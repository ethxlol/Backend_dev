// importing the counter function that we made in the myModule
const counter = require('./myModule');

// Incrementing 3 times
counter.inc();
counter.inc();
counter.inc();

// Logging the total of the counts, this should now output 3 since 0 is the initial value and we inced 3 times
console.log(counter.getCount());
