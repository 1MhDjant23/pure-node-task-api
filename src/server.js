import http from 'http';

const   server = http.createServer( (req, res) => {
    console.log(`User Request To ${req.method} On That Location ${req.url}`);
    res.writeHead(200, 
        {
            'content-type': 'text/html'
        })
    res.end('Hello, you have reached my server!');
} );

server.listen(8080, () => console.log("server running on Port 8080"))