const http = require('http');
const { handleReadFile } = require('./helpers/readFile');

const PORT = 3000;
const hostname = '127.0.0.1';

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        handleReadFile(res, 200, './views/index.html');
    } else if (req.url === '/about') {
        handleReadFile(res, 200, './views/about.html');
    } else if (req.url === '/contact') {
        handleReadFile(res, 200, './views/contact.html');
    } else {
        handleReadFile(res, 404, './views/error.html');
    }
});

server.listen(PORT, hostname, () => {
    console.log(`Server is running at http://${hostname}:${PORT}`);
});