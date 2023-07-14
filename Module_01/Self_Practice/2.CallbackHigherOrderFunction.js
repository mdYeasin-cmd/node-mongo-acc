// // callback and higher order function
// const square = (x) => {
//     console.log(`Square of ${x}: ${x * x}`);
// };
// // square(6);
// // const a = square;
// // a(8);
// const higherOrderFunction = (number, callback) => {
//     callback(number);
// }
// higherOrderFunction(7, square);

const taskOne = (callback) => {
    console.log("Task1");
    callback();
};
const taskTwo = (callback) => {
    setTimeout(() => {
        console.log("Task2. Data is loading...");
        callback();
    }, 1000);
};
const taskThree = (callback) => {
    console.log("Task3");
    callback();
};
const taskFour = (callback) => {
    console.log("Task4");
    callback();
};
const taskFive = () => {
    console.log("Task5");
};

taskOne(() => {
    taskTwo(() => {
        taskThree(() => {
            taskFour(() => {
                taskFive();
            });
        });
    });
});

// taskTwo();
// taskThree();
// taskFour();
// taskFive();