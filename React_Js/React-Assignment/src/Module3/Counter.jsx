import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <h1 className="counter-heading">REACT WEB</h1>
      <h2 className="counter-value">{count}</h2>
      <button className="counter-button" onClick={handleIncrement}>Increment</button>
      <button className="counter-button" onClick={handleDecrement}>Decrement</button>
      <button className="counter-button" onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Counter;
