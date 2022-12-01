/* 
Rock paper scissors 
*/
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
          console.log("broken :(")
      } 
}
function player_selection(){
    let hand = prompt("What would you like to play?");
    result = hand.toLowerCase();
    return result;
}
function play_round(){
    let hand_pc = computer_play();
    let hand_player = player_selection();
    if(hand_pc== "rock" && hand_player=="rock"){
        console.log("Computer has player rock you played rock, Its a TIE!");
    }
    if(hand_pc== "rock" && hand_player=="paper"){
        console.log("Computer has played rock you played paper, You win!");
    }
    if(hand_pc== "rock" && hand_player=="scissors"){
        console.log("Computer has played rock you played scissors, You lose!");
    }
    if(hand_pc== "paper" && hand_player=="rock"){
        console.log("Computer has played paper you played rock, You lose!");
    }
    if(hand_pc== "paper" && hand_player=="paper"){
        console.log("Computer has played paper you played paper, Its a TIE!");
    }
    if(hand_pc== "paper" && hand_player=="scissors"){
        console.log("Computer has played paper you played scissors, You win!");
    }
    if(hand_pc== "scissors" && hand_player=="rock"){
        console.log("Computer has played scissors you played rock, You win!");
    }
    if(hand_pc== "scissors" && hand_player=="paper"){
        console.log("Computer has played scissors you played paper, You lose!");
    }
    if(hand_pc== "scissors" && hand_player=="scissors"){
        console.log("Computer has played scissors you played scissors, Its a TIE!");
    }
}
function game(){
    for (let i = 0; i < 5; i++) {
        play_round();
    }
}
game();