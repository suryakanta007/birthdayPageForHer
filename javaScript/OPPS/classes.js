//? Let see how to make a class in JS.
//!NOTE: under the it make function and add methods using prototype.it is all about SyntxSuger.

// class CreateUser {
//     constructor(fullName,lastName,age){
//         this.fullName = fullName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     getUserYear(){
//         return new Date().getFullYear()-this.age;
//     }
// }

// const user1 = new CreateUser("Surya","Sing",14);

//* How to create a private property in class.

class CreateUser {
    #age
    constructor(fullName,lastName,age){
        this.fullName = fullName;
        this.lastName = lastName;
        this.#age = age;
    }
    getUserYear(){
        return new Date().getFullYear()-this.#age;
    }
}

const user1 = new CreateUser("Surya","Sing",14);
// console.log(user1.#age);