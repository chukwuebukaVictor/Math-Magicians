import React from 'react';
import './calculator.css';
import PropTypes from 'prop-types';
import calculate from '../Logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.calculator = this.calculator.bind(this);
    this.returnSection = this.returnSection.bind(this);
  }

  calculator = (obj, button) => {
    const { updateState } = this.props;
    const newObj = calculate(obj, button);
    updateState(newObj);
  }

  returnSection = () => {
    const { digitObj } = this.props;
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
  }

  render() {
    const { digitObj } = this.props;
    return (
      <section className="calculator">
        <div className="screen">{(this.returnSection())}</div>
        <div className="calc-btn-start">
          <button type="button" className="calc-btn" value="AC" onClick={() => { this.calculator(digitObj, 'AC'); }}> AC</button>
          <button type="button" className="calc-btn" value="+/-" onClick={() => { this.calculator(digitObj, '+/-'); }}> +/-</button>
          <button type="button" className="calc-btn" value="%" onClick={() => { this.calculator(digitObj, '%'); }}> %</button>
          <button type="button" className="operator-button calc-btn" value="÷" onClick={() => { this.calculator(digitObj, '÷'); }}>÷</button>
          <button type="button" className="calc-btn" value="7" onClick={() => { this.calculator(digitObj, '7'); }}> 7</button>
          <button type="button" className="calc-btn" value="8" onClick={() => { this.calculator(digitObj, '8'); }}> 8</button>
          <button type="button" className="calc-btn" value="AC" onClick={() => { this.calculator(digitObj, '9'); }}> 9</button>
          <button type="button" className="operator-button calc-btn" value="x" onClick={() => { this.calculator(digitObj, 'x'); }}>x</button>
          <button type="button" className="calc-btn" value="4" onClick={() => { this.calculator(digitObj, '4'); }}> 4</button>
          <button type="button" className="calc-btn" value="5" onClick={() => { this.calculator(digitObj, '5'); }}> 5</button>
          <button type="button" className="calc-btn" value="6" onClick={() => { this.calculator(digitObj, '6'); }}> 6</button>
          <button type="button" className="operator-button calc-btn" value="-" onClick={() => { this.calculator(digitObj, '-'); }}>-</button>
          <button type="button" className="calc-btn" value="1" onClick={() => { this.calculator(digitObj, '1'); }}> 1</button>
          <button type="button" className="calc-btn" value="3" onClick={() => { this.calculator(digitObj, '3'); }}> 2</button>
          <button type="button" className="calc-btn" value="3" onClick={() => { this.calculator(digitObj, '3'); }}> 3</button>
          <button type="button" className="operator-button calc-btn" value="+" onClick={() => { this.calculator(digitObj, '+'); }}>+</button>
        </div>
        <span className="calc-btn-end">
          <button type="button" className="calc-btn" value="0" onClick={() => { this.calculator(digitObj, '0'); }}>0</button>
          <button type="button" className="calc-btn" value="." onClick={() => { this.calculator(digitObj, '.'); }}>.</button>
          <button type="button" className="operator-button calc-btn" value="=" onClick={() => { this.calculator(digitObj, '='); }}>=</button>
        </span>
      </section>
    );
  }
}

Calculator.propTypes = {
  updateState: PropTypes.func.isRequired,
  digitObj: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Calculator;
