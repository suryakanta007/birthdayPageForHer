/**
 * Write your challenge solution here
 */


let nameInput = document.querySelector("#nameInput");
let jobInput = document.querySelector("#jobInput");
let ageInput = document.querySelector("#ageInput");
let bioInput = document.querySelector("#bioInput");


let nameDisplay = document.querySelector("#nameDisplay");
let jobDisplay = document.querySelector("#jobDisplay");
let ageDisplay = document.querySelector("#ageDisplay");
let bioDisplay = document.querySelector("#bioDisplay");


nameInput.addEventListener("keyup",(e)=>{
    if(nameInput.value===""){
        return 
    }
    nameDisplay.innerText = nameInput.value
})

jobInput.addEventListener("keyup",()=>{
    if(jobInput.value===""){
        return 
    }
    jobDisplay.innerText =  jobInput.value
})

ageInput.addEventListener("keyup",()=>{
    if(ageInput.value===""){
        return 
    }
    ageDisplay.innerText = ageInput.value
})

bioInput.addEventListener("keyup",()=>{
    if(bioInput.value.trim() === ""){
        return 
    }
    bioDisplay.innerText = bioInput.value;
})