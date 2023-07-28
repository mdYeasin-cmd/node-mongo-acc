const fs = require('fs');

const writeFile = (res, filePath, text) => {
    fs.exists(filePath, (result) => {
        if (result) {
            console.log("This File already created here!");
            res.end();
        } else {
            fs.writeFile(filePath, text, (err) => {
                if(err) {
                    console.log(err, "this error comes form write file error!!");
                    res.end();
                } else {
                    console.log("New file successfully created!");
                    res.end();
                }
            });
        }
    });
};

module.exports = { writeFile };