// process.stdout.write('Hello world!');
// console.log('Hello world!');

// This is the same as parse int, it will ask me what my name is
process.stdout.write("What's your name?!\n");

// This part allows me to parse data to the name variable, which will be appended to the string and returned with my name attached
process.stdin.on('data', (name) => {
	process.stdout.write('Hello ' + name.toString().trim() + '!');
	process.exit();
});
