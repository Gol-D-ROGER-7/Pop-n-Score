

var timer = 30;
var score = 0;
var hitrn; 


function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function getNewHit() {
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn   
}

function makeBubble() {
        
    var clutter = ""
    for (var i = 1; i<= 90; i++) {
        var bubbleNum = Math.floor(Math.random()*10)
        clutter += `<div class="bubble">${bubbleNum}</div>`
    }

    document.querySelector("#pbtm").innerHTML = clutter
}

function runTimer() {
    var timerr = setInterval(function() {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else {
            clearInterval(timerr)
            document.querySelector("#pbtm").innerHTML= `<h1>Congrats 🎉 your score is ${score} </h1>`;
        }
    }, 1000)
}

document.querySelector("#pbtm")
.addEventListener("click", function(details) {
    var clickedNum = Number(details.target.textContent);
    if (clickedNum === hitrn) {
        increaseScore();
        makeBubble();
        getNewHit();
    }
})

document.querySelector("#start")
.addEventListener("click", function() {
    getNewHit();
    runTimer();
    makeBubble();
})

