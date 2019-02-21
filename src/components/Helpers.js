import React from 'react';
import currentGame from './main-content/CurrentGame';
//loading elem
export const bringBall = <div className="ball-loading text-center">Loading...</div>;

export const getWinner = (playerChoice, computerChoice) => {
  const rules = {
    rock: 'scissors',
    scissors: 'paper',
    paper: 'rock'
  };
  //player one out of the three
  if (playerChoice === computerChoice) {
    return 'draws';
  }
  //random generated
  if (computerChoice === rules[playerChoice]) {
    return 'wins';
  }

  else {
    return 'losses';
  }
};

export const getRandomChoice = () => {
  //return either rock,paper,scissors
  const choices = [ 'rock', 'paper', 'scissors' ];
  return choices[Math.floor(Math.random() * choices.length)];
};

export const startPreShow = (remove) => {
  let winnerScore;
  if(remove === 'wins' || remove === 'draws' || remove === 'losses') {
    winnerScore = remove;
  }
  let page = document.querySelector('#root .page-wrapper');
  //overlay div
  const buildOverlay = () => {
    let divWrap = document.createElement('div');
    divWrap.id = 'ovrlaywrap';
    let divOvrlay = document.createElement('div');
    divOvrlay.className = 'inner-ovrlay';
    let scoreTitle = document.createElement('h3');
    let scorePar = document.createElement('p');
    scorePar.className = 'score-par';
    scoreTitle.textContent = `Eric ${winnerScore}!`;
    scoreTitle.className = 'score-title text-center';
    divOvrlay.appendChild(scoreTitle);
    divOvrlay.appendChild(scorePar);
    divWrap.appendChild(divOvrlay);

    document.body.appendChild(divWrap);
  };
  //removed on timer
  if (remove === 'remove-class') {
    page.classList.remove('bring-down');
    //rem overlay from dom
    document.getElementById('ovrlaywrap').parentElement.removeChild(document.getElementById('ovrlaywrap'));
  } else {
    page.classList.add('bring-down');
    buildOverlay();
  }
};


