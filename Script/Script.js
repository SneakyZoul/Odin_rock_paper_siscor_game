let num;
let playerScore =0; 
let aiScore =0; 
let rounds = 5;



function get_ai_choies(){
    num = Math.floor(Math.random()*3 +1);
   // console.log(num + " here is num")
   let ansawer = (num == 1)? "rock" : (num == 2) ? "paper" : (num == 3) ? "scissors": "nothing came out"
   return ansawer;
}


function round_of()
{

    const playerSelect = prompt().toLowerCase();
    const AI_Select = get_ai_choies();
    
    if(playerSelect === AI_Select )
    {   
    console.log("Its a tie");
    }

    else if(playerSelect == "rock")
    {
        if(AI_Select == "paper"){
          console.log("Ai win against rock,it chose paper")
          aiScore++;
        }else{
           console.log("you win against scissors ");
          playerScore++
        }
    }

    else if(playerSelect == "scissors")
    {
        if(AI_Select == "rock"){
        console.log("Ai win against scissors it chose rock");
        aiScore++;
        }else{
        console.log("you win against paper");
        playerScore++;
        }
    }

    else if(playerSelect == "paper")
    {   
        if(AI_Select == "scissors"){
        console.log("AI win against paper it chose scissors")
        aiScore ++;
        }else{
        console.log("you win against rock");
        playerScore++;
        }
    } 
} 


for(let i = 0; i < rounds; i++)
{
    round_of();    
}




console.log(round_of());
console.log("here is player score " + playerScore);
console.log("Here is AI score "+aiScore);

//console.log(get_ai_choies())