let word = document.querySelector(".word");
let userInput = document.querySelector(".user-input");
let userScoreEl = document.querySelector(".score");
let timeEl = document.querySelector(".time");
let end = document.querySelector(".end-game");
let gameContent = document.querySelector(".game-content");
let restart = document.querySelector(".restart");
let finalScore = document.querySelector(".end-score");
// let highScoreEl = document.querySelector(".highscore");
let time = 15;
let score = 0;
// let highScore = 5;

// genreate random words
function getWords() {
  word.innerText = list[Math.floor(Math.random() * list.length)];
}
// getWords();

//focus on input
userInput.focus();

//add event listener
userScoreEl.innerText = score;
// highScoreEl.innerText = highScore;
userInput.addEventListener("input", function () {
  if (userInput.value.toLowerCase() == word.innerText) {
    // console.log(userInput.value.toLowerCase());
    getWords();
    userInput.value = "";
    score++;
    userScoreEl.innerText = score;
    time = time + 2;
    timeEl.innerText = time;
  }
});

// time interval

var demoTime = setInterval(timer, 1000);

function timer() {
  time = time - 1;
  timeEl.innerText = time + " " + "s";
  if (time === 0) {
    document.body.style.background = "red";
    stopTimer();
  } else if (time < 3 && time > 0) {
    document.body.style.background = "green";
  }
}
function stopTimer() {
  clearInterval(demoTime);

  end.style.display = "block";
  gameContent.style.display = "none";
  finalScore.innerText = score;
}
restart.addEventListener("click", function () {
  document.location.href = "";
});
