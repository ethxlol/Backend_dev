const { createServer } = require('http');

createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/plain' }); // if the response is good, so code 200 then we are responding text content to the server
	res.end('Hello World'); // and this is the text that will be responded to the server
}).listen(3000);

console.log('web server is listening on port 3000');
