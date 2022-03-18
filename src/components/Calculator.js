import React from 'react';
import './calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="calculator">
        <div className="screen">0</div>
        <div className="calc-btn-start">
          <button type="button" className="calc-btn"> AC</button>
          <button type="button" className="calc-btn"> +/-</button>
          <button type="button" className="calc-btn"> %</button>
          <button type="button" className="operator-button calc-btn">÷</button>
          <button type="button" className="calc-btn"> 7</button>
          <button type="button" className="calc-btn"> 8</button>
          <button type="button" className="calc-btn"> 9</button>
          <button type="button" className="operator-button calc-btn">x</button>
          <button type="button" className="calc-btn"> 4</button>
          <button type="button" className="calc-btn"> 5</button>
          <button type="button" className="calc-btn"> 6</button>
          <button type="button" className="operator-button calc-btn">-</button>
          <button type="button" className="calc-btn"> 1</button>
          <button type="button" className="calc-btn"> 2</button>
          <button type="button" className="calc-btn"> 3</button>
          <button type="button" className="operator-button calc-btn">+</button>
        </div>
        <span className="calc-btn-end">
          <button type="button" className="calc-btn">0</button>
          <button type="button" className="calc-btn">.</button>
          <button type="button" className="operator-button calc-btn">=</button>
        </span>
      </section>
    );
  }
}

export default Calculator;
