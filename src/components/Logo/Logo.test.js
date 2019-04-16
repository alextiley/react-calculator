import { shallow } from 'enzyme';
import React from 'react';
import Logo from './Logo';

describe('Logo', () => {
  it('should render the equal experts logo', () => {
    const wrapper = shallow(
      <Logo />
    );

    expect(wrapper.find('.qa-logo').length).toEqual(1);
  });
});
