const http = require('http');
const fs = require('fs');
const { readFile } = require('./utils/readFile');
const { writeFile } = require('./utils/writeFile');
const { appendFile } = require('./utils/appendFile');
const { deleteFile } = require('./utils/deleteFile');

const PORT = process.env.PORT || 3000;
const hostname = "127.0.0.1";

const server = http.createServer((req, res) => {

    if (req.url === "/") {

        readFile(res, './views/index.html', 200, "text/html");

    } else if (req.url === "/read") {

        readFile(res, './first.txt', 200, 'text/plain');

    } else if (req.url === "/write") {
        
        readFile(res, './first.txt', 200, 'text/plain');
        writeFile(res, './hi.txt', '');

    } else if(req.url === "/append") {
        
        appendFile('./hello.txt', "Hello I'm Yeasin", res);

    } else if(req.url === "/delete") {
        
        deleteFile('./second.txt', res);

    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write(`<h1> 404 Not found any page!!! </h1>`);
        res.end();
    }

});

server.listen(PORT, hostname, () => {
    console.log(`Server running at http://${hostname}:${PORT}`);
});