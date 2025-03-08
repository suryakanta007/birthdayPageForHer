const { rejects } = require("assert");
let fs = require("fs");
const { resolve } = require("path");
// //? Concept of how call back use to do asynchronous
// // console.log("Program starting")
// // // let content = fs.readFileSync("./hello.txt","utf-8");
// // // console.log(content);

// // fs.readFile("./hello.txt","utf-8",(err,content)=>{
// //     if(err){
// //         console.log("Somthing wrong in file")
// //     }else{
// //         console.log(content)
// //     }
// // })
// // console.log("Program Ending.");


// console.log("Program starting")
// function print(content){
//     console.log(content)
// }

// function add(a,b,cb){
//     setTimeout(()=>{cb(a+b)},1000*4)
// }

// add(3,5,print)
// console.log("Program Ending.");
// setInterval(()=>{
//     console.log("runing...")
// },1000*1);


// How to we stuck in the CallBack Hell :

// 1.Read the conttents of file from hello.txt
// 2.Make a another file backup.txt
// 3.Copy the content of Hello.txt to backup.txt
// 4.Delete the hello.txt


//! Legacy code
// fs.readFile("./hello.txt","utf-8",(err,content)=>{
//     if(err){
//         console.log("Error in file reading " , err)
//     }else{
//         console.log(content)
//         fs.writeFile("./backup.txt",content ,(err,content)=>{
//             if(err){
//                 console.log("Somting error in wring " , err)
//             }else{
//                 fs.unlink("./hello.txt" , (err)=>{
//                     if(err){
//                         console.log("Error in deleting.")
//                     }else{
//                         console.log("File delete Success.");
//                     }
//                 })
//             }
//         })
//     }
// })

//?It is also asynscronous program but here we mess up with call bcack hell ; 
// So we can use Promisefied fs module 

//!Modren code .
// let fsV2 = require("fs/promises");

// fsV2.readFile("./hello.txt","utf-8")
// .then((content)=>{
//     fsV2.writeFile("./backup.txt",content)
// })
// .then(()=>{
//     fsV2.unlink("hello.txt");
// })
// .catch((err)=>{
//     console.log("Error is : ",err )
// })


// My own promsiesfied methods

function readFileWithPromise(filePath, encoding) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, encoding, (err, content) => {
            if (err) {
                reject(err)
            } else {
                resolve(content)
            }
        })
    })
}


function writeFileWithPromise(fileName, content) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, content, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve("Content copyed success fully.")
            }
        })
    })
}


function deleteFileWithPromise(fileName) {
    return new Promise((resolve, reject) => {
        fs.unlink(fileName, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve("File delete successfuly.")
            }
        })
    })
}

// readFileWithPromise("hello.txt","utf-8")
// .then((content)=>{
//     writeFileWithPromise("backup.txt",content)
// })
// .then((res)=>{
//     deleteFileWithPromise("./hello.txt")
// })
// .catch((err)=>{
//     console.log(err);
// })


function wait(time){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve();
        }, 1000*time)
    })
}

// Doing The same work with asyns await
async function doWorkInQue() {
    try {
        let content = await readFileWithPromise("hello.txt", "utf-8");
        await writeFileWithPromise("backup.txt", content);
        await wait(4);
        await deleteFileWithPromise("hello.txt");
    }catch(err){
        console.log(err);
    }finally{
        console.log("Jo honaa thaa ho gayaa.")
    }
}

doWorkInQue()
.then(()=>{
    console.log("All done.")
})



