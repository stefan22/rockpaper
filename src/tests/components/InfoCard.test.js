import React from 'react';
import {shallow} from 'enzyme';
import InfoCard from '../../components/InfoCard';

test('should render InfoCard correctly', () => {
  const wrapper = shallow(<InfoCard />);
  expect(wrapper).toMatchSnapshot();
});
