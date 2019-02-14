import React from 'react';
import {shallow} from 'enzyme';
import Dashboard from  '../../../components/main-content/Dashboard';

test('should render Dashboard correctly', () => {
  const wrapper = shallow(<Dashboard />);
  expect(wrapper).toMatchSnapshot();
});


