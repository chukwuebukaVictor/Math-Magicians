import React, { useState } from 'react';
import calculate from '../Logic/calculate';
import './calculator.css';

const Calculator = () => {
  const [digitObj, setDigitObj] = useState({
    total: 0,
    next: 0,
    operation: null,
  });

  const updateState = (obj) => {
    setDigitObj(obj);
  };

  const calculator = (obj, button) => {
    const newObj = calculate(obj, button);
    updateState(newObj);
  };

  const returnSection = () => {
    const { total, next, operation } = digitObj;

    if (total === null && next === null) {
      return 0;
    }
    if (next !== null && total === null) {
      return next;
    }
    if (total !== null && next !== null) {
      if (operation !== null && operation !== undefined) {
        return `${total} ${operation} ${next}`;
      }
      return total;
    }
    return total;
  };

  const buttons = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+'].map((btn) => (
    (btn === 'x' || btn === '+' || btn === '-' || btn === '÷') ? (
      <button
        type="button"
        className="operator-button calc-btn"
        value={btn}
        key={btn}
        onClick={() => calculator(digitObj, btn)}
      >
        {btn}
      </button>
    ) : (
      <button
        type="button"
        className="calc-btn"
        value={btn}
        key={btn}
        onClick={() => calculator(digitObj, btn)}
      >
        {btn}
      </button>
    )
  ));

  return (
    <section className="calculator">
      <div className="screen">{returnSection()}</div>
      <div className="calc-btn-start">
        {buttons}
      </div>
      <span className="calc-btn-end">
        <button type="button" className="calc-btn" value="0" onClick={() => { calculator(digitObj, '0'); }}>0</button>
        <button type="button" className="calc-btn" value="." onClick={() => { calculator(digitObj, '.'); }}>.</button>
        <button type="button" className="operator-button calc-btn" value="=" onClick={() => { calculator(digitObj, '='); }}>=</button>
      </span>
    </section>
  );
};

export default Calculator;
