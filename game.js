var gamePattern = [];

var userClickedPattern = [];

var buttonColors = ["red", "blue", "yellow", "green"];



function nextSequence() {
    randomNumber = Math.floor(Math.random() * 4);

    var randomChosenColor = buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);

    level = level + 1;

    $("h1").html("Level " + level);

    userClickedPattern = [];

    pickButton(randomChosenColor);
    playSound(randomChosenColor);
}

function pickButton(rcc) {
    switch (rcc) {
        case "red":
            $("#red").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
            var redSound = new Audio('sounds/red.mp3');
            redSound.play();
            break;

        case "blue":
            $("#blue").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
            var blueSound = new Audio('sounds/blue.mp3');
            blueSound.play();
            break;

        case "yellow":
            $("#yellow").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
            var yellowSound = new Audio('sounds/yellow.mp3');
            yellowSound.play();
            break;

        case "green":
            $("#green").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
            var greenSound = new Audio('sounds/green.mp3');
            greenSound.play();
            break;


        default: console.log(rcc);
    }

    
   
}

$(".btn").click(function() {
    var userChosenColor = $(this).attr('id');
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
    
})

function playSound(name,) {
    switch(name) {
        case "red":
            var redSound = new Audio('sounds/red.mp3');
            redSound.play();
            break;

        case "blue":
            var blueSound = new Audio('sounds/blue.mp3');
            blueSound.play();
            break;

        case "yellow":
            var yellowSound = new Audio('sounds/yellow.mp3');
            yellowSound.play();
            break;

        case "green":
            var greenSound = new Audio('sounds/green.mp3');
            greenSound.play();
            break;

        default: console.log(name);
    }
}

function animatePress(currentColor) {
    switch(currentColor) {
        case "red":
            $("#red").addClass('pressed');
            window.setTimeout(function(){$("#red").removeClass('pressed');}, 100);
        break;
        
        case "blue":
        $("#blue").addClass('pressed');
        window.setTimeout(function(){$("#blue").removeClass('pressed');}, 100);
        break;

        case "yellow":
            $("#yellow").addClass('pressed');
            window.setTimeout(function(){$("#yellow").removeClass('pressed');}, 100);
        break;

        case "green":
            $("#green").addClass('pressed');
            window.setTimeout(function(){$("#green").removeClass('pressed');}, 100);
        break;

        default: console.log(currentColor);
                
    }

    
}

var level = 0;
var started = false;

$(document).keydown(function() {
    if (started == false) {
        nextSequence();
    }
    started = true;
    
    
})

function checkAnswer(currentLevel) {
    

    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        console.log("Success")
        if (userClickedPattern.length === gamePattern.length) {
            window.setTimeout(function() {nextSequence()}, 1000);
        }

       
    }
    else {
        console.log("wrong")
        var wrongAnswer = new Audio('sounds/wrong.mp3')
        wrongAnswer.play();
        $("body").addClass('game-over');
            window.setTimeout(function(){$("body").removeClass('game-over');}, 100);
        $("h1").html("Game Over, Press Any Key to Restart");
        startOver();
    }
}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}