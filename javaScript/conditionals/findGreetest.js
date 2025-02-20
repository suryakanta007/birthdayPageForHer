// function findLargest(a, b, c) {
//     // Return the largest among a, b, and c
//     if(a>c && a>b){
//       return a
//     } else if(b>a && b > c){
//       return b
//     }else if(c>a && c>b){
//       return c
//     }else if(a==b||a==c){
//       return a
//     }else if(c==b){
//       return c
//     }
//   }

//   console.log(findLargest(100,100,99))

// You just need to implement the calculator function
function calculator(num1, num2, operator) {
    // Perform basic arithmetic operations using switch case
    switch(operator){
      case "+":
          return num1+num2
      case "-":
          return num1-num2
      case "*":
          return num1*num2
      case "/":
          return num2!==0?num1/num2:"Cannot divide by zero"
    }
  }
  
  // Please don't remove the code below
 
  console.log(calculator(10,7,"-"))



