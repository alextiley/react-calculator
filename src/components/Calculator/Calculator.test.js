import React from 'react';
import { mount, shallow } from 'enzyme';
import Calculator from './Calculator';
import { getKeyFromKeypad } from '../../helpers/test-utils';

describe('Calculator (unit)', () => {
  it('renders a display panel', () => {
    const wrapper = shallow(
      <Calculator />,
    );
    expect(wrapper.find('DisplayPanel').length).toEqual(1);
  });

  it('renders a keypad', () => {
    const wrapper = shallow(
      <Calculator />,
    );
    expect(wrapper.find('Keypad').length).toEqual(1);
  });
});

describe('Calculator (integration)', () => {
  it('displays entered commands on the display panel', () => {
    const wrapper = mount(
      <Calculator />,
    );
    getKeyFromKeypad('2', wrapper).simulate('click');
    getKeyFromKeypad('2', wrapper).simulate('click');
    getKeyFromKeypad('/', wrapper).simulate('click');
    getKeyFromKeypad('2', wrapper).simulate('click');

    expect(wrapper.find('.qa-display-panel').text()).toEqual('22/2');
  });

  it('supports addition', () => {
    const wrapper = mount(
      <Calculator />,
    );
    getKeyFromKeypad('5', wrapper).simulate('click');
    getKeyFromKeypad('+', wrapper).simulate('click');
    getKeyFromKeypad('8', wrapper).simulate('click');
    getKeyFromKeypad('=', wrapper).simulate('click');

    expect(wrapper.find('.qa-display-panel').text()).toEqual('13');
  });

  it('supports subtraction', () => {
    const wrapper = mount(
      <Calculator />,
    );
    getKeyFromKeypad('1', wrapper).simulate('click');
    getKeyFromKeypad('0', wrapper).simulate('click');
    getKeyFromKeypad('0', wrapper).simulate('click');
    getKeyFromKeypad('-', wrapper).simulate('click');
    getKeyFromKeypad('5', wrapper).simulate('click');
    getKeyFromKeypad('0', wrapper).simulate('click');
    getKeyFromKeypad('=', wrapper).simulate('click');

    expect(wrapper.find('.qa-display-panel').text()).toEqual('50');
  });

  it('supports multiplication', () => {
    const wrapper = mount(
      <Calculator />,
    );
    getKeyFromKeypad('5', wrapper).simulate('click');
    getKeyFromKeypad('0', wrapper).simulate('click');
    getKeyFromKeypad('0', wrapper).simulate('click');
    getKeyFromKeypad('0', wrapper).simulate('click');
    getKeyFromKeypad('*', wrapper).simulate('click');
    getKeyFromKeypad('3', wrapper).simulate('click');
    getKeyFromKeypad('=', wrapper).simulate('click');

    expect(wrapper.find('.qa-display-panel').text()).toEqual('15000');
  });

  it('supports division', () => {
    const wrapper = mount(
      <Calculator />,
    );
    getKeyFromKeypad('1', wrapper).simulate('click');
    getKeyFromKeypad('0', wrapper).simulate('click');
    getKeyFromKeypad('0', wrapper).simulate('click');
    getKeyFromKeypad('0', wrapper).simulate('click');
    getKeyFromKeypad('/', wrapper).simulate('click');
    getKeyFromKeypad('4', wrapper).simulate('click');
    getKeyFromKeypad('=', wrapper).simulate('click');

    expect(wrapper.find('.qa-display-panel').text()).toEqual('250');
  });

  it('allows clearing of the screen', () => {
    const wrapper = mount(
      <Calculator />,
    );
    getKeyFromKeypad('9', wrapper).simulate('click');
    getKeyFromKeypad('9', wrapper).simulate('click');
    getKeyFromKeypad('9', wrapper).simulate('click');
    getKeyFromKeypad('9', wrapper).simulate('click');
    getKeyFromKeypad('9', wrapper).simulate('click');
    getKeyFromKeypad('9', wrapper).simulate('click');
    getKeyFromKeypad('DEL', wrapper).simulate('click');

    expect(wrapper.find('.qa-display-panel').text()).toEqual('');
  });

  it('supports decimal numbers with a leading integer', () => {
    const wrapper = mount(
      <Calculator />,
    );
    getKeyFromKeypad('1', wrapper).simulate('click');
    getKeyFromKeypad('.', wrapper).simulate('click');
    getKeyFromKeypad('5', wrapper).simulate('click');
    getKeyFromKeypad('*', wrapper).simulate('click');
    getKeyFromKeypad('3', wrapper).simulate('click');
    getKeyFromKeypad('=', wrapper).simulate('click');

    expect(wrapper.find('.qa-display-panel').text()).toEqual('4.5');
  });

  it('supports decimal numbers without a leading integer', () => {
    const wrapper = mount(
      <Calculator />,
    );
    getKeyFromKeypad('.', wrapper).simulate('click');
    getKeyFromKeypad('5', wrapper).simulate('click');
    getKeyFromKeypad('*', wrapper).simulate('click');
    getKeyFromKeypad('3', wrapper).simulate('click');
    getKeyFromKeypad('=', wrapper).simulate('click');

    expect(wrapper.find('.qa-display-panel').text()).toEqual('1.5');
  });

  it('prevents input of operators if a number hasn\'t been entered first', () => {
    const wrapper = mount(
      <Calculator />,
    );
    getKeyFromKeypad('*', wrapper).simulate('click');
    getKeyFromKeypad('/', wrapper).simulate('click');
    getKeyFromKeypad('+', wrapper).simulate('click');
    getKeyFromKeypad('-', wrapper).simulate('click');

    expect(wrapper.find('.qa-display-panel').text()).toEqual('');

    getKeyFromKeypad('=', wrapper).simulate('click');

    expect(wrapper.find('.qa-display-panel').text()).toEqual('');
  });
});
