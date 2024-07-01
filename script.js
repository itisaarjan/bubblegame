//This is the JS file for the bubble game
let score=0;
let hitrn=0;
function increaseScore(){
    score+=10;
    document.querySelector("#score-val").textContent=score;
}
function decreaseScore(){
    score-=5;
    document.querySelector("#score-val").textContent=score;
}
function makeBubble(){
    let clutter=""

    for (let i=0;i<168;i++){
    clutter+=`<div class="bubble">${Math.floor(Math.random()*20)}</div>`
    }
    document.querySelector("#pbottom").innerHTML=clutter;
}
let timer=60;
function runTimer(){
    let timerint=setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector(".timer-value").textContent=timer;
        }else{
            clearInterval(timerint);
            document.querySelector("#pbottom").innerHTML=`<h1>Game Over</h1><h3 style="padding:40px 10px">Score:${score}</h3>`;
        }
        
    },1000);
}
function getNewHit(){
    hitrn=Math.floor(Math.random()*20);
    document.querySelector("#hitval").textContent=hitrn;
}

document.querySelector("#pbottom").addEventListener("click",function (details){
    let clickednum=Number(details.target.textContent);
    if(clickednum===hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }else{
        decreaseScore();
    }
})

runTimer();
makeBubble();
getNewHit();