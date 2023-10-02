import React, { useState, useEffect } from 'react';
import './ImgBanner.scss';

const ImgBanner = ({ title, description, imageSrc }) => {
  return (
    <div className="ImgBanner">
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="img">
        <img src={imageSrc} alt="배너 이미지" />
      </div>
    </div>
  );
};

export default ImgBanner;
