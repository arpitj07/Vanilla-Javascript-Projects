VanillaTilt.init(document.querySelectorAll(".box"), {
    max: 30,
    speed: 400,
    glare: true,
    "max-glare": 1
});

let score =0;
let currentBOx=0;
let islocked = false;
let currentTime = 10;
const boxes = document.querySelectorAll(".box");
const mole = document.querySelector(".mole");
const timeCounter = document.getElementById("Time"),
scoreCounter = document.getElementById("score"),
restart = document.getElementById("restart");


function showMole(){
    boxes.forEach(box=>{
        box.classList.remove('mole');
    })
    islocked=false;
    let randomBox = boxes[Math.floor(Math.random()*9)];
    randomBox.classList.add("mole");
    currentBOx= randomBox.id;
}


function start(){
    score = 0;
    currentTime = 10;
    moleTimer = setInterval(showMole,1000);
    timeTimer = setInterval(countTime,1000);
    
    timeCounter.innerHTML = currentTime;
    scoreCounter.innerHTML=score;
}



boxes.forEach(box=>{
    box.addEventListener("click", ()=>{
        if(box.id==currentBOx){
            if(islocked) return;
            score++;
            scoreCounter.innerHTML=score;
            islocked=true;
        }
    })
})

function countTime(){
    currentTime--;
    timeCounter.innerHTML = currentTime;
    if(currentTime==0){
        clearInterval(timeTimer);
        clearInterval(moleTimer);
        alert("GAME OVER!! Your score: " + score) 
    }
}

function restartGame(){
    clearInterval(timeTimer);
    clearInterval(moleTimer);
    start();
}
start();

restart.addEventListener("click", restartGame);