var numberOfButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfButtons; i++) { 
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick); // onclick event listener
}
document.addEventListener("keypress", keyPress); // keypress event listener

function handleClick() { // to handle click on buttons
    makeSound(this.innerHTML)
}

function keyPress(event) { // to handle key press
    makeSound(event.key);
}

function play(path) { // play the audio
    var audio = new Audio(path);
    audio.play();
}

function makeSound(key) { // choosing the audio
    switch (key) {
        case "w":
            play("sounds/tom-1.mp3");
            break;
        case "a":
            play("sounds/tom-2.mp3");
            break;
        case "s":
            play("sounds/tom-3.mp3");
            break;
        case "d":
            play("sounds/tom-4.mp3");
            break;
        case "j":
            play("sounds/snare.mp3");
            break;
        case "k":
            play("sounds/crash.mp3");
            break;
        case "l":
            play("sounds/kick-bass.mp3");
            break;
        default:
            break;
    }
}



























// OBJECTS IN JAVA SCRIPT

// function HouseKeeper(name, age) {
//     this.name = name;
//     this.age = age;
//     this.cleaning = function () {
//         alert("Cleaning in progress");
//     };
// }

// var logesh = new HouseKeeper("logesh", 20);
// console.log(logesh.age);
// logesh.cleaning();
