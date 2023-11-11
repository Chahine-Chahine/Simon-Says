// Global variables
const button_colors = ["green", "red", "yellow" , "blue"];
let logic_pattern = []
let user_pattern = []

// set defualt start bolean 
started = false;

// start at level 0
let level = 0;


// Arrow function to generate the game sequence creator
let  sequenceCreator = ()=>{
let random_number = Math.floor(Math.random() * 4);
let random_color = button_colors[random_number];
logic_pattern.push(random_color);
$("#" + random_color).fadeIn(100).fadeOut(100).fadeIn(100);
playSound(random_color)
level++
$("#level-title").text("level" + " " + level);
user_pattern = []
}

// selecting then storing the user choice 
$(".btn").click((event)=>{
    // select the id attribute of the clicked button
    let user_choice = $(event.target).attr("id");
    user_pattern.push(user_choice);
    // add sound acc. to user color choice  
    playSound(user_choice);
    buttonAnimation(user_choice);
    answerValidation(user_pattern.length -1)

})


// function for sound playing 
let playSound = (sound) =>{
    let audio = new Audio("./sounds/" + sound + ".mp3");
    audio.play();
}

// function for button animation
let buttonAnimation = (color_choice) =>{
    $("#" + color_choice).addClass("pressed");
    setTimeout(()=>{
    $("#" + color_choice).removeClass("pressed");
    },100);
}

// function for validating the answer
let answerValidation = (game_level)=>{
    if (user_pattern[game_level] === logic_pattern[game_level]){
        if  (user_pattern.length === logic_pattern.length) {
        setTimeout(() => sequenceCreator(),1000);
    }
    }else{
        playSound("wrong")
        $("body").addClass("game-over");
        setTimeout(() => $("body").removeClass('game-over'), 300);
        $("h1").text("Game over, press any key to restart");
        level = 0;
        logic_pattern = [];
        started = false;
    }
}


// function for handling key press
let handleKeyPress = () => {
    if(!started){
        started = true;
        sequenceCreator();
    }else if (logic_pattern.length === user_pattern.length){
        sequenceCreator();
    }
}

// target the document to start the game
$(document).on("keydown", handleKeyPress);