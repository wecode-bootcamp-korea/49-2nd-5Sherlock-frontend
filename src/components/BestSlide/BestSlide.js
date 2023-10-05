import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './BestSlide.scss';
import ProductImgBox from '../../components/ProductImgBox/ProductImgBox';

const BestSlide = ({ data, onClick }) => {
  const slideWidth = 244;

  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateX, setTranslateX] = useState(0);

  const goToDetail = id => {
    navigate(`/product-detail/${id}`);
  };

  useEffect(() => {
    const intervalId = setInterval(goToNextSlide, 3000);
    return () => clearInterval(intervalId);
  }, []);

  const goToPreviousSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1,
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1,
    );
  };

  useEffect(() => {
    setTranslateX(-currentIndex * slideWidth);
  }, [currentIndex]);

  const duplicatedSlides = [...data, ...data];
  console.log(data);
  return (
    <div className="BestSlide">
      <button className="slideButton prevButton" onClick={goToPreviousSlide}>
        <img src="/images/main/left-arrow.png" alt="슬라이드 왼쪽 이동 버튼" />
      </button>
      <div className="slideContainer">
        <ul
          className="slideList"
          style={{
            width: `${duplicatedSlides.length * slideWidth}px`,
            transform: `translateX(${translateX}px)`,
          }}
        >
          {duplicatedSlides.map((slide, index) => (
            <li>
              <ProductImgBox data={data[0]} onClick={onClick} />
              <div
                className="productInfo"
                onClick={() => {
                  goToDetail(slide.id);
                }}
              >
                <p className="bestName">{slide.name}</p>
                <span className="originalPrice">{slide.originalPrice}원</span>
                <p className="price">
                  {slide.price}원
                  <span className="discount">
                    &nbsp;&nbsp;{slide.discountRate}%
                  </span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <button className="slideButton nextButton" onClick={goToNextSlide}>
        <img
          src="/images/main/right-arrow.png"
          alt="슬라이드 오른쪽 이동 버튼"
        />
      </button>
    </div>
  );
};

export default BestSlide;
