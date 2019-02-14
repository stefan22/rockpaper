import React, {Component} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {boardData} from './boardData';
import '../../../scss/markets.scss';
import '../../../scss/boardgame.scss';

class GameBoard extends Component {
  constructor(props) {
    super(props);
    this.state ={
      board:[],
    };
    this.getBoard = this.getBoard.bind(this);
  }

  componentDidMount() {
    this.getBoard();
  }

  getBoard() {
    let board = boardData();
    return this.setState({
      board,
    });
  }

  render() {
    const {nGames,nWins,nLosses,nDraws,nTurn} = this.state.board;
    let {games,turn,wins,draws,losses} = this.props;

    return (
      <Paper className='paper-root'>

        <Table id='rpc-table'>
          <TableHead>
            <TableRow>
              <TableCell className='ngames' align='left'>{nGames}</TableCell>
              <TableCell className='wins' align='left'>{nWins}</TableCell>
              <TableCell className='losses' align='left'>{nLosses}</TableCell>
              <TableCell className='draws' align='left'>{nDraws}</TableCell>
              <TableCell className='turn' align='left'>{nTurn}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              className='score-row'>
              <TableCell className='games' align='left'>
                {games}
              </TableCell>
              <TableCell className='wins' align='left'>
                {wins}
              </TableCell>
              <TableCell className='losses' align='left'>
                {losses}
              </TableCell>
              <TableCell className='draws' align='left'>
                {draws}
              </TableCell>
              <TableCell className='isturn' align='left'>
                {turn}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    );
  }
}



export default GameBoard;








