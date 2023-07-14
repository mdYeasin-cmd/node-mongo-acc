// Synchronous Programming
// console.log("Task1");
// console.log("Task2");
// console.log("Task3");
// console.log("Task4");
// console.log("Task5");


const taskOne = () => {
    console.log("Task1");
};

// const dataLoading = () => {
//     console.log("Task2. Data is loading...");
// }

const taskTwo = () => {
    setTimeout(() => {
        console.log("Task2. Data is loading...");
    }, 1000);
};
const taskThree = () => {
    console.log("Task3");
};
const taskFour = () => {
    console.log("Task4");
};
const taskFive = () => {
    console.log("Task5");
};

taskOne();
taskTwo();
taskThree();
taskFour();
taskFive();