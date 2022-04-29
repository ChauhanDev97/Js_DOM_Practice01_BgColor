const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn =  document.querySelector("#btn");
const span = document.querySelector("span");

btn.addEventListener("click", () => {
    
    let hexColor = "#";
    for (let i = 0; i < 6; i++){
        hexColor += arr[getRandomNumber()];
    } 

    document.body.style.backgroundColor = hexColor;
    span.textContent = hexColor;
});

function getRandomNumber(){
    return Math.floor (Math.random() * arr.length);
}

