//server to receive requests from and serve content to the client

var http = require ('http'),
	say;

http.createServer(function (request, response) {
    'use strict';
		
    if (request.headers.host === 'foo.localhost') {
			
			say = 'You asked for \"foo.localhost\"';
			
    } else if (request.headers.host === 'bar.localhost') {
			
			say = 'You asked for \"bar.localhost\"';
			
    } else {
			
			say = 'WTF?!';
			
    }
		
    response.writeHead(200, {
			'Content-Type': 'text/plain'
		});
		
		response.write(say);
		response.end(say);
    
}).listen(80);

console.log('Server is running on port 80');
