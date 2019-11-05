//self executing anonymous function, keeps code self contained
(function() {
    //test to see if file is hooked up
    "use strict";
    console.log("SEAF has fired.");

//very rusty at js after only doing php forever
//create an event listener
//listen for a click
//call a function


//variables. let instead of var for block elements
let btn1 = document.getElementById("btn1"),
    btn2 = document.getElementById("btn2"),
    btn3 = document.getElementById("btn3");
let pic = document.querySelector("#pic");



//functions
function changeSaturation() {
//add class to element with classList and toggle method
    pic.classList.toggle("saturate"); 
}

function changeGrayscale() {
    pic.classList.toggle("grayscale"); 
    }

function changeInvert() {
    pic.classList.toggle("invert"); 
        }


//listeners
btn1.addEventListener("click", changeSaturation, false);
btn2.addEventListener("click", changeGrayscale, false); 
btn3.addEventListener("click", changeInvert, false); 


})();