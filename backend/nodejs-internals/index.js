/*
const fs = require("fs");

setTimeout(()=>console.log("Set Timeout."),0);
setImmediate(()=>console.log("Set Immediate."));
// console.log("Hello"); //If i will Commente the line so what will be the out put 

// Expected output :-
//  Hello
//  Set Timeout.
//  Set Immediate.

//  Set Immediate.
//  Set Timeout.
/*
const fs = require("fs");

setTimeout(()=>console.log("Set Timeout."),0);
setImmediate(()=>console.log("Set Immediate."));
fs.readFile("sample.txt","utf-8",function(err,data){
    setTimeout(()=>{console.log("Set Timeout inside FS")},0);
    setImmediate(()=>console.log("Immediate inside FS 1"))
})
console.log("Hello")

// Expected output :-
// Hello
// Set timeout
// Set Immediate // acha file read katham nai huaa thaa tho immediate chal gayaa  
// Immediate inside FS 1
// Set Timeout inside FS 
*/

const fs = require("fs");
const crypto = require("crypto");

setTimeout(()=>console.log("Set Timeout."),0);
setImmediate(()=>console.log("Set Immediate."));
process.env.UV_THREADPOOL_SIZE  = 10;
fs.readFile("sample.txt","utf-8",function(err,data){
    setTimeout(()=>{console.log("Set Timeout inside FS")},0);
    setImmediate(()=>console.log("Immediate inside FS 1"))
    const start = Date.now();
    crypto.pbkdf2("password","salt1",200000,1024,'sha512',(err,data)=>{
        console.log(Date.now()-start+"ms: Password 1 is hashed ")
    })
    crypto.pbkdf2("password","salt1",100000,1024,'sha512',(err,data)=>{
        console.log(Date.now()-start+"ms: Password 2 is hashed ")
    })
    crypto.pbkdf2("password","salt1",100000,1024,'sha512',(err,data)=>{
        console.log(Date.now()-start+"ms: Password 3 is hashed ")
    })
    crypto.pbkdf2("password","salt1",100000,1024,'sha512',(err,data)=>{
        console.log(Date.now()-start+"ms: Password 4 is hashed ")
    })
    crypto.pbkdf2("password","salt1",100000,1024,'sha512',(err,data)=>{
        console.log(Date.now()-start+"ms: Password 5 is hashed ")
    })
    crypto.pbkdf2("password","salt1",100000,1024,'sha512',(err,data)=>{
        console.log(Date.now()-start+"ms: Password 6 is hashed ")
    })
})


console.log("Hello")