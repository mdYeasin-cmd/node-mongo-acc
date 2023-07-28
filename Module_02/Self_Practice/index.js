const fs = require('fs');
// console.log(fs);

fs.exists('demo2.txt', (result) => {
    if(result) {
        console.log("found here");
    } else {
        console.log("not found");
    }
});

// fs.writeFile('fileName', 'file text for writing in file', (err) => {});
// fs.appendFile(fileName', 'What text i want to add', (err) => {});
// fs.readFile('fileName', 'utf-8', (err, data) => {});
// fs.rename('oldFileName', 'newFileName', (err) => {});
// fs.unlink('fileName', (error) => {});
// fs.exists('fileName', (result) => {}); result = true/false

// every file name must contain "with file extension"

// synchronous function haven't any callback function. We need to synchronous function value store in a variable.