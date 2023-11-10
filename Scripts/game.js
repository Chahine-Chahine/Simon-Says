// Global variables
const buttons = ["green", "red", "yellow" , "blue"];
const logic_pattern = []
const user_pattern = []

// start at level 0
let level = 0;


// Arrow function to generate the game sequence creator
let  sequenceCreator = ()=>{
let random_number = Math.floor(Math.random() * 4);
let random_color = buttons[random_number];
logic_pattern.push(random_color);
$("#" + random_color).fadeIn(100).fadeOut(100).fadeIn(100);
playSound(random_color)
level++
$("#level-title").text("level" + " " + level);
user_pattern = []
}

// selecting then storing the user choice 
$(".btn").click(()=>{
    // select the id attribute of the clicked button
    let user_choice = $(".btn").attr("id");
    user_pattern.push(user_choice);
    // add sound acc. to user color choice
    playSound(user_choice);
    buttonAnimation(user_choice);

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