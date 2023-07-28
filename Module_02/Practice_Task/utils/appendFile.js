const fs = require('fs');

exports.appendFile = (filePath, appendText, res) => {
    fs.appendFile(filePath, appendText, (err) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            console.log("New text appended");
            res.end(`Successfully text appended in ${filePath}`);
        }
    })
}