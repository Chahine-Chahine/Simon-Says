// Global variables
const buttons = ["green", "red", "yellow" , "blue"];
const logic_pattern = []
const user_pattern = []




// Arrow function to generate the game sequence creator
let  sequenceCreator = ()=>{
let random_number = Math.floor(Math.random() * 4);
let random_color = buttons[random_number];
logic_pattern.push(random_color);
$("#" + random_color).fadeIn(100).fadeOut(100).fadeIn(100);
}

// selecting then storing the user choice 
$(".btn").click(()=>{
    // select the id attribute of the clicked button
    let user_choice = $(".btn").attr("id");
    user_pattern.push(user_choice);
})

