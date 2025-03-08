let person1 = {
    personName : "Suryakanta Sahu",
    greet :  function (num){
        console.log("Hello, "+this.personName + num)
    }
}


let person2 = {
    personName : "Shrabani bhutiaa",
}

person1.greet.call(person2,23);
person1.greet.apply(person2,[23])


// call() : Imideate excute the function and return the result
// bind() : It return the function 
