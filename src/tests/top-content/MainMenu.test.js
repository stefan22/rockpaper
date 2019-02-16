import React from 'react';
import {shallow, mount, render} from 'enzyme';
import toJSON from 'enzyme-to-json';
import MainMenu from '../../components/top-content/MainMenu';

describe('MainMenu component', () => {
  it('should render MainMenu component correctly', () => {
    const wrapper = shallow(<MainMenu />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });


});
