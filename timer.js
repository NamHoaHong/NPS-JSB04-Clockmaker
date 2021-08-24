let second = document.getElementById("second");
let minute = document.getElementById("minute");
let hour = document.getElementById("hour");
let startBtn = document.getElementById("start");
let resetBtn = document.getElementById("reset");


let time = 15;

if(time<10){
    second.innerHTML = `0${time}`;
    }
    else{
        second.innerHTML = `${time}`
    }

const countDown = setInterval(function(){
    time--;
    if(time<10){
    second.innerHTML = `0${time}`;
    }
    else{
        second.innerHTML = `${time}`
    }
    if(time<=0){
        clearInterval(countDown)
    }
},1000);

function start(){
    if(startBtn.innerHTML == "start"){
        startBtn.innerHTML = "stop";
        countDown
    }
    else if(startBtn.innerHTML == "stop"){
        startBtn.innerHTML = "start";
        clearInterval(countDown);
        let remaining = second.innerHTML
    }
};
function reset(){
    second.innerHTML = "00";
    clearInterval(countDown)
}