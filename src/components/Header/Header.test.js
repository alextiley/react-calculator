import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('header', () => {
  it('should render the Logo component', () => {
    const wrapper = shallow(
      <Header />
    );
    expect(wrapper.find('Logo').length).toEqual(1);
  })
});
