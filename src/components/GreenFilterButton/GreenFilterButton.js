import React, { useState, useEffect } from 'react';
import './GreenFilterButton.scss';
import { useNavigate, Link } from 'react-router-dom';

const GreenFilterButton = props => {
  const { text } = props;

  return <div className="greenFilterButton">{text}</div>;
};
export default GreenFilterButton;
