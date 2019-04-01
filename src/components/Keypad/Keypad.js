import PropTypes from 'prop-types';
import React  from 'react';
import Button from '../Button/Button';
import { arithmeticFunctions, coreFunctions, isValidFunction } from '../../helpers/calculator';

import './Keypad.css';

const Keypad = ({
  handleCalculation,
  handleClear,
  handleCommand,
  isArithmeticEnabled,
}) => {
  const handleClick = ({ target: { textContent: value }}) => {
    switch (value) {
      case 'DEL':
        handleClear();
        break;
      case '=':
        handleCalculation();
        break;
      default:
        isValidFunction(value) && handleCommand(value);
    }
  };
  return (
    <div className="keypad">
      <div className="keypad__numbers">
        {coreFunctions.map(x => (
          <div key={x} className="keypad__number-grid">
            <Button
              className="qa-key"
              label={x}
              type="primary"
              onClick={handleClick}
            />
          </div>
        ))}
      </div>
      <div className="keypad__functions">
        {arithmeticFunctions.map(x => (
          <div key={x} className="keypad__function-grid">
            <Button
              className="qa-key"
              disabled={!isArithmeticEnabled}
              label={x}
              type={x === '=' ? 'accent' : 'secondary'}
              onClick={handleClick}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

Keypad.propTypes = {
  handleCalculation: PropTypes.func.isRequired,
  handleClear: PropTypes.func.isRequired,
  handleCommand: PropTypes.func.isRequired,
  isArithmeticEnabled: PropTypes.bool.isRequired,
};

export default Keypad;
