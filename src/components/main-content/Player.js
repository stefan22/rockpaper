import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import {withStyles} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import '../../scss/markets.scss';

const styles = {
  avatar: {
    margin: '10px',
  },
  card: {
    minWidth: '275px',
    padding: '10px',
    cursor: 'pointer',
  },
  span: {
    color: '#2196F3',
  },
  bigAvatar: {
    margin: '10px',
    width: '60px',
    height: '60px',
  },
};

const Player = (props) => {
  let {classes,name,imgsrc,playerNumber} = props;
  return (
    <section className='col-4 players-avatar'>
      <Card className={classes.card}
        onClick={() => props.onPlayerChoice(props.playerNumber)}
      >
        <Grid container justify="center" alignItems="center">
          <Avatar alt={name} src={imgsrc} className={classes.bigAvatar} />
          <span className={classes.span}>{props.name}</span>

        </Grid>
        <span>as player {playerNumber}</span>
      </Card>
    </section>
  );
};

Player.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Player);
