import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Main.scss';
import NoticeSlide from '../../components/NoticeSlide/NoticeSlide';
import BestSlide from '../../components/BestSlide/BestSlide';
import MainSlide from '../../components/MainSlide/MainSlide';
import ImgBanner from '../../components/ImgBanner/ImgBanner';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';

const Main = () => {
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(new Date());

  const goToLogin = () => {
    navigate('/login');
  };

  const goToSignUp = () => {
    navigate('/signup');
  };

  const goToProductList = () => {
    navigate('/product-list');
  };

  const goToBestProductList = () => {
    navigate('/best-product-list');
  };

  useEffect(() => {
    const updateCurrentTime = () => {
      setCurrentTime(new Date());
    };

    const intervalId = setInterval(updateCurrentTime, 1000);

    return () => clearInterval(intervalId);
  }, []);
  const today = new Date();
  const hours = today.getHours();
  const minutes = today.getMinutes();
  const seconds = today.getSeconds();
  const formattedTime = `${hours}:${minutes}:${seconds}`;

  return (
    <div className="Main">
      <Nav></Nav>
      <div className="mainBannerSection">
        <MainSlide />
      </div>
      <div className="bestProductSection">
        <div className="bestProductInner">
          <NoticeSlide />
          <div className="bestCateWrapper">
            <div className="slideCate">
              <h1>오늘은 어떤 차를 마셔볼까요?</h1>
              <p className="btnCate">
                <button className="btnCateBest">베스트</button>
              </p>
            </div>
            <BestSlide />
            <button className="addView" onClick={goToProductList}>
              더 보기 &gt;
            </button>
          </div>
        </div>
      </div>
      <div className="currentTimeSection">
        <div className="sectionInner">
          <a href="#">
            <div className="banner">
              <img
                src="/images/main/time-sale-banner.png"
                alt="타임세일 배너"
              />
              <p>
                <img src="/images/main/icon-clock.png" alt="아이콘시계" />
                <span className="time">{formattedTime}</span>
              </p>
            </div>
          </a>
        </div>
      </div>
      <div className="subScribeSection">
        <div className="sectionInner">
          <h2>다다일상 구독</h2>
          <p>다채로운 차 향기로 더욱 풍요로워지는 티 라이프를 만나보세요.</p>
          <div className="boxWrapper">
            <div className="leftBox"></div>
            <div className="rightBox">
              <div className="box box1"></div>
              <div className="box box2"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="couponSection">
        <div className="sectionInner">
          <ImgBanner
            title="다다일상 기록"
            description="차와 함께하는 삶, 각자의 취향이 묻어있는 레시피와 인터뷰를 만나보세요."
            imageSrc="/images/main/main-slide1.png"
          />
        </div>
      </div>
      <div className="couponSection">
        <div className="sectionInner">
          <ImgBanner
            title="단체 및 기업 구매"
            description="대량구매 전용 서비스와 프로모션을 만나보세요."
            imageSrc="/images/main/main-slide2.png"
          />
        </div>
      </div>
      <div className="couponSection">
        <div className="sectionInner">
          <ImgBanner
            title="다다일상 기록"
            description="차와 함께하는 삶, 각자의 취향이 묻어있는 레시피와 인터뷰를 만나보세요."
            imageSrc="/images/main/main-slide1.png"
          />
          <button className="addView">바로 가기 &gt;</button>
        </div>
      </div>
      <div className="productListBtn" onClick={goToBestProductList}>
        베스트리스트
      </div>
      <Footer></Footer>
    </div>
  );
};
export default Main;
