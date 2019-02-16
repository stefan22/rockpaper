import React from 'react';
import {shallow} from 'enzyme';
import GameBoard from  '../../../../components/main-content/game-board/GameBoard';

describe('GameBoard component', () => {
  it('should render GameBoard correctly', () => {
    const wrapper = shallow(<GameBoard />);
    expect(wrapper).toMatchSnapshot();
  });


});


