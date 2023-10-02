import React from 'react';
import './WhiteFilterButton.scss';

const WhiteFilterButton = ({ text, isSelected, onClick }) => {
  return (
    <div
      className={`whiteFilterButton ${isSelected ? 'clicked' : 'unclicked'}`}
      onClick={onClick}
    >
      {text}
    </div>
  );
};
export default WhiteFilterButton;
