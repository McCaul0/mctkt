var http = require ('http');

http.createServer(function (request, response) {
    if (request.headers.host === 'foo.localhost') {
        response.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        response.write('You asked for \"foo.localhost\"');
        response.end();
    } else if (request.headers.host === 'bar.localhost') {
        response.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        response.write('You asked for \"bar.localhost\"');
        response.end();
    } else {
        response.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        response.write('WTF?!');
        response.end();
        
    }
    
}).listen(80);

console.log('Server is running on port 80');