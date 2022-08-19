//assigns a string value to represent the computer's choice
function getComputerChoice() {
  //randomly generate number 0-2
  randNum = Math.floor(Math.random()*3);
  //return computer selection
  if(randNum==0){
    return 'Rock';
  }
  else if(randNum==1){
    return 'Paper';
  }
  else{
    return 'Scissors';
  }
}

//returns outcome relative to the user 
function getResult(playerChoice, computerChoice) {
  
  if(playerChoice=='Rock'){
    if(computerChoice=='Rock'){
      return 0;
    }
    else if(computerChoice=='Paper'){
      return -1;
    }
    else{
      return 1;
    }
  }
  else if(playerChoice=='Paper'){
    if(computerChoice=='Rock'){
      return 1;
    }
    else if(computerChoice=='Paper'){
      return 0;
    }
    else{
      return -1;
    }
  }
  else{
    if(computerChoice=='Rock'){
      return -1;
    }
    else if(computerChoice=='Paper'){
      return 1;
    }
    else{
      return 0;
    }
  }
}


function showResult(score, playerChoice, computerChoice) {
  //display hand that was played
  document.getElementById('hands').innerText = `${playerChoice} vs. ${computerChoice}`;
  //display outcome of individual hand
   if(score==1){
      document.getElementById('result').innerText = "Congratulations! You won 🥳";
    }
  else if(score==0){
    document.getElementById('result').innerText = "It's a draw 🤷‍♂️";
  }  
  else{
    document.getElementById('result').innerText = "Tough luck. You lost 😪";
  }
  //convert the current total score to a num
  currentScore = Number(document.getElementById('player-score').innerText);
  //increment or decrement if win or loss
  if(score==1){
    currentScore++;
  }
  else if(score==-1){
    currentScore--;
  }
  //display new total score
  document.getElementById('player-score').innerText = String(currentScore); 
}

//executes when a player button is pressed
function onClickRPS(playerChoice) {
  temp = getComputerChoice();
  result = getResult(playerChoice, temp);
  showResult(result, playerChoice, temp);
}


//contains associations between button clicks and execution of code
function playGame() {
  buttons = document.querySelectorAll(".rpsButton");

  buttons.forEach(ele => {
    ele.onclick = () => {
      if(ele.value=="Rock"){
        onClickRPS('Rock');
      }
      else if(ele.value=="Paper"){
        onClickRPS('Paper');
      }
      else{
        onClickRPS('Scissors');
      }
    }
  });

  document.getElementById('endGameButton').onclick = () => {
    endGame();
  }

}

//eleminate all current displayed strings
function endGame() {
  document.getElementById('result').innerText = "";
  document.getElementById('hands').innerText = "";
  document.getElementById('player-score').innerText = "";
}

playGame()