let rock = "Rock";
let paper = " Paper";
let sicssors = "Siscssors ";
let num;


function get_ai_choies(){
    num = Math.floor(Math.random()*3 +1);
   // console.log(num + " here is num")
   let ansawer = (num == 1)? rock : (num == 2) ? paper : (num == 3) ? sicssors: "nothing came out"
   return ansawer;
}

function round_of(playerSelect,AI_Select){

if(playerSelect == rock && AI_Select == rock 
    || playerSelect == paper && AI_Select == paper 
    || playerSelect == sicssors && AI_Select == sicssors)
{   
    console.log("Its a tie");
}

else if(playerSelect == rock && AI_Select == paper 
        || playerSelect == paper && AI_Select == rock)
{
console.log("Paper wins");
console.log("rock looses");
}


else if(playerSelect == sicssors && AI_Select == rock 
        || playerSelect == rock && AI_Select == sicssors)
{
    console.log("Rock wins");
    console.log("Sicssors looses");
}

else if(playerSelect == paper && AI_Select == sicssors 
        || playerSelect == sicssors && AI_Select == paper)
{
    console.log("Sicssors win");
    console.log("Paper losses");

}
// players ansawer should be aginst the AI
// it should be able to se the diffence beteewn cap or not(casesenetive)

}
const playerSelect = rock;
const AI_Select = get_ai_choies();


console.log(round_of(playerSelect,AI_Select));
//console.log(get_ai_choies())