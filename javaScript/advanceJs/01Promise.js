//? Promise is the foundation of asynchronous programing in Javascript.It represent the evntual result of a asynchronous programing.


console.log("Hiii");
let data = fetch("https://api.freeapi.app/api/v1/public/quotes/quote/random");


data.then((res)=>{
    console.log(res)
})
console.log("Byee");

//? It instantly return a promise that is in pending state .
//? And we can excute the promise with then() and cathch() method or with try{}cathch(){} block.


//! How Promise Works 
// Pending: The initial state, representing that the asynchronous operation has not yet completed.
// Fulfilled: The operation completed successfully, and the Promise has a resolved value.
// Rejected: THe promise is Rejected wehn something error during the operation.


//? History of Promise 
// https://stackoverflow.com/questions/34960886/are-there-still-reasons-to-use-promise-libraries-like-q-or-bluebird-now-that-we
// Q prmise repo :  https://github.com/kriskowal/q





