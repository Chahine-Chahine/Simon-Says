// Global variables
const button_colors = ["green", "red", "yellow" , "blue"];
let logic_pattern = []
let user_pattern = []

// set defualt start bolean 
let started = false;

// start at level 0
let level = 0;


// Arrow function to generate the game sequence creator
let  sequenceCreator = ()=>{
let random_number = Math.floor(Math.random() * 4);
let random_color = button_colors[random_number];
logic_pattern.push(random_color);
document.getElementById(random_color).style.opacity = 1;
setTimeout(() => {
  document.getElementById(random_color).style.opacity = 0;
}, 100);
setTimeout(() => {
  document.getElementById(random_color).style.opacity = 1;
}, 200);
playSound(random_color)
level++
document.getElementById("level-title").textContent = "level" + " " + level;
user_pattern = []
}

// selecting then storing the user choice 
document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click",(event)=>{
    // select the id attribute of the clicked button
    let user_choice = event.target.id;
    user_pattern.push(user_choice);
    // add sound acc. to user color choice  
    playSound(user_choice);
    buttonAnimation(user_choice);
    answerValidation(user_pattern.length -1)

});
});

// function for sound playing 
let playSound = (sound) =>{
    let audio = new Audio("./sounds/" + sound + ".mp3");
    audio.play();
}

// function for button animation
let buttonAnimation = (color_choice) =>{
    document.getElementById(color_choice).classList.add("pressed");
    setTimeout(()=>{
    document.getElementById(color_choice).classList.remove("pressed");
    },100);
}

// function for validating the answer
let answerValidation = (sequence_index)=>{
    if (user_pattern[sequence_index] === logic_pattern[sequence_index]){
        if  (user_pattern.length === logic_pattern.length) {
        setTimeout(() => sequenceCreator(),1000);
    }
    }else{
        playSound("wrong")
        document.body.classList.add("game-over");
        setTimeout(() => document.body.classList.remove("game-over"), 300);
        document.querySelector("h1").textContent = "Game over, press any key to restart";
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
document.addEventListener("keydown", handleKeyPress)