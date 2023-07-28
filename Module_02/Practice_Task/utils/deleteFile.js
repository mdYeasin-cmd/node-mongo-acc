const fs = require('fs');

exports.deleteFile = (filePath, res) => {
    fs.exists(filePath, (result) => {
        if (result) {
            fs.unlink(filePath, (err) => {
                if (err) {
                    console.log(err);
                    res.end();
                } else {
                    console.log("Your file successfully deleted");
                    res.end("Your file deleted successfully");
                }
            });
        } else {
            console.log("Your file already deleted before!!!");
            res.end();
        }
    });
};