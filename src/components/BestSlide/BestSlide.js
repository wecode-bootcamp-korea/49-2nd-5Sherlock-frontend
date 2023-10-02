import React, { useState, useEffect } from 'react';
import './BestSlide.scss';

const BestSlide = props => {
  const slidesInfo = [
    {
      bestImg: '/images/main/best-slide1.png',
      bestName: '프리미엄 녹차와플',
      bestPrice: '9,000',
      bestDiscount: '25%',
      bestDiscountPrice: '8,100',
    },
    {
      bestImg: '/images/main/best-slide2.png',
      bestName: '그린티 랑드샤',
      bestPrice: '9,000',
      bestDiscount: '25%',
      bestDiscountPrice: '8,100',
    },
    {
      bestImg: '/images/main/best-slide3.png',
      bestName: '그린티 웨하스',
      bestPrice: '9,000',
      bestDiscount: '25%',
      bestDiscountPrice: '8,100',
    },
    {
      bestImg: '/images/main/best-slide4.png',
      bestName: '메모리 인 제주 20입',
      bestPrice: '9,000',
      bestDiscount: '25%',
      bestDiscountPrice: '8,100',
    },
    {
      bestImg: '/images/main/best-slide5.png',
      bestName: '프리미엄 티 컬렉션',
      bestPrice: '9,000',
      bestDiscount: '25%',
      bestDiscountPrice: '8,100',
    },
    {
      bestImg: '/images/main/best-slide6.png',
      bestName: '난꽃향 세트',
      bestPrice: '9,000',
      bestDiscount: '25%',
      bestDiscountPrice: '8,100',
    },
    {
      bestImg: '/images/main/best-slide7.png',
      bestName: '시크릿 티 스토리',
      bestPrice: '9,000',
      bestDiscount: '25%',
      bestDiscountPrice: '8,100',
    },
    {
      bestImg: '/images/main/best-slide8.png',
      bestName: '시그니처 비스킷',
      bestPrice: '9,000',
      bestDiscount: '25%',
      bestDiscountPrice: '8,100',
    },
  ];

  const slideWidth = 244;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(goToNextSlide, 3000);
    return () => clearInterval(intervalId);
  }, []);

  const goToPreviousSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? slidesInfo.length - 1 : prevIndex - 1,
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === slidesInfo.length - 1 ? 0 : prevIndex + 1,
    );
  };

  useEffect(() => {
    setTranslateX(-currentIndex * slideWidth);
  }, [currentIndex]);

  const duplicatedSlides = [...slidesInfo, ...slidesInfo];

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
            <li
              key={index}
              className={
                index === currentIndex ||
                (index === currentIndex + slidesInfo.length &&
                  currentIndex === 0)
                  ? 'active'
                  : ''
              }
              style={{ width: `${slideWidth}px` }}
            >
              <p className="slideImg">
                <img src={slide.bestImg} alt="이미지" />
              </p>
              <div className="productInfo">
                <p className="bestName">{slide.bestName}</p>
                <span className="originalPrice">{slide.bestPrice}원</span>
                <p className="price">
                  {slide.bestDiscountPrice}원
                  <span className="discount">
                    &nbsp;&nbsp;{slide.bestDiscount}
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
