export const arithmeticFunctions = ['=', '+', '-', '*', '/'];
export const coreFunctions = ['.', '0', 'DEL', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
export const isValidFunction = val => [...coreFunctions, ...arithmeticFunctions].includes(val);
