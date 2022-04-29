const arr = ["blue", "red", "green", "rgba(219,219,219)", "#f1bic2"];

const btn = document.querySelector("#btn");

const span = document.querySelector("span");

btn.addEventListener("click", () => {
    const randomNumber = getRandomNumber();
    console.log(randomNumber); 
    span.textContent = arr[randomNumber];
    document.body.style.backgroundColor = arr[randomNumber];
})

function getRandomNumber(){
    return Math.floor(Math.random() * arr.length) ;
}


