import React from 'react';
import {shallow} from 'enzyme';
import Header from '../../../components/main-content/Header';

test('should render Header correctly', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});
