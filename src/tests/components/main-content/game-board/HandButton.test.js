import React from 'react';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import HandButton from  '../../../../components/main-content/game-board/HandButton';

describe('HandButton component', () => {
  it('should render HandButton correctly', () => {
    const wrapper = shallow(<HandButton />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
  it('should have a class of "game-hand"', () => {
    const wrapper = shallow(<HandButton />);
    expect(wrapper.find('.game-hand').length).toBe(1);
  });

});


