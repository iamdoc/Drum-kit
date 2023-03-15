// const { url } = require("inspector");
document.addEventListener("keydown", function (event) {
    makeSound(event.key);

    addAnimation(event.key);
})

for (var i = 0; i < 7; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        addAnimation(buttonInnerHTML);
    })
}

function makeSound(key) {
    switch (key) {
        case "w":
            var crash = new Audio('crash.mp3');
            crash.play();
            break;
        case "a":
            var kickBass = new Audio('kick-bass.mp3');
            kickBass.play();
            break;
        case "s":
            var snare = new Audio('snare.mp3');
            snare.play();
            break;
        case "d":
            var tom1 = new Audio('tom-1.mp3');
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio('tom-2.mp3');
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio('tom-3.mp3');
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio('tom-4.mp3');
            tom4.play();
            break;
        default: console.log(key); break;
    }
}

function addAnimation(currenKey) {
    var activeKey = document.querySelector("." + currenKey);
    activeKey.classList.add("pressed");
    setTimeout(() => {
        activeKey.classList.remove("pressed");
    }, 100);
}


// function HouseKeeper (name, age, hasWorkPermit, languages) {
//     this.name = name;
//     this.age =age;
//     this.hasWorkPermit = hasWorkPermit;
//     this.languages = languages;
//     this.clean = function () {
//         alert("Cleaning in progress");
//     }
// }
