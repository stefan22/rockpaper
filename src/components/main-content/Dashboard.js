import React, {Component} from 'react';
import Header from './Header';
import {bringBall, getWinner, getRandomChoice} from '../Helpers';
import Player from './Player';
import InfoCard from '../InfoCard';
import HandButton from './game-board/HandButton';
//images
import eric from '../../images/eric.jpg';
import kyle from '../../images/kyle.jpg';
import computer from '../../images/computer.jpg';
import paper from '../../images/paper.png';
import rock from '../../images/rock.png';
import scissors from '../../images/scissors.png';
//scss
import '../../scss/markets.scss';


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      wins: 0,
      losses: 0,
      draws: 0,
      games: 0,
      playerChoice: '',
      currentGameResult: null,
      turn: 'choose an opponent',
      count: 1,
      choice1: undefined,
      choice2: undefined,
    };

    this.onPlayerHandPick = this.onPlayerHandPick.bind(this);
    this.onPlayerChoice = this.onPlayerChoice.bind(this);
    this.handleGameReset = this.handleGameReset.bind(this);
  }

  componentDidMount() {
    this.setState({//bringBall
      isLoading: true,
    });
    setTimeout(() => {//optional
      this.setState((prevState) => ({
        isLoading: !prevState.isLoading,
      }));
    },2000);

  }

  onPlayerChoice(res) {
    if(res === 1) {
      this.setState({
        playerChoice: res,
      });
    } else
    if(res === 2) {
      this.setState({
        playerChoice: res,
        turn: 'Eric',
      });
    } else
    if(res === 3) {
      this.setState({
        playerChoice: res,
        turn: 'you\'re playing computer atm',
      });
    }
  }

  onPlayerHandPick(choice) {
    let {playerChoice} = this.state;
    let result = '';

    if(playerChoice === 3) {//computer
      let randomChoice = getRandomChoice();
      result = getWinner(choice, randomChoice);
      this.setState((prevState) => {
        if (result === 'wins') {
          return {
            wins: prevState[result] + 1,
            games: prevState.games + 1,
          };
        }
        else if (result === 'draws') {
          return {
            draws: prevState[result] + 1,
            games: prevState.games + 1,
          };
        }
        else if (result === 'losses') {
          return {
            losses: prevState[result] + 1,
            games: prevState.games + 1,
          };
        }
      });
      this.setState({
        currentGameResult: result,
      });
    }

    if(playerChoice === 2) {//another person
      let {count, choice1} = this.state;
      if(count === 1) {
        return this.setState(prevState => ({
          turn: 'Kyle',
          count: prevState.count + 1,
          choice1: choice,
          choice2: undefined,
        }));
      }
      else if(count === 2) {
        this.setState({
          turn: 'Eric',
          count: 1,
        });
      }

      result = getWinner(choice1,choice);
      this.setState((prevState) => {
        if (result === 'wins') {
          return {
            wins: prevState[result] + 1,
            games: prevState.games + 1,
          };
        }
        else if (result === 'draws') {
          return {
            draws: prevState[result] + 1,
            games: prevState.games + 1,
          };
        }
        else if (result === 'losses') {
          return {
            losses: prevState[result] + 1,
            games: prevState.games + 1,
          };
        }
      });

      this.setState({
        currentGameResult: result,
        turn: 'Eric. (Starts again.)',
      });
    }
  }

  handleGameReset() {
    this.setState({
      games: 0,
      wins: 0,
      losses:0,
      draws:0,
      turn: 'game has been reset',
      currentGameResult: null,
    });
  }

  render() {
    const {isLoading,wins,losses,draws,
      games,turn,currentGameResult} = this.state;
    return (
      <div className=
        {`mid-section-wrapper ${(isLoading) ? '' : 'loading'}`}>
        {(isLoading) ? bringBall :
          <div className='inner-wrapper'>
            <Header
              wins={wins}
              losses={losses}
              draws={draws}
              games={games}
              turn={turn}
              currentGameResult={currentGameResult}
            />

            <section className='midtop'>
              <div className='container'>
                <div className="row">
                  <div className='col-12'>
                    <Player
                      onPlayerChoice={this.onPlayerChoice}
                      name={'Eric Cartman'}
                      imgsrc={eric}
                      playerNumber={1}
                    />

                    <InfoCard
                      handleGameReset={this.handleGameReset}
                    />

                    <Player
                      onPlayerChoice={this.onPlayerChoice}
                      name={'Kyle Broflovski'}
                      imgsrc={kyle}
                      playerNumber={2}
                    />
                    <Player
                      onPlayerChoice={this.onPlayerChoice}
                      name={'Computer'}
                      imgsrc={computer}
                      playerNumber={3}
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className='midbottom'>
              <div className='container'>
                <div className="row">
                  <div className='col-12'>
                    <HandButton
                      choice={'paper'}
                      imgsrc={paper}
                      hand={'Paper'}
                      onPlayerHandPick={this.onPlayerHandPick}
                    />
                    <HandButton
                      choice={'rock'}
                      imgsrc={rock}
                      hand={'Rock'}
                      onPlayerHandPick={this.onPlayerHandPick}
                    />
                    <HandButton
                      choice={'scissors'}
                      imgsrc={scissors}
                      hand={'Scissors'}
                      onPlayerHandPick={this.onPlayerHandPick}
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        }

      </div>
    );
  }
}


export default Dashboard;
