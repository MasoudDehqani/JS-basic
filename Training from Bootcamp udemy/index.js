function drumSelector() {
  for (i = 0; i < 7; i++) {
    document
      .querySelectorAll("button.drum")
      [i].addEventListener("mousedown", function () {
        soundTriger(this.innerHTML);
        buttonAnimation(this.innerHTML);
      });
  }
}

drumSelector();

function keyPressDetector() {
  document.addEventListener("keydown", function (event) {
    soundTriger(event.key);
    buttonAnimation(event.key);
  });
}

keyPressDetector();

function soundTriger(event) {
  switch (event) {
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
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      let kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;
  }
}

// soundTriger()

function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  document.addEventListener("keyup", function () {
    activeButton.classList.remove("pressed");
  });
  activeButton.addEventListener("mouseup", function () {
    this.classList.remove("pressed");
  });
}
