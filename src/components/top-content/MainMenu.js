import React from 'react';
import {NavLink} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import hand from '../../images/handshake.png';
import '../../scss/main-menu.scss';

const MainMenu = () => (
  <section className='topmenu'>
    <div className='full-container'>
      <AppBar position="static">
        <Toolbar>
          <IconButton className='topbar-icon' color="inherit">
            <img src={hand} alt='handshake' width='960' />
          </IconButton>
          <NavLink className='nav topbar-home'
            to='/' activeClassName='is-active' exact={true}>
            <Typography variant="h6" color="inherit" className='topbar-grow'>
              Rock•Paper•Scissors
            </Typography>
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  </section>
);



export default MainMenu;
