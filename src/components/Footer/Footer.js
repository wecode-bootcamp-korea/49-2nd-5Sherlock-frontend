import React, { useState, useEffect } from 'react';
import './Footer.scss';
import { useNavigate, Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <div className="onlineBar">
        <div className="onlineBarInside"></div>
      </div>
      <div className="infBar"></div>
      <div className="mainFooterBar"></div>
    </div>
  );
};
export default Footer;
