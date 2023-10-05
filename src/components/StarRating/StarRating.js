import React, { useState } from 'react';
import './StarRating.scss';

const StarRating = props => {
  const { data } = props;
  const getStarImages = rating => {
    if (rating >= 5) {
      return '/images/review/star-5.png';
    } else if (rating >= 4) {
      return '/images/review/star-4.png';
    } else if (rating >= 3) {
      return '/images/review/star-3.png';
    } else if (rating >= 2) {
      return '/images/review/star-2.png';
    } else {
      return '/images/review/star-1.png';
    }
  };
  return (
    <div className="StarRating">
      <span className="countStar">
        <img src={getStarImages(data)} alt="별점 5점" />
      </span>
    </div>
  );
};
export default StarRating;
