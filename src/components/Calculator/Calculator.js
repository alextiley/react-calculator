import React, { useState } from 'react';
import DisplayPanel from '../DisplayPanel/DisplayPanel';
import Keypad from '../Keypad/Keypad';

import './Calculator.css';

const Calculator = () => {
  const [commands, setCommands] = useState([]);
  const prevCommand = commands[commands.length - 1];

  return (
    <div className="calculator">
      <DisplayPanel text={commands.join('')} />
      <Keypad
        handleClear={() => {
          setCommands([]);
        }}
        handleCalculation={() => {
          setCommands([
            // eslint-disable-next-line
            eval(commands.join('')).toString()
          ]);
        }}
        handleCommand={(command) => {
          // @todo Improve how commands are added
          setCommands([ ...commands, command ]);
        }}
        isArithmeticEnabled={!isNaN(Number(prevCommand))}
      />
    </div>
  );
};

export default Calculator;
