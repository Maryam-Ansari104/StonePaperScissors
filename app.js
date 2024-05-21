let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector("#msg");
//userScore ko access ..
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");


const gencompChoice = () => {
  const options = ['rock', 'paper', 'scissors'];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drowGame = () => {
  msg.innerText = "Game was drow, Play Again";
  msg.style.backgroundColor = "#081b31";
};


const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    // if user win ...score++ 
    userScore++
    userScorepara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "Green";
  } else {
    compScore++
    compScorepara.innerText = compScore;

    msg.innerText= `You lost ${compChoice} beats Your ${userChoice}`;
    msg.style.backgroundColor = "Red";
  }
};


const playGame = (userChoice) => {
  console.log('user choice =', userChoice);
  //generate computer choice
  const compChoice = gencompChoice();
  

  if (userChoice === compChoice) {
    //Draw game
    drowGame();
  } else {
    let userWin = true;
    if (userChoice === 'rock') {
      //scissors,paper
      userWin = compChoice === 'paper' ? false : true;
    } else if (userChoice === 'paper') {
      //rock, scissors
      userWin = compChoice === 'scissors' ? false : true;
    } else {
      //rock, paper
      userWin = compChoice === 'rock' ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener('click', () => {
    const userChoice = choice.getAttribute('Id');

    playGame(userChoice);
  });
});
