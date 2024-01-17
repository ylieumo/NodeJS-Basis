const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World!\n');
// });

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1 style="color: red">Hello World!</h1>');
    res.write('<p>I  kind of wonder what else we can send...</p>');
    res.write("I have a familly of 10");
    res.end();
});

// server.get("/familly"(req, res) => {
//     res.send("I have a familly of ");
// });

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

