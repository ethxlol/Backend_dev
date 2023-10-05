const { inc, dec, getCount } = require('./myModule');

inc();
inc();
inc();
dec();

console.log(getCount());

// This is a destructured version of the counter.js, we are importing a module from myModule that we made,
// This is a simple counter, with increments, decrements and a total (getCount)
