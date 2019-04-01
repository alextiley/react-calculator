import React from 'react';
import { mount, shallow } from 'enzyme';
import Keypad from './Keypad';
import { getKeyFromKeypad } from '../../helpers/test-utils';

describe('Keypad', () => {
  ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'DEL', '*', '/', '+', '-', '='].forEach(key => {
    it(`has a '${key}' key`, () => {
      const wrapper = shallow(
        <Keypad
          handleCalculation={() => {}}
          handleClear={() => {}}
          handleCommand={() => {}}
          isArithmeticEnabled={false}
        />,
      );
      expect(getKeyFromKeypad(key, wrapper).length).toEqual(1);
    });
  });

  it('supports adding commands to the calculator', () => {
    const commandMock = jest.fn();

    const wrapper = mount(
      <Keypad
        handleCalculation={() => {}}
        handleClear={() => {}}
        handleCommand={commandMock}
        isArithmeticEnabled={true}
      />,
    );

    const two = getKeyFromKeypad('2', wrapper);

    two.simulate('click');

    expect(commandMock).toHaveBeenCalled();
  });

  it('supports deleting from the calculator', () => {
    const deleteMock = jest.fn();

    const wrapper = mount(
      <Keypad
        handleCalculation={() => {}}
        handleClear={deleteMock}
        handleCommand={() => {}}
        isArithmeticEnabled={true}
      />,
    );

    getKeyFromKeypad('DEL', wrapper).simulate('click');

    expect(deleteMock).toHaveBeenCalled();
  });

  it('supports the calculation command', () => {
    const calcMock = jest.fn();

    const wrapper = mount(
      <Keypad
        handleCalculation={calcMock}
        handleClear={() => {}}
        handleCommand={() => {}}
        isArithmeticEnabled={true}
      />,
    );

    getKeyFromKeypad('=', wrapper).simulate('click');

    expect(calcMock).toHaveBeenCalled();
  });
});
