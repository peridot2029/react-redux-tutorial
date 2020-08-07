import React from 'react';
import './Counter.scss';

const Counter = ({ value, onIncrement, onDecrement }) => {
  return (
    <div className='Counter'>
      <h1>{value}</h1>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>
  );
};

export default Counter;
