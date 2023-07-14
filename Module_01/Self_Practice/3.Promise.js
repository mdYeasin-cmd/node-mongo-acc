// how to create a promise - pending, resolve, reject
const promise1 = new Promise((resolve, reject) => {
    // const isCompletedPromise = true;
    // if(isCompletedPromise) {
    //     resolve("Completed promise 1");
    // } else {
    //     reject(new Error("Can't complete the promise 1"));
    // }

    setTimeout(() => {
        resolve("Completed promise 1");
    }, 2000);
});

const promise2 = new Promise((resolve, reject) => {
    // resolve("Completed promise 2");

    setTimeout(() => {
        resolve("Completed promise 2");
    }, 1000);
});

// console.log(promise1);
// promise1.then((res) => {
//     console.log(res);
// }).catch(err => {
//     console.log(err.message);
// });
// promise2.then(res => {
//     console.log(res);
// });

// Promise.all([promise1, promise2]).then(([res1, res2]) => {
//     console.log(res1, res2);
// })

Promise.race([promise1, promise2]).then((res) => {
    console.log(res);
})