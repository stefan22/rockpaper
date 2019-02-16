import React from 'react';
import {shallow} from 'enzyme';
import HandButton from  '../../../../components/main-content/game-board/HandButton';

describe('HandButton component', () => {
  it('should render HandButton correctly', () => {
    const wrapper = shallow(<HandButton />);
    expect(wrapper).toMatchSnapshot();
  });

});


