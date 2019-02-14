import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const HandButton = (props) => {

  return (
    <div className='col-4'>
      <Paper className='game-hand'>
        <img
          className='rps-button'
          onClick={() => props.onPlayerHandPick(props.choice)}
          src={props.imgsrc} alt={props.imgsrc}
        />
        <Typography className='game-name' gutterBottom variant="h4" component="h4">
          {props.hand}
        </Typography>

      </Paper>
    </div>
  );

};


export default HandButton;




