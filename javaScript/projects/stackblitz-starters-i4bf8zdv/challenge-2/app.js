/**
 * Write your challenge solution here
 */

let colorButtons = document.querySelector(".color-buttons");
let mainHeading = document.getElementById("mainHeading");


colorButtons.addEventListener("click", (e) => {
    switch (e.target.id) {
        case "redButton":
            mainHeading.style.color = "red"
            break;
        case "greenButton":
            mainHeading.style.color = "green"
            break;
        case "blueButton":
            mainHeading.style.color = "blue"
            break;
        case "purpleButton":
            mainHeading.style.color = "purple"
            break;
        case "resetButton":
            mainHeading.style.color = null
            break;
    }
})
