const { createServer } = require('http');

createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/html' }); // if the response is good, so code 200 then we are responding html content to the server
	console.log('Request Details', req);
	res.end(`
  <!DOCTYPE html>
  <html>
    <body>
      <h1>Serving HTML Text</h1>
      <p>${req.method} request made for ${req.url}</p>
    </body>
  </html>
  `); // and this is the html that will be responded to the server
}).listen(3000);

console.log('web server is listening on port 3000');
