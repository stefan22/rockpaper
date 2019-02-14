import React from 'react';

const CurrentGame = ({currentGameResult}) => {
  if(currentGameResult !== null) {
    if(currentGameResult === 'wins') {
      return (
        <div className='current-game'>
          <h3 className='text-center'>You won!</h3>
        </div>
      );
    } else
    if(currentGameResult === 'losses') {
      return (
        <div className='current-game'>
          <h3 className='text-center'>You lost!</h3>
        </div>
      );
    } else
    if(currentGameResult === 'draws') {
      return (
        <div className='current-game'>
          <h3 className='text-center'>You draw!</h3>
        </div>
      );
    }
  }
  else if(currentGameResult === null) {
    return <h3 className='text-center'>Click on an oponent, and pick your hand to begin.</h3>;
  }
};



export default CurrentGame;
