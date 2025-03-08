// //! SIGNATUR:-

// //? take a callback .
// //? applys on every element.
// //? Push to a new Array.
// // let ele = 20;
// // console.log(ele)
// // let myFun =  (ele,index)=>{
// //     ele = 10;
// //     console.log(ele);
// // }
// // myFun();
// // console.log(ele)

// // myFun(12,8);

// if(!Array.prototype.myMap){
    
//     Array.prototype.myMap = function (callback){
//         let result  =  []
//         console.log(this)
//         for(let i = 0;i<this.length;i++){
//            let value =  kaam(this[i],i);
//            result.push(value)
//         }
//         return result;
//     }
// }

// // let arr = [3,4,5,7];
// // // console.log(arr[1])
// // let kaam = function(ele,indcv){console.log(ele)}
// // console.log(kaam)
// // // arr.map(kaam)


// // myMap()
// // // console.log(arr.myMap(myFun));


// let obj = {}

// obj.myMethod = function(){

// }

// console.log(obj);


//! Array.myLenght =>  "Mera lenght ha 5"

// let arr = [4,5,6,7,9];
// arr.length
// arr.myLenght

// let obj = {
//     arr : [4,5,6,7,9],
//     get () {
//         return `mere length ${this.length}ha`
//     }
// }

// console.log(obj.myLength)



// let school = {
//     total : 23,
//     // set Total(total){
//     //     this.total = total
//     // },
//     get Total(){
//         return this.total
//     }
// }

// console.log(school.Total)



let arr = [4,5,67,8,9,5];


Object.defineProperty(Array.prototype,"myLength",{
    get : function(){
        return `My array lenght is ${arr.length}.`
    },
    
})


console.log(arr.myLength)
// Function.prototype.describe = function(){
//     console.log(`Function name is ${this.name}`)
// }

// function greet(name){
//     return `Hello ${name}`
// }
// greet.describe();
