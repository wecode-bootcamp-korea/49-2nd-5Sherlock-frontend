import React from 'react';
import './GreenFilterButton.scss';

const GreenFilterButton = props => {
  const { text, clicked, onClick } = props;

  return (
    <div className={`greenFilterButton ${clicked}`} onClick={onClick}>
      {text}
    </div>
  );
};
export default GreenFilterButton;
