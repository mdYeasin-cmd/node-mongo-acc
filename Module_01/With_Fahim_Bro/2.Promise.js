/* 
    -> In a promise 3 state can have -
        1. pending
        2. resolved
        3. rejected
*/

// create a promise
const myPromise = new Promise((resolve, reject) => {
    const user = { id: 1, name: "Fahim" };
    if (!user) {
        reject("Something went wrong!!!");
    } else {
        setTimeout(() => {
            resolve({ name: "Mr. Fahim" });
        }, 1000);
    }
});

// consume the promise data
myPromise
    .then(res => console.log("found in then", res))
    .catch(err => console.log("found in catch", err));

console.log("done");

// handleing multiple promise at a time
const userIds = [1, 2, 3, 4, 5];
const userData = [];

for(let i = 0; i < userIds.length; i++) {
    const userId = userIds[i];
    // myPromise
    //     .then(user => {
    //         userData.push(user);
    //     })
    //     .catch(err => console.log(err));
    userData.push(myPromise);
}

Promise.all(userData).then(res => {
    console.log(res);
});

// console.log(userData);