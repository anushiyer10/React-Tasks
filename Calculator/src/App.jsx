import { useReducer } from 'react';
import React from 'react';

import './App.css';
import './styles.css';

const ACTIONS = {
  ADD_DIGIT: 'add_digit',
  CHOOSE_OPERATION: 'choose_operation',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete_digit',
  EVALUATE: 'evaluate',
};

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      return { ...state, currentOperand: state.currentOperand + payload };
    case ACTIONS.CHOOSE_OPERATION:
      return { ...state, operation: payload, previousOperand: state.currentOperand, currentOperand: '' };
    case ACTIONS.CLEAR:
      return { currentOperand: '', previousOperand: '', operation: '' };
    case ACTIONS.DELETE_DIGIT:
      return { ...state, currentOperand: state.currentOperand.slice(0, -1) };
    case ACTIONS.EVALUATE:
      return {
        currentOperand: eval(`${state.previousOperand}${state.operation}${state.currentOperand}`),
        previousOperand: '',
        operation: '',
      };
    default:
      return state;
  }
}

function App() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(reducer, {
    currentOperand: '',
    previousOperand: '',
    operation: '',
  });

  const handleButtonClick = (value) => {
    if (/[0-9]/.test(value)) {
      dispatch({ type: ACTIONS.ADD_DIGIT, payload: value });
    } else if (value === '+' || value === '-' || value === '*' || value === '/') {
      dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: value });
    } else if (value === '=') {
      dispatch({ type: ACTIONS.EVALUATE });
    } else if (value === 'AC') {
      dispatch({ type: ACTIONS.CLEAR });
    } else if (value === 'DEL') {
      dispatch({ type: ACTIONS.DELETE_DIGIT });
    } else if (value === '%') { // Use "%" for division
      dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: '/' });
    }
  };

  return (
    <>
      <div className="calculator-grid">
        <div className="output">
          <div className="previous-operand">{previousOperand}{operation}</div>
          <div className="current-operand">{currentOperand}</div>
        </div>
        <button onClick={() => handleButtonClick('AC')} className="span-two">AC</button>
        <button onClick={() => handleButtonClick('DEL')}>DEL</button>
        <button onClick={() => handleButtonClick('%')}>%</button>
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('*')}>*</button>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
        <button onClick={() => handleButtonClick('.')}>.</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('=')} className='span-two'>=</button>
      </div>
    </>
  );
}

export default App;
