let startgame = document.getElementById('start')
let game = document.getElementById("game")
let userInput = document.getElementById("user-input")
let num = Math.floor(Math.random() * 100 + 1)
console.log(num)
let result = document.createElement("p")
result.setAttribute("class", "result")
game.appendChild(result)

function start() {
    startgame.style.display = "none"
    game.style.display = "block"
}

function enter() {
if(userInput.value == num){
    result.innerHTML =` "Wow! You Guessed It." `+" The Number was " + num
}
else if(userInput.value < num){
    result.innerHTML = `"Your Guess in Smaller" `
}
if(userInput.value > num){
    result.innerHTML = `"Your Guess in Greater" `
}
}