import React, { useState } from 'react';
import './ReviewGrade.scss';

const ReviewGrade = props => {
  const { data } = props;

  const getStarImage = rating => {
    if (rating >= 5) {
      return '/images/star-5.png';
    } else if (rating >= 4.5) {
      return '/images/star-4.5.png';
    } else if (rating >= 4) {
      return '/images/star-4.png';
    } else if (rating >= 3.5) {
      return '/images/star-3.5.png';
    } else if (rating >= 3) {
      return '/images/star-3.png';
    } else if (rating >= 2.5) {
      return '/images/star-2.5.png';
    } else if (rating >= 2) {
      return '/images/star-2.png';
    } else if (rating >= 1.5) {
      return '/images/star-1.5.png';
    } else {
      return '/images/star-1.png';
    }
  };
  return (
    <div className="reviewGrade">
      <span className="reviewText">리뷰 평점</span>
      <p>
        {data.rating}
        <span className="countStar">
          <img src={getStarImage(data.rating)} alt="별점 5점" />
        </span>
      </p>
    </div>
  );
};
export default ReviewGrade;
