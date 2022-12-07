import React, { useState } from 'react';
import calculate from './logic/calculate';

function handleClick(event, state, setter) {
  const buttonName = event.target.innerText;
  const result = calculate(state, buttonName);
  setter(result);
}
const CalcInterface = () => {
  const [state, setter] = useState({ total: 0, operation: null, next: null });
  const { total, next, operation } = state;
  return (
    <section>
      <div className="practice">
        <p>let&apos;s do some maths</p>
      </div>
      <div className="calc-container">
        <div className="header">
          <button type="button" className="p-tag">
            {total}
            {operation}
            {next}
          </button>
        </div>
        <div className="calc-buttons">
          <button type="submit" onClick={(event) => handleClick(event, state, setter)}>AC</button>
          <button type="submit" onClick={(event) => handleClick(event, state, setter)}>+/-</button>
          <button type="submit" onClick={(event) => handleClick(event, state, setter)}>%</button>
          <button type="submit" onClick={(event) => handleClick(event, state, setter)} className="color">÷</button>
          <button type="submit" onClick={(event) => handleClick(event, state, setter)}>7</button>
          <button type="submit" onClick={(event) => handleClick(event, state, setter)}>8</button>
          <button type="submit" onClick={(event) => handleClick(event, state, setter)}>9</button>
          <button type="submit" onClick={(event) => handleClick(event, state, setter)} className="color">x</button>
          <button type="submit" onClick={(event) => handleClick(event, state, setter)}>4</button>
          <button type="submit" onClick={(event) => handleClick(event, state, setter)}>5</button>
          <button type="submit" onClick={(event) => handleClick(event, state, setter)}>6</button>
          <button type="submit" onClick={(event) => handleClick(event, state, setter)} className="color">-</button>
          <button type="submit" onClick={(event) => handleClick(event, state, setter)}>1</button>
          <button type="submit" onClick={(event) => handleClick(event, state, setter)}>2</button>
          <button type="submit" onClick={(event) => handleClick(event, state, setter)}>3</button>
          <button type="submit" onClick={(event) => handleClick(event, state, setter)} className="color">+</button>
          <button type="submit" onClick={(event) => handleClick(event, state, setter)} className="span">0</button>
          <button type="submit" onClick={(event) => handleClick(event, state, setter)}>.</button>
          <button type="submit" onClick={(event) => handleClick(event, state, setter)} className="color">=</button>
        </div>
      </div>
    </section>
  );
};

export default CalcInterface;
