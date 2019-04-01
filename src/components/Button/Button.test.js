import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button', () => {
  it('renders a label', () => {
    const wrapper = shallow(
      <Button label="5" type="primary" />,
    );
    expect(wrapper.text()).toEqual('5');
  });

  it('supports the primary theme colour', () => {
    const wrapper = shallow(
      <Button className="qa-button" label="5" type="primary" />,
    );
    expect(wrapper.find('.qa-button').hasClass('button--primary')).toEqual(true);
  });

  it('supports the secondary theme colour', () => {
    const wrapper = shallow(
      <Button className="qa-button" label="5" type="secondary" />,
    );
    expect(wrapper.find('.qa-button').hasClass('button--secondary')).toEqual(true);
  });

  it('supports the accent theme colour', () => {
    const wrapper = shallow(
      <Button className="qa-button" label="5" type="accent" />,
    );
    expect(wrapper.find('.qa-button').hasClass('button--accent')).toEqual(true);
  });

  it('supports click events', () => {
    const mockClickHandler = jest.fn();
    const wrapper = shallow(
      <Button label="5" onClick={mockClickHandler} type="primary" />,
    );
    wrapper.simulate('click');
    expect(mockClickHandler).toHaveBeenCalled();
  });
});
