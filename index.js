let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0, 
    losses: 0,
    ties: 0
};


function updateScoreElement() {
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
}

function computerPick () {
    let randomNumeber = Math.random();
    let computerMove = ''
    if (randomNumeber >= 0 && randomNumeber < 1/3) {
        computerMove = 'rock';
     } else if (randomNumeber >= 1/3 && randomNumeber < 2/3) {
        computerMove = 'paper';
     }else {
         computerMove = 'scissors';
     }
     return computerMove; //return the value of computerMove
}

function playGame(playerMove) {

    const computerMove = computerPick();

    let result = '';

    if (playerMove === 'scissors') {
        if(computerMove === 'rock') {
            result = 'you lose'
        } else if (computerMove === 'paper'){
            result = 'you win'
        } else if (computerMove === 'scissors') {
            result = 'tie'
        }
    } else if (playerMove === 'paper') {
        if(computerMove === 'rock') {
            result = 'you win'
        } else if (computerMove === 'paper'){
            result = 'tie'
        } else if (computerMove === 'scissors') {
            result = 'you lose'
        }    
    } else if (playerMove === 'rock') {
        if(computerMove === 'rock') {
            result = 'tie'
        } else if (computerMove === 'paper'){
            result = 'you lose'
        } else if (computerMove === 'scissors') {
            result = 'you win'
        }
    }
    

    if(result === 'you win') {
        score.wins += 1;
    } else if (result === 'you lose') {
      score.losses += 1  
    } else {
        score.ties += 1
    }    

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();
    document.querySelector('.js-result').innerHTML = result;
   
    document.querySelector('.js-moves').innerHTML = `You ${playerMove} - ${computerPick()} Computer`;

};


function resetScore() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
}



// scores();
