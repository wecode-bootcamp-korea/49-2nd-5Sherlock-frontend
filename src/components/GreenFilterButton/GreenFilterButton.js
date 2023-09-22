import React, { useState, useEffect } from 'react';
import './GreenFilterButton.scss';
import { useNavigate, Link } from 'react-router-dom';

const GreenFilterButton = props => {
  const { text, clicked, onClick } = props;

  return (
    <div className={`greenFilterButton ${clicked}`} onClick={onClick}>
      {text}
    </div>
  );
};
export default GreenFilterButton;
