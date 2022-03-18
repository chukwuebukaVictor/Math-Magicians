import React from 'react';
// import './calculator.css';

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
          <button type="button"> AC</button>
          <button type="button"> +/-</button>
          <button type="button"> %</button>
          <button type="button" className="operator-button">÷</button>
          <button type="button"> 7</button>
          <button type="button"> 8</button>
          <button type="button"> 9</button>
          <button type="button" className="operator-button">x</button>
          <button type="button"> 4</button>
          <button type="button"> 5</button>
          <button type="button"> 6</button>
          <button type="button" className="operator-button">-</button>
          <button type="button"> 1</button>
          <button type="button"> 2</button>
          <button type="button"> 3</button>
          <button type="button" className="operator-button">+</button>
        </div>
        <span className="calc-btn-end">
          <button type="button" className="button-section">0</button>
          <button type="button" className="button-section">.</button>
          <button type="button" className="button-section operator">=</button>
        </span>
      </section>
    );
  }
}

export default Calculator;
