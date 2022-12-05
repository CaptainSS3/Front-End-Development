/* 
Rock paper scissors 
Game takes place in the future!, where AI has become a huge part of our lives
a world where people would marry robots, and humanity is really worried about AI taking over the world!
this game would indicate how smart AI is getting and if they will be able to!
*/
let round = 0;
let player_points = 0;
let pc_points= 0;
function computer_play(){
    let x = Math.floor(Math.random() * 3);
    switch(x) {
        case 0:
            return "rock"
          break;
        case 1:
            return "paper"
          break;

        case 2:
            return "scissors"
            break;
        default:
            console.log("broken :(");
      } 
}
function player_selection(){
    let hand = prompt( `Round ${round} , What would you like to play ?`);
    result = hand.toLowerCase().trim();
    result2 = result.replace(" ", "");
    return result2;
}
function play_round(){
    let pc = computer_play();
    let player = player_selection();
    check_who_won(pc, player);
}
function check_who_won(hand_pc,hand_player){
    if(hand_pc== "rock" && hand_player=="rock"){
        console.log("Computer has player rock you played rock, Its a TIE!");
    }
    else if(hand_pc== "rock" && hand_player=="paper"){
        console.log("Computer has played rock you played paper, You win!");
        player_points++;
    }
    else if(hand_pc== "rock" && hand_player=="scissors"){
        console.log("Computer has played rock you played scissors, You lose!");
        pc_points++;
    }
    else if(hand_pc== "paper" && hand_player=="rock"){
        console.log("Computer has played paper you played rock, You lose!");
        pc_points++;
    }
    else if(hand_pc== "paper" && hand_player=="paper"){ 
        console.log("Computer has played paper you played paper, Its a TIE!");
    }
    else if(hand_pc== "paper" && hand_player=="scissors"){
        console.log("Computer has played paper you played scissors, You win!");
        player_points++;
    }
    else if(hand_pc== "scissors" && hand_player=="rock"){
        console.log("Computer has played scissors you played rock, You win!");
        player_points++;
    }
    else if(hand_pc== "scissors" && hand_player=="paper"){
        console.log("Computer has played scissors you played paper, You lose!");
        pc_points++;
    }
    else if(hand_pc== "scissors" && hand_player=="scissors"){
        console.log("Computer has played scissors you played scissors, Its a TIE!");
    }
    else{
        console.log("No hand was played, round will be skipped!")
    }
}
function game(){
    for (let i = 0; i < 5; i++) {
        round++;
        play_round();
    }
    console.log(`The computer has ${pc_points} points, and you have ${player_points} points`)
    if(pc_points < player_points){
        console.log("Congradulations!, you have won. SKYNET has no chance now!");
    }
    if(pc_points > player_points){
        console.log("Computer beat you, domestic abuse has accured, fbm");
    }
    if(pc_points == player_points){
        console.log("You tied with the computer!, maybe AI is not going to run the world after all!");
    }
}
prompt("Would you like to face the computer in a Rock paper scissors game?", "Yes iam a god at RPS");
game();