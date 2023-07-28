const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer((req, res) => {

    if(req.url === "/") {
        // fs.readFile('data.txt', (err, data) => {
        //     if(err) {
        //         res.write('Failed To Read Data!!!');
        //         res.end();
        //     } else {
        //         res.write(data);
        //         res.end();
        //     }
        // })

        // const data = fs.readFileSync('data.txt');
        // res.write(data);
        // res.end();

        fs.writeFile('new_data.txt', 'Hello, I am written from nodejs file system module (New file)', (err) => {
            if(err) {
                res.write("Data failed to write here!!!");
                res.end();
            } else {
                res.write("Data succesfully written!!!");
                res.end();
            }
        })
    }

// ====================================

    // const address_url = "http://localhost:3000/contact?name=yeasin&country=bangladesh";
    // // const address_url = "http://localhost:3000/contact/23";

    // const parsedUrl = url.parse(address_url, true);
    // const queryObject = parsedUrl.hostname;

    // console.log(queryObject);

    // if(req.url === "/") {
    //     res.writeHead(200, { "Content-Type": "application/json" });
    //     res.write(JSON.stringify({
    //         course: "ACC"
    //     }));
    //     res.end();
    // }
    // if(req.url === "/contact") {
    //     res.writeHead(200, { "Content-Type": "text/html" });
    //     res.write(`<h1> This is contact page </h1>`);
    //     res.end();
    // };
    // if(req.url === "/about-us") {
    //     res.writeHead(200, { "Content-Type": "text/html" });
    //     res.write(`<h1> This is about us page </h1>`);
    //     res.end();
    // };

});

const PORT = 3000;
server.listen(PORT);
console.log(`Server is running on ${PORT}`);

/* 
    ## url module
        /home
        /contact
        /user/:id
        /user?name=yeasin&country=bangladesh
*/

// ===============================================================
// core module
// const http = require('http');

// third party module -> underscore
// const _ = require('underscore');

// const server = http.createServer(function (req, res) {

//     // console.log(`Raw node server is runnig!`);
//     // console.log("Hello World!");

// });

// server.listen(9000);

// var name = "Programming Hero";

// console.log(global.name);

// const sum = add(5, 3);

// console.log("Sum is", sum);
// console.log(name);

// const stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
// const nameList = _.pluck(stooges, 'age');

// console.log(nameList);