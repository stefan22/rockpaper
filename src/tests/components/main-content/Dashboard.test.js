import React from 'react';
import {shallow} from 'enzyme';
import Dashboard from  '../../../components/main-content/Dashboard';

describe('Dashboard component', () => {
  it('should render dashboard page correctly', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper).toMatchSnapshot();
  });
});


