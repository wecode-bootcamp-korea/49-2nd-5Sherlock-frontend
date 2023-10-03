import React from 'react';
import './GreenFilterButton.scss';

const GreenFilterButton = ({ text, isSelected, onClick }) => {
  return (
    <div
      className={`greenFilterButton ${
        isSelected || (text === '전체' && isSelected === undefined)
          ? 'clicked'
          : 'unclicked'
      }`}
      onClick={onClick}
    >
      {text}
    </div>
  );
};
export default GreenFilterButton;
