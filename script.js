let clutter=""

for (let i=0;i<168;i++){
    clutter+=`<div class="bubble">${Math.floor(Math.random()*10)}</div>`
}
document.querySelector("#pbottom").innerHTML=clutter;
