class CreateUser {
    constructor(fullName,lastName,age){
        this.fullName = fullName;
        this.lastName = lastName;
        this.age = age;
    }
    static hi = "Hello jii";

    static{
        console.log(this);
        this.hye = "HIII";
        this.getFullName = function (){
            return `${this.fullName} ${this.lastName}`
        }
    }
    getUserYear(){
        return new Date().getFullYear()-this.age;
    }
}

const user1 = new CreateUser("Surya","Sing",14);