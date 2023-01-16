var nm = prompt("Enter your name:");
document.querySelector("#myName").innerHTML = nm;

function showTime(){
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    console.log(time);
    document.getElementById("myClock").innerHTML = time;
    setTimeout(showTime, 1000); 
}