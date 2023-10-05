const path = require('path');

// we are using the path.join to join the dirname and the subdirectories to reveal the full path once logged
const dirUploads = path.join(__dirname, 'www', 'files', 'uploads');

console.log(dirUploads);

// This is the utility log, the difference is that it will show some more details like the date
const util = require('util');
util.log(path.basename(__filename));

util.log('^ The name of the current file');

const v8 = require('v8');

util.log(v8.getHeapStatistics());
