// const user = {
//     firstName:"Suryakanta",
//     lastName:"Sahu",
//     age:19
// }

// function getUserYear(age){
//     return  new Date().getFullYear()-age;
// }
//? It is a normal program.
//? But now To make it object orinted we can do like this.
// const  user = {
//     firstName:"Suryakanta",
//     lastName:"Sahu",
//     age:19,
//     getUserYear : function (){
//         return new Date().getFullYear()-user.age;
//     }
// }
//?now the problem is if we want make multiple user we have to make multiple object .
//? to solve that problem  we can make like this

// function createUser (firstName,lastName,age){
//     const user = {
//         firstName,
//         lastName,
//         age,
//         getUserYear (){
//             return new Date().getFullYear()-user.age;
//         }
//     }
//     return user;
// }

// const user1 = createUser("Surya","Sing",19);
// const user2 = createUser("RaJ","Sing",23);

/*? if we check */ /*user1.getUserYear === user2.getUserYear*/ //? it give False
//? it mean the same function  also save in different memory Loction.
//? so that to over come that we use factory Function in javascript.

//*now see:-

// function getUserYear (){
//     return new Date().getFullYear()-this.age;
// }

// function createUser (firstName,lastName,age){
//     const user = {
//         firstName,
//         lastName,
//         age,
//         getUserYear
//     }
//     return user
// }

// const user1 = createUser("Surya","Sing",19);
// const user2 = createUser("RaJ","Sing",23);

//?Now if check "user1.getUserYear === user2.getUserYear" it give "true".the function is created ones and the refferance is give to others. and "this" reffers to the object.
//*now this time we applyed Ploymorphism
//? but  we define a function in the global so it is accessable to everyone,so the problem is  we break the abstraction and encapsulation .

//* next to overcome that see what can we do:-
// function createUser (firstName,lastName,age){
//     const user = {
//         firstName,
//         lastName,
//         age,
//         getUserYear: createUser.commonMethods.getUserYear
//     }
//     return user
// }

// createUser.commonMethods = {
//      getUserYear (){
//             return new Date().getFullYear()-this.age;
//          }
// }

// const user1 = createUser("Surya","Sing",19);
// const user2 = createUser("RaJ","Sing",23);
// const user3 = new createUser("ram","sahu",23);

//* now see what will be the output if we call the constructer function using "new" keyword.

function created() {
  console.log(this);
}
//todo here we call the function the "this" reffers to window object but when we call the function using "new" keyword "this" reffers to the object,which the function is returned.

//* now see how to create a function using constructer function.
function CreateUser(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

const user1 = new CreateUser("Surya", "Sing", 23);
const user2 = new CreateUser("surya", "raj", 19);
//? now the CreateUser() have no extra method

//* lets see how to add method using factory function:-
CreateUser.prototype.getUserYear = function () {
  return new Date().getFullYear() - this.age;
};

const user3 = new CreateUser("Raj","Sing",20);
//! NOTE :When to create a constructer function always make the first letter in capital letter.


