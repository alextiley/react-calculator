import React from 'react';
import { shallow } from 'enzyme';
import DisplayPanel from './DisplayPanel';

describe('DisplayPanel', () => {
  it('renders text on the display', () => {
    const wrapper = shallow(
      <DisplayPanel text="1+2+3+4" />,
    );
    expect(wrapper.text()).toEqual('1+2+3+4');
  });
});
