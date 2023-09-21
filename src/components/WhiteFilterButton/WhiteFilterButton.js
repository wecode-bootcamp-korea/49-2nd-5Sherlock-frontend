import React, { useState, useEffect } from 'react';
import './WhiteFilterButton.scss';
import { useNavigate, Link } from 'react-router-dom';

const WhiteFilterButton = props => {
  const { text } = props;

  return <div className="whiteFilterButton">{text}</div>;
};
export default WhiteFilterButton;
