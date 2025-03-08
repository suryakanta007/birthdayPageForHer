class User {
    constructor(firstName, lastName, age) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
    }
  
    getBirthYear() {
      return new Date().getFullYear() - this.age
    }
  
    get fullName() {
      return `${this.firstName} ${this.lastName}`
    }
  
    set fullName(value) {
      const [firstName, lastName] = value.split(' ')
      this.firstName = firstName
      this.lastName = lastName
    }
  }
  
  const user1 = new User('Aman', 'Mishra', 32)
  const user2 = new User('Anurag', 'Singh', 72)

//? Now we want to make a constructer function "Student" having same property and methods like "User".

//* let see how to inearite the methods and property of User to student and add extra property :- 

class Student extends User{
    constructor(firstName,lastName,age,rollNo){
        super(firstName,lastName,age)
        this.rollNo = rollNo;
    }
    get wellCome(){
        return `${this.firstName} , Wellcome to our School`;
    }
}

const student1 = new Student("Suryakanta","Sahu",34,2);