import React from 'react';
import {shallow} from 'enzyme';
import Header from '../../components/NotFound';

describe('NotFound page component', () => {
  it('should render NotFound page correctly', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });

});
