const fs = require('fs');

const readStream = fs.createReadStream('./data.txt');

readStream.on('data', chunk => {
    console.log('.................................');
    console.log(chunk);
});

readStream.on('open', () => {
    console.log('Stream is open!');
});

setTimeout(() => {
    readStream.pause();
    console.log('Streaming is pause now');
}, 10);

setTimeout(() => {
    readStream.resume();
    console.log("Streaming is resume now");
}, 8000);