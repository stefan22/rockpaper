import React from 'react';

//loading elem
export const bringBall =  <div className='ball-loading'>Loading...</div>;

export const getWinner = (playerChoice, computerChoice, player2Choice) => {
  const rules = {
    'rock': 'scissors',
    'scissors': 'paper',
    'paper': 'rock',
  };
  //player one out of the three
  if (playerChoice === computerChoice)  {
    return 'draws';
  }
  //random generated
  if (computerChoice === rules[playerChoice]) {
    return 'wins';
  }
  //player2
  if( playerChoice === player2Choice) {
    return 'draws';
  }
  if(player2Choice === rules[playerChoice]) {
    return 'wins';
  }
  else {
    return 'losses';
  }

};

export const getRandomChoice = () => {//return either rock,paper,scissors
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
};


// onPlayerHandPick(choice) {
//   let {playerChoice} = this.state;
//   let result = '';

//   if(playerChoice === 3) {//computer
//     let randomChoice = getRandomChoice();
//     result = getWinner(choice, randomChoice);

//     this.setState((prevState) => {
//       if (result === 'wins') {
//         return {
//           wins: prevState[result] + 1,
//           games: prevState.games + 1,
//         };
//       }
//       else if (result === 'draws') {
//         return {
//           draws: prevState[result] + 1,
//           games: prevState.games + 1,
//         };
//       }
//       else if (result === 'losses') {
//         return {
//           losses: prevState[result] + 1,
//           games: prevState.games + 1,
//         };
//       }
//     });

//     this.setState({
//       currentGameResult: result,
//     });
//   }

//   if(playerChoice === 2) {//another person
//     let {count, choice1} = this.state;

//     if(count === 1) {
//       return this.setState(prevState => ({
//         turn: 'Kyle',
//         count: prevState.count + 1,
//         choice1: choice,
//         choice2: undefined,
//       }));
//     }
//     else if(count === 2) {
//       this.setState({
//         turn: 'Eric',
//         count: 1,
//       });
//     }

//     result = getWinner(choice1,choice);

//     this.setState((prevState) => {
//       if (result === 'wins') {
//         return {
//           wins: prevState[result] + 1,
//           games: prevState.games + 1,
//         };
//       }
//       else if (result === 'draws') {
//         return {
//           draws: prevState[result] + 1,
//           games: prevState.games + 1,
//         };
//       }
//       else if (result === 'losses') {
//         return {
//           losses: prevState[result] + 1,
//           games: prevState.games + 1,
//         };
//       }
//     });

//     this.setState({
//       currentGameResult: result,
//       turn: 'Eric. (Starts again.)',
//     });

//   }


// }
