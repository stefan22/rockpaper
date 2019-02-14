import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import timeout from '../images/timeout.png';

const styles = {
  card: {
    maxWidth: '100%',
    padding: '10px',
  },
  media: {
    height: '140px',
    maxWidth: '43%',
    margin: '0 auto',
  },
  span: {
    color: '#2196F3',
  }
};

function InfoCard(props) {
  const {classes} = props;
  return (
    <section className='col-4'>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={timeout}
            title={timeout}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Game Rules:
            </Typography>
            <Typography component="p">
              • <span className={classes.span}>YOU</span> are
                Eric Cartman.<br />
              • Choose your <span className={classes.span}>OPPONENT
              </span> from your right <span className={classes.span}>FIRST
              </span>. <br />
              • <span className={classes.span}>PICK</span> your hand
              below to play the game.<br />
              • RESET game <span className={classes.span}>BEFORE
              </span> switching oponents. <br />

            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            onClick={props.handleGameReset}
            size="small" color="primary">
            Reset Game
          </Button>
        </CardActions>
      </Card>
    </section>
  );
}

InfoCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InfoCard);
