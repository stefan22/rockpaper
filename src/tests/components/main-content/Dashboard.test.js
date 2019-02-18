import React from 'react';
import {shallow} from 'enzyme';
import Dashboard from  '../../../components/main-content/Dashboard';
import toJSON from 'enzyme-to-json';

describe('Dashboard component', () => {
  it('should render dashboard page correctly', () => {
    const wrapper = shallow(<Dashboard />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
  it('should have class of "mid-section-wrapper"', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.find('.mid-section-wrapper').length).toBe(1);
  });

});


