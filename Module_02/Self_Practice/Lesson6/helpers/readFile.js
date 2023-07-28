const fs = require('fs');

exports.handleReadFile = (response, statusCode, filePath) => {
    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.log("Can't read ther index.html file");
            response.end();
        } else {
            response.writeHead(statusCode, { "Content-Type": "text/html" });
            response.write(data);
            response.end();
        }
    });
};