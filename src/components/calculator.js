import React from 'react';

class CalcInterface extends React.Component { // eslint-disable-line
  render() {
    return (
      <section>
        <div className="calc-container">
          <div className="header">
            <p className="p-tag">0</p>
          </div>
          <div className="calc-buttons">
            <button type="button">Ac</button>
            <button type="button">+/-</button>
            <button type="button">%</button>
            <button type="button" className="color">+</button>
            <button type="button">7</button>
            <button type="button">8</button>
            <button type="button">9</button>
            <button type="button" className="color">*</button>
            <button type="button">4</button>
            <button type="button">5</button>
            <button type="button">6</button>
            <button type="button" className="color">-</button>
            <button type="button">1</button>
            <button type="button">2</button>
            <button type="button">3</button>
            <button type="button" className="color">+</button>
            <button type="button" className="span">0</button>
            <button type="button">.</button>
            <button type="button" className="color">=</button>
          </div>
        </div>
      </section>
    );
  }
}

export default CalcInterface;
