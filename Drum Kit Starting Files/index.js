// A for loop iterating over an array of botton using the class(.drum) from My HTML file , and passing it through and event listening to clicks
const buttonNum = document.querySelectorAll(".drum");
for (let index = 0; index < buttonNum.length; index++) {
    document.querySelectorAll(".drum")[index].addEventListener("click", function () {
        let buttonInnerHTML = this.innerHTML;
       link(buttonInnerHTML);
       buttonAnimation(buttonInnerHTML);
    });
};
// An evenvent listener listening for the press of a key
document.addEventListener("keypress", function(e) {
  link(e.key);
  buttonAnimation(e.key);  
  // A function linking the press of a key on my PC and a click of a button on the screen
});
function link(key) {
    switch (key) {
        case "w":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            let kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;
        case "l":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        default:
            console.log(innerHTML)
            break;
    }
}

function buttonAnimation(currentkey) {
   const activeBotton = document.querySelector("." + currentkey);
   activeBotton.classList.add("pressed");
   setTimeout(function() {
    activeBotton.classList.remove("pressed");
   }, 100);
}

