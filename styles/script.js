
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
var n = 0;

// var top = document.getElementById('top');
// top.addEventListener("click",()=>{
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
// })
window.addEventListener("scroll",()=>{
        
        const header = document.getElementById('header');
        header.classList.toggle("toggle",window.scrollY > 0);
   
    if(window.scrollY >2750){
        box1.classList.add("runAnm1");
        box2.classList.add("runAnm2");
        box3.classList.add("runAnm3");
        box4.classList.add("runAnm4");


        var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var num3 = document.getElementById("num3");
var num4 = document.getElementById("num4");
var timesRun1 = 0;
var timesRun2 = 0;
var timesRun3 = 0;
var timesRun4 = 0;

var interval1 = setInterval(function(){
timesRun1 += 1;
num1.innerHTML = timesRun1 +"%";

if(timesRun1 === 97){
clearInterval(interval1);
}
}, 10);

var interval2 = setInterval(function(){
timesRun2 += 1;
num2.innerHTML = timesRun2 +"%";

if(timesRun2 === 95){
clearInterval(interval2);
}
}, 10);

var interval3 = setInterval(function(){
timesRun3 += 1;
console.log(timesRun3);
num3.innerHTML = timesRun3 +"%";

if(timesRun3 === 90){
clearInterval(interval3);
}
}, 10);

var interval4 = setInterval(function(){
timesRun4 += 1;
console.log(timesRun4);
num4.innerHTML = timesRun4 +"%";

if(timesRun4 === 100){
clearInterval(interval4);
}
}, 10);

        
    }
})
