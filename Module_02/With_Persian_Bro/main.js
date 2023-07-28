const fs = require('fs');

// Asynchronous read
fs.readFile('input.txt', function (err, data) {
    if (err) {
        return console.error(err);
    }
    // console.log("Asynchronous read: " + data.toString());
});

// Synchronous read
var data = fs.readFileSync('input.txt');
// console.log("Synchronous read: " + data.toString());

// Asynchronous - Opening File
console.log("opening file!");
fs.open('input.txt', 'r+', function(err, fd) {
   if (err) {
      return console.error(err);
   }
//    console.log("File open successfully");    
});

console.log(fs);