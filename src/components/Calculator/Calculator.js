import React, { useState } from 'react';
import DisplayPanel from '../DisplayPanel/DisplayPanel';
import Header from '../Header/Header';
import Keypad from '../Keypad/Keypad';

import './Calculator.css';

const Calculator = () => {
  const [hasError, setHasError] = useState(false);
  const [commands, setCommands] = useState([]);
  const prevCommand = commands[commands.length - 1];

  return (
    <div className="calculator">
      <DisplayPanel text={hasError ? 'Not a number' : commands.join('')} />
      <Keypad
        handleClear={() => {
          setCommands([]);
          setHasError(false);
        }}
        handleCalculation={() => {
          const result = eval(commands.join(''));

          if (Number.isFinite(result)) {
            setHasError(false);
            setCommands([result.toString()]);
          } else {
            setHasError(true);
            setCommands([]);
          }
        }}
        handleCommand={(command) => {
          setHasError(false);
          setCommands([ ...commands, command ]);
        }}
        isArithmeticEnabled={!isNaN(Number(prevCommand))}
      />
    </div>
  );
};

export default Calculator;
