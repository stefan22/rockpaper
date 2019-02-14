import React from 'react';
import GameBoard from './game-board/GameBoard';
import CurrentGame from './CurrentGame';
import '../../scss/header.scss';

const Header = (props) => {
  let {wins,losses,draws,games,turn,currentGameResult} = props;
  return (
    <section className='top-score'>
      <div className='container'>
        <div className="row">
          <div className='col-12'>
            <div className='container'>
              <CurrentGame
                currentGameResult={currentGameResult}
              />
              <GameBoard
                wins={wins}
                losses={losses}
                draws={draws}
                games={games}
                turn={turn}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );

};

export default Header;
