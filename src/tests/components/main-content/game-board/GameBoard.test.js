import React from 'react';
import {shallow} from 'enzyme';
import GameBoard from  '../../../../components/main-content/game-board/GameBoard';
import {boardData} from '../../../../components/main-content/game-board/boardData';

describe('GameBoard component', () => {
  it('should have "Game/Wins/Losses/Draws and Turn as column titles"', () => {
    const wrapper = shallow(<GameBoard boardData={boardData} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should have table id of "rpc-table"', () => {
    const wrapper = shallow(<GameBoard />);
    expect(wrapper.find('#rpc-table').length).toBe(1);
  });



});


