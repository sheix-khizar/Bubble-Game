let timer = 60;
let score = 0
let Hitrn = 0 
const hitSound = document.getElementById("hitSound");
const gameOverSound = document.getElementById("gameOverSound");
const tickSound = document.getElementById("tickSound");


function MakeBubble(){
    let cluter = "";

    for(var i = 1; i<127; i++){
        let number = Math.floor(Math.random()*10);
        cluter += ` <div class="bubble">${number}</div>`
    }
    document.querySelector(".mainBar").innerHTML = cluter;
} 
function Timer() {
    let t = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerr").textContent = timer;

            tickSound.currentTime = 0;
            tickSound.play();

            if (timer === 10) {
                warningSound.play(); // Optional warning sound
            }
        } else {
            clearInterval(t);

            // Stop tick sound if playing
            tickSound.pause();
            tickSound.currentTime = 0;

            document.querySelector(".mainBar").innerHTML = "<h2> Game Over </h2>";
            gameOverSound.play();
        }
    }, 1000);
}



function Hit(){
    Hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#HitValue").textContent = Hitrn
}

function increaseScore(){
    score += 10
    document.querySelector("#SetScore").textContent = score
    hitSound.play(); 
}

document.querySelector("#mmm").addEventListener("click", function(details){
    let clickedNum = (Number(details.target.textContent))
    if(clickedNum === Hitrn){
        increaseScore();
        MakeBubble();
        Hit();
    }
})

Timer();
MakeBubble();
Hit();
// increaseScore();