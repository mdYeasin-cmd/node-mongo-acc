// const { errorHandler, two } = require("./errorHandler");

import { two } from "./errorHandler.js";
import errorHandler from "./errorHandler.js";

two();

async function getData() {
    try {
        // undefined.find();

        const emailError = new Error("Email already exists");
        throw emailError;

    } catch (error) {
        errorHandler(error);
    }
};

// =============================
// try {
//     async function getData() {
//         undefined.find();
//     }
// } catch (error) {
//     errorHandler(error);
// }
// this example will not work becausse getData() function scope and try catch scope is different.
// =================================

getData();



console.log("Done!!!");