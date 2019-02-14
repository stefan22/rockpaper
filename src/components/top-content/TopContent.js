import React, {Component} from 'react';
import MainMenu from './MainMenu';
import '../../scss/main-content.scss';

class TopContent extends Component {
  render() {
    return (
      <div className='top-section-wrapper'>
        <MainMenu />
      </div>
    );
  }
}

export default TopContent;
