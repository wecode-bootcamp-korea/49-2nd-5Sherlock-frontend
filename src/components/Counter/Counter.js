import React from 'react';
import './Counter.scss';

const Counter = ({ itemId, quantity, onQuantityChange }) => {
  const decreaseNumber = () => {
    if (quantity > 1) {
      onQuantityChange(itemId, quantity - 1);
    }
  };

  const increaseNumber = () => {
    onQuantityChange(itemId, quantity + 1);
  };

  return (
    <div className="counter">
      <button
        className="decreaseBtn"
        onClick={decreaseNumber}
        aria-label="Decrease"
      >
        -
      </button>
      <div className="number">{quantity}</div>
      <button
        className="increaseBtn"
        onClick={increaseNumber}
        aria-label="Increase"
      >
        +
      </button>
    </div>
  );
};

export default Counter;
