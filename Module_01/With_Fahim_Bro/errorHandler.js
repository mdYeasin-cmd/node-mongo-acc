// console.log(module);

// module.exports.errorHandler = function errorHandler(error) {
//     const { name, message, stack } = error;

//     console.log(name, message);
//     // logger.error({
//     //     name,
//     //     message,
//     //     stack,
//     //     // route: 
//     // });

//     // console.log("Internal server error!!!");
// }

function errorHandler(error) {
    const { name, message, stack } = error;

    console.log(name, message);
    // logger.error({
    //     name,
    //     message,
    //     stack,
    //     // route: 
    // });

    // console.log("Internal server error!!!");
}


// module.exports.two = () => {
//     console.log("Two func");
// }

export const two = () => {
    console.log("Two func");
}

// module.exports.errorHandler = errorHandler;
// module.exports.two = two;

const obj = {};

obj.property1 = "",
obj.property2 = ""

// console.log(module);

export default errorHandler;