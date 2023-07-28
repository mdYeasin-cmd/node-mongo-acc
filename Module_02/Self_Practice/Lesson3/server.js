const http = require('http');

const port = 3000;
const hostname = "127.0.0.1";

const server = http.createServer((req, res) => {

    res.end("<h1> Hello Server... </h1>");
});

server.listen(port, hostname, () => {
    console.log(`Server is successfully runing on http://${hostname}:${port}`);
})