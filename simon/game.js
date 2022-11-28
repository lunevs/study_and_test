const buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let isGameActive = false;
let level = 0;

const animatePress = (name) => {
    let el = $("." + name);
    el.addClass("pressed");
    setTimeout(() => el.removeClass("pressed"), 100);
}

const playSound = (name) => {
    let soundBtn = new Audio("sounds/" + name + ".mp3")
    soundBtn.play();
}

const gameOver = () => {
    playSound("wrong");
    let b = $("body");
    b.addClass("game-over");
    setTimeout(() => b.removeClass("game-over"), 200);
    gamePattern = [];
    userClickedPattern = [];
    level = 0;
    $("h1").text("Game Over, Press Any Key to Restart");
}

const nextSequence = () => {
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];

    if (isGameActive) {
        console.log("level up, new color: ", randomChosenColour);
        gamePattern.push(randomChosenColour);
        $("h1").text("Level " + level);
        animatePress(randomChosenColour);
        playSound(randomChosenColour);
        level += 1;
    }
};

const checkAnswer = (currentLevel) => {
    if (currentLevel === userClickedPattern.length) {
        console.log(userClickedPattern);
        console.log(gamePattern);

        for (let i=0; i < userClickedPattern.length; i++) {
            if (userClickedPattern[i] !== gamePattern[i]) {
                isGameActive = false;
                i = userClickedPattern.length + 1;
            }
        }

        if (isGameActive) {
            userClickedPattern = [];
            setTimeout(() => nextSequence(), 1000);
        } else {
            gameOver();
        }
    }
}

const mouseClicked = (e) => {
    let userChosenColour = e.target.id;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    if (isGameActive) {
        checkAnswer(level);
    }
}

$(document).keydown(() => {
    if (!isGameActive) {
        isGameActive = true;
        gamePattern = [];
        userClickedPattern = [];
        nextSequence();
    }
});

$(".btn").click(mouseClicked);
