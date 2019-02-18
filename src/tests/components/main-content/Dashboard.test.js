import React from 'react';
import {shallow} from 'enzyme';
import Dashboard from  '../../../components/main-content/Dashboard';
import toJSON from 'enzyme-to-json';

describe('Dashboard component', () => {
  describe('isLoading set to true', () => {
    it('should render dashboard page correctly', () => {
      const wrapper = shallow(<Dashboard />);
      expect(toJSON(wrapper)).toMatchSnapshot();
    });
    it('should have class of "mid-section-wrapper"', () => {
      const wrapper = shallow(<Dashboard />);
      expect(wrapper.find('.mid-section-wrapper').length).toBe(1);
    });
    it('should have state "isLoading" set to true', () => {
      const wrapper = shallow(<Dashboard />);
      expect(wrapper.state('isLoading')).toBe(true);
    });

  });
  describe('isLoading set to false', () => {
    it('should render dashboard page correctly', () => {
      const wrapper = shallow(<Dashboard />);
      wrapper.setState({
        isLoading: false,
      });
      expect(toJSON(wrapper)).toMatchSnapshot();
    });
    it('should have class of "mid-section-wrapper"', () => {
      const wrapper = shallow(<Dashboard />);
      wrapper.setState({
        isLoading: false,
      });
      expect(wrapper.find('.mid-section-wrapper').length).toBe(1);
    });
    it('should have state "isLoading" set to false', () => {
      const wrapper = shallow(<Dashboard />);
      wrapper.setState({
        isLoading: false,
      });
      expect(wrapper.state('isLoading')).toBe(false);
    });

  });

});


