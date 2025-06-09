var x = 30;
var timer = 60;
var score = 0;
var HitRn =0;
function makebubble(){
    var bubbles = "";
for(let i=1; i<=133; i++){
    var a = Math.ceil(Math.random()*x);
    bubbles+= `<div class="bubble"><h2>${a}</h2></div>`
}
document.querySelector("#pnlbtm").innerHTML = bubbles;
};
function increaseScore(){
    score+=10;
    document.querySelector("#scoreval").textContent = score;
}


function runtimer(){
    var timerInterval = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timer").textContent = timer;
        } else {
            clearInterval(timerInterval);
            document.querySelector("#pnlbtm").innerHTML = `<h1>Game Over. Your score is ${score}</h1>`;
        }
    }, 1000);
}

function getNewHit(){

    HitRn = Math.ceil(Math.random()*x)
    document.querySelector("#hitval").innerText = HitRn;
};

document.querySelector("#pnlbtm").addEventListener("click", function(details){
   var clickedNo = Number(details.target.textContent);
   if(clickedNo === HitRn){
    increaseScore();
    makebubble();
    getNewHit();
   }
})
makebubble();
runtimer();
getNewHit();
// increaseScore();