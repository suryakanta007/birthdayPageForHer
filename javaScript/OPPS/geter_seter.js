class CreateUser {
    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get fullName () {
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(value){
        const [firstName,lastName] = value.split(" ");
        // console.log(splitedValue);
        this.firstName = firstName;
        this.lastName = lastName;
        // return `${this.firstName} ${this.lastName}`
    }
    getUserYear(){
        return new Date().getFullYear()-this.age;
    }
}

const user1 = new CreateUser("Surya","Sing",14);


