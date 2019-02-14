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


