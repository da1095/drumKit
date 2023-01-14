var drumList = document.querySelectorAll(".drum");

for (var i = 0; i < drumList.length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", eventClicker);
  document.addEventListener("keydown", pressedKey);
}

function eventClicker() {
  var buttonValue = this.innerHTML;
  switch (buttonValue) {
    case "w":
      var drumSound = new Audio("sounds/tom-1.mp3");
      drumSound.play();
      break;

    case "a":
      var drumSound = new Audio("sounds/tom-2.mp3");
      drumSound.play();
      break;

    case "s":
      var drumSound = new Audio("sounds/tom-3.mp3");
      drumSound.play();
      break;

    case "d":
      var drumSound = new Audio("sounds/tom-4.mp3");
      drumSound.play();
      break;

    case "j":
      var drumSound = new Audio("sounds/snare.mp3");
      drumSound.play();
      break;

    case "k":
      var drumSound = new Audio("sounds/crash.mp3");
      drumSound.play();
      break;

    case "l":
      var drumSound = new Audio("sounds/kick-bass.mp3");
      drumSound.play();
      break;
    default: console.log(key);
      break;
  }

  keyActive(buttonValue);
}





function pressedKey() {
    var keyValue = event.key;
    switch (keyValue) {
      case "w":
        var drumSound = new Audio("sounds/tom-1.mp3");
        drumSound.play();
        break;
  
      case "a":
        var drumSound = new Audio("sounds/tom-2.mp3");
        drumSound.play();
        break;
  
      case "s":
        var drumSound = new Audio("sounds/tom-3.mp3");
        drumSound.play();
        break;
  
      case "d":
        var drumSound = new Audio("sounds/tom-4.mp3");
        drumSound.play();
        break;
  
      case "j":
        var drumSound = new Audio("sounds/snare.mp3");
        drumSound.play();
        break;
  
      case "k":
        var drumSound = new Audio("sounds/crash.mp3");
        drumSound.play();
        break;
  
      case "l":
        var drumSound = new Audio("sounds/kick-bass.mp3");
        drumSound.play();
        break;
      default:console.log(key);
        break;
    }

    keyActive(keyValue);
  }

  function keyActive(currentKey){
    var activetKey = document.querySelector("." + currentKey);
    activetKey.classList.add("pressed");

    setTimeout(function(){
      activetKey.classList.remove("pressed");
    }, 100);
  }