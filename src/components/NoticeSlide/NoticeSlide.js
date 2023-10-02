import React, { useState, useEffect } from 'react';
import './NoticeSlide.scss';

const NoticeSlide = props => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1,
      );
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);
  // const {
  //   type,
  //   value,
  //   placeholder,
  //   onChange,
  //   onFocus,
  //   name,
  //   scale,
  //   className = 'inputBox',
  // } = props;
  const slides = [
    '[공지] 오설록몰 개인정보처리방침 변경 안내 (23. 09. 26)',
    '[공지] 23년 추석 배송마감 안내',
    '[공지] 오설록 차 제품 고시 정보 변경 안내',
    '[공지] 오설록 짱짱',
  ];
  return (
    <div className="NoticeSlide NoticeSlide2">
      <span>공지사항</span>
      <div className="slideWrapper">
        <ul
          className="slide"
          //style={{ '--currentIndex': currentIndex }}
          style={{
            transform: `translateY(calc(-18px * ${currentIndex}))`,
          }}
        >
          {slides.map((slide, index) => (
            <li key={index} className={index === currentIndex ? 'active' : ''}>
              {slide}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default NoticeSlide;
