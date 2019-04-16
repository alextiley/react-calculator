# react-calculator

A simple calculator written with React. 

**Version**: 
`627d7be039e0085025a51d47e42bdd970409ec1c`

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Pre-requisites

Please ensure you have the following installed:

* `node ~10.15.1`
* `yarn ^1.12.0`

## Available Scripts

In the project directory, you can run:

### `yarn start`

Serves the app in production mode.<br>
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn dev`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.


## Potential improvements

* Change how state is held
  -> Store string groups on an array in state, e.g. "groups" => "3.1" (join whenever another number or decimal is pressed)
  -> Store a single operator function on another state property. Whenever one of [+,-,*,/] is pressed, the value is overwritten.
  -> When equals is pressed, parse both groups as numbers. Switch on the operator and call a Math function (don't use eval). Clear operator, reset groups to the [result].

* Remove use of the dangerous eval() method, either by performing calculations in code, or by using a library such as Big.js.

* Consider removing array of arithmetic functions, instead hard-code buttons and assign specific handlers to each.

* Don't restrict which buttons can be pressed. A physical calculator can't possibly "disable" a button, it would instead register that command instead.
  -> Handle scenarios where multiple operators are pressed in succession
  
* Allow octal numbers (parseInt on any input), e.g. 01 + 01

