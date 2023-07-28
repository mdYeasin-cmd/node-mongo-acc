const fs = require('fs');

const readFile = (res, filePath, statusCode, contentType) => {
    fs.readFile(filePath, "utf-8", (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.writeHead(statusCode, { "Content-Type": contentType });
            res.write(data);
            res.end();
        }
    });
}

module.exports = { readFile };