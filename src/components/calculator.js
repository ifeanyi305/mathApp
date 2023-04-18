import React, { useState } from 'react';
import calculate from '../logic/calculate';

function handleClick(event, state, setter) {
  const buttonName = event.target.innerText;
  const result = calculate(state, buttonName);
  setter(result);
}

function Button(props) {
  return (
    // eslint-disable-next-line
    <button type="submit" onClick={(event) => props.handleClick(event, props.state, props.setter)} className={props.className}>
      {/* eslint-disable-next-line */}
      {props.label}
    </button>
  );
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
          <Button label="AC" handleClick={handleClick} state={state} setter={setter} />
          <Button label="+/-" handleClick={handleClick} state={state} setter={setter} />
          <Button label="%" handleClick={handleClick} state={state} setter={setter} />
          <Button label="÷" handleClick={handleClick} state={state} setter={setter} className="color" />
          <Button label="7" handleClick={handleClick} state={state} setter={setter} />
          <Button label="8" handleClick={handleClick} state={state} setter={setter} />
          <Button label="9" handleClick={handleClick} state={state} setter={setter} />
          <Button label="x" handleClick={handleClick} state={state} setter={setter} className="color" />
          <Button label="4" handleClick={handleClick} state={state} setter={setter} />
          <Button label="5" handleClick={handleClick} state={state} setter={setter} />
          <Button label="6" handleClick={handleClick} state={state} setter={setter} />
          <Button label="-" handleClick={handleClick} state={state} setter={setter} className="color" />
          <Button label="1" handleClick={handleClick} state={state} setter={setter} />
          <Button label="2" handleClick={handleClick} state={state} setter={setter} />
          <Button label="3" handleClick={handleClick} state={state} setter={setter} />
          <Button label="+" handleClick={handleClick} state={state} setter={setter} className="color" />
          <Button label="0" handleClick={handleClick} state={state} setter={setter} className="span" />
          <Button label="." handleClick={handleClick} state={state} setter={setter} />
          <Button label="=" handleClick={handleClick} state={state} setter={setter} className="color" />
        </div>
      </div>
    </section>
  );
};

export default CalcInterface;
