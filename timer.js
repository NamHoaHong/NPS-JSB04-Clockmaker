let second = document.getElementById("second");
let minute = document.getElementById("minute");
let hour = document.getElementById("hour");
let startBtn = document.getElementById("start");
let resetBtn = document.getElementById("reset");


let time = 0;

var countDown;
var x;
var y;
var z;

function start(){
    countDown = setInterval(function(){
        time--;
        if(time<10){
        second.innerHTML = `0${time}`;
        }
        else{
            second.innerHTML = `${time}`
        }
        if(time == -1){
            var m = minute.innerHTML;
            m -= 1;
            if(m<10){
            minute.innerHTML = `0${m}`;
            }
            else{
            minute.innerHTML = `${m}`
            }
            time = "59";
            second.innerHTML = "59";
            if(m == -1){
                var h = hour.innerHTML;
                h -= 1;
                if(h<10){
                hour.innerHTML = `0${h}`;
                }
                else{
                hour.innerHTML = `${m}`
                };
                m = "59";
                minute.innerHTML = "59";
                if(h<0){
                    clearInterval(countDown);
                    hour.innerHTML = "00";
                    minute.innerHTML = "00";
                    second.innerHTML = "00";
                }
            }
        }
    },1000);
};
function stop(){
    clearInterval(countDown);
};
function setTimer(){
    var x = prompt("Input Hour (Between 0 and 23)");
    if(x<10){
    hour.innerHTML = `0${x}`;
    }
    else{
    hour.innerHTML = `${x}`
    };
    var y = prompt("Input Minute (Between 0 and 60)");
    if(y<10){
    minute.innerHTML = `0${y}`;
    }
    else{
    minute.innerHTML = `${y}`
    };
    var z = prompt("Input Second (Between 0 and 60)");
    if(z<10){
    second.innerHTML = `0${z}`;
    }
    else{
    second.innerHTML = `${z}`
    };
    time = z;
}