function clickSoundStyleTrigger() {
  let colors = ["green", "red", "yellow", "blue"];
  // "forEach" method is for iteration
  colors.forEach(function (color) {
    $("#" + color).on("click", function () {
      let colorAudio = new Audio("./sounds/" + color + ".mp3");
      colorAudio.play();
      $("#" + color).addClass("pressed");
      setTimeout(function () {
        $("#" + color).removeClass("pressed");
      }, 100);
    });
  });
}

clickSoundStyleTrigger();

let colorsPattern = [];

function patternSoundStyleTrigger() {
  let colors = ["green", "red", "yellow", "blue"];
  let randomNumber = Math.floor(Math.random() * 4);
  let randomColor = colors[randomNumber];
  let selectedColor = new Audio("./sounds/" + randomColor + ".mp3");
  selectedColor.play();
  $("#" + randomColor).addClass("pattern-pressed");
  setTimeout(function () {
    $("#" + randomColor).removeClass("pattern-pressed");
  }, 150);
  colorsPattern.push(randomColor);
  console.log(colorsPattern);
  $("h1").text("Level " + colorsPattern.length);
}

// The lines below works while the next block which is commented doesn't work
$(document).on("keypress", function () {
  if (colorsPattern.length == 0) {
    return patternSoundStyleTrigger();
  }
});

// function gameStartRestart() {
//   if (colorsPattern.length == 0) {
//     $(document).on("keypress", patternSoundStyleTrigger);
//   }
// }

// gameStartRestart();

function arraysMatch(arr1, arr2) {
  // Check if the arrays are the same length
  if (arr1.length !== arr2.length) return false;

  // Check if all items exist and are in the same order
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  // Otherwise, return true
  return true;
}

function arraysNotMatch(arr1, arr2) {
  for (var i = 0; i < arr1.length; i++)
    if (arr2[i]) {
      // Line above added so the next line won't check those members of array2 which is not yet present
      if (arr1[i] !== arr2[i]) return true;
    }
}

let colorsClicked = [];

function patternGame() {
  $(".btn").click(function (event) {
    // "event.target" is only accessible inside the ".click(function(event))"
    colorsClicked.push(event.target.id);
    console.log(colorsClicked);
    if (arraysMatch(colorsPattern, colorsClicked)) {
      colorsClicked.length = 0;
      setTimeout(patternSoundStyleTrigger, 800);
    } else if (
      arraysNotMatch(colorsPattern, colorsClicked) ||
      colorsClicked.length > colorsPattern.length
    ) {
      colorsPattern.length = 0;
      colorsClicked.length = 0;
      $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);
      $("h1").text("Game Over, Press Any Key to Restart");
      let gameoverAudio = new Audio("./sounds/wrong.mp3");
      gameoverAudio.play();
    }
  });
}

patternGame();
