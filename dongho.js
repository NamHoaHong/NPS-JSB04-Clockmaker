function showTime(){
    var d = new Date();
    var hour = d.getHours();
    var minute = d.getMinutes();
    var second = d.getSeconds();
    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;
    second = (second < 10) ? "0" + second : second;
    document.getElementById("time").innerHTML = hour + " : " + minute + " : " + second;
    setTimeout(showTime, 1000);
};
showTime();
