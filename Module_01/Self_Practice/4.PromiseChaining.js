const taskOne = () => {
    return new Promise((resolve, reject) => {
        resolve("Task 1 is completed!!!");
    })
}

const taskTwo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Task 2 is completed!!!");
        }, 2000);
    })
}

const taskThree = () => {
    return new Promise((resolve, reject) => {
        reject("Task 3 is not completed!!!");
    })
}

const taskFour = () => {
    return new Promise((resolve, reject) => {
        resolve("Task 4 is completed!!!");
    })
}

// taskOne()
//     .then(res => console.log(res))
//     .then(taskTwo)
//     .then(res => console.log(res))
//     .then(taskThree)
//     .then(res => console.log(res))
//     .then(taskFour)
//     .then(res => console.log(res))
//     .catch(err => console.log(err));

const callAllTasks = async () => {
    try {
        const task1 = await taskOne();
        console.log(task1);
        const task2 = await taskTwo();
        console.log(task2);
        const task3 = await taskThree();
        console.log(task3);
        const task4 = await taskFour();
        console.log(task4);
    } catch(e) {
        console.log(e);
    }
}

callAllTasks();