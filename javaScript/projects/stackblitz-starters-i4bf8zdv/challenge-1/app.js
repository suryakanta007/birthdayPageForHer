/**
 * Write your challenge solution here
 */


const toggleButton = document.querySelector("#toggleButton");
const backGroundElement = document.getElementById("body");
const bulb = document.getElementById("bulb");
let status = document.getElementById("status");


// backGroundElement.classList.add("dark-mode")


function bulbOnOff(){
    let classList = Array.from(bulb.classList);

    if(classList.includes("off")){
        bulb.classList.remove("off");
    }else{
        bulb.classList.add("off");
    }
}

function backgroundChange(){
    let classList = Array.from(backGroundElement.classList);
    
    if(classList.includes("dark-mode")){
        backGroundElement.classList.remove("dark-mode")
    }else{
        backGroundElement.classList.add("dark-mode")
    }
}

let check = true
toggleButton.addEventListener("click" , (e)=>{
    check = !check
    backgroundChange()
    bulbOnOff()
    if(!check){
        status.innerText = "Status: On"
        toggleButton.innerText = "Turn Off"
     }else{
        status.innerText  = "Status: Off"
        toggleButton.innerText = "Turn On"
     }
    
    

     

     
    
})
