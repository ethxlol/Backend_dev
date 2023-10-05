const fs = require('fs');

const colorData = require('./assets/colors.json'); // this is the json file we are gathering the data from

// we are making a for each loop that will append the color and hex data from the json to the directory we have set it to, in this case ./colors.md
// And if sed file directory does not exist, it will be created
colorData.colorList.forEach((c) => {
	fs.appendFile('./colors.md', `${c.color}: ${c.hex} \n`, (err) => {
		if (err) {
			throw err;
		}
	});
});

// We are appending files through the fs.append function
