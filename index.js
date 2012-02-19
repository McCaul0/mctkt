var http = require ('http');
var say;

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
        response.end();
    
}).listen(80);

console.log('Server is running on port 80');
