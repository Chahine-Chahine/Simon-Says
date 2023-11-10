// Global variables
const buttons = ["green", "red", "yellow" , "blue"];
const logicPattern = []
const userPattern = []




// Arrow function to generate the game sequence creator
let  sequenceCreator = ()=>{
let random_number = Math.floor(Math.random() * 4);
let random_color = buttons[random_number];
logicPattern.push(random_color);
$("#" + random_color).fadeIn(100).fadeOut(100).fadeIn(100);
}


sequenceCreator()