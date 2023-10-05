import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NoticeSlide from '../../components/NoticeSlide/NoticeSlide';
import BestSlide from '../../components/BestSlide/BestSlide';
import MainSlide from '../../components/MainSlide/MainSlide';
import ImgBanner from '../../components/ImgBanner/ImgBanner';
import BASE_API from '../../config';
import './Main.scss';

const Main = () => {
  const [bestData, setBestData] = useState(DUMMY_DATA);
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(new Date());

  // const getList = async () => {
  //   return await fetch(
  //     `${BASE_API}/products/bestProducts${window.location.search}`,
  //     {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         authorization: window.localStorage.getItem('token'),
  //       },
  //     },
  //   )
  //     .then(res => res.json())
  //     .then(data => {
  //       setDataList(data);
  //     });
  // };

  // useEffect(() => {
  //   getList();
  // }, []);

  const postCart = async id => {
    if (!window.localStorage.getItem('token')) {
      alert('로그인을 해주세요.');
      return;
    }

    if (window.confirm('장바구니에 담으시겠습니까?')) {
      const response = await fetch(`${BASE_API}/carts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authorization: window.localStorage.getItem('token'),
        },
        body: JSON.stringify({ productId: id, quantity: 1 }),
      });

      if (response.ok) {
        window.location.reload();
      }
    }
  };

  const goToProductList = () => {
    navigate('/BestProductList');
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
            <BestSlide data={bestData.data} onClick={postCart} />
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
            <div className="leftBox">
              <img src="/images/main/banner-m.png" alt="배너사진 중" />
            </div>
            <div className="rightBox">
              <div className="box box1">
                <img src="/images/main/banner-s1.png" alt="배너사진 소1" />
              </div>
              <div className="box box2">
                <img src="/images/main/banner-s2.png" alt="배너사진 소2" />
              </div>
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
    </div>
  );
};
export default Main;

const DUMMY_DATA = {
  message: 'querySuccess',
  data: [
    {
      id: 999,
      productImg: [
        {
          id: 2,
          url: 'https://image.osulloc.com/upload/kr/ko/adminImage/NK/UF/304_20221114150238508QK.png',
        },

        {
          id: 1,
          url: 'https://image.osulloc.com/upload/kr/ko/adminImage/HW/AQ/304_20220921131344082JD.png',
        },
      ],
      category: '티 제품',
      price: 27000,
      originalPrice: 30000,
      discountRate: 10,
      likeNumber: 77,
      reviewNumber: 107,
      isNew: true,
      quantity: 0,
      isLike: true,
      name: '[따뜻한 한가위 선물] 달빛걷기 세트',
    },
    {
      id: 2,
      productImg: [
        {
          id: 2,
          url: 'https://image.osulloc.com/upload/kr/ko/adminImage/NK/UF/304_20221114150238508QK.png',
        },

        {
          id: 1,
          url: 'https://image.osulloc.com/upload/kr/ko/adminImage/HW/AQ/304_20220921131344082JD.png',
        },
      ],
      category: '과자 세트',
      price: 41000,
      // originalPrice: 10000,
      // discountRate: 70,
      likeNumber: 123,
      reviewNumber: 456,
      isNew: false,
      quantity: 10,
      isLike: false,
      name: '과자 세트',
    },
    {
      id: 3,
      productImg: [
        {
          id: 2,
          url: 'https://image.osulloc.com/upload/kr/ko/adminImage/NK/UF/304_20221114150238508QK.png',
        },

        {
          id: 1,
          url: 'https://image.osulloc.com/upload/kr/ko/adminImage/HW/AQ/304_20220921131344082JD.png',
        },
      ],
      category: '티 제품',
      price: 27000,
      // originalPrice: 30000,
      // discountRate: 10,
      likeNumber: 77,
      reviewNumber: 107,
      isNew: true,
      quantity: 1,
      isLike: true,
      name: '우롱차',
    },
    {
      id: 4,
      productImg: [
        {
          id: 2,
          url: 'https://image.osulloc.com/upload/kr/ko/adminImage/NK/UF/304_20221114150238508QK.png',
        },

        {
          id: 1,
          url: 'https://image.osulloc.com/upload/kr/ko/adminImage/HW/AQ/304_20220921131344082JD.png',
        },
      ],
      category: '티 제품',
      price: 27000,
      originalPrice: 30000,
      discountRate: 10,
      likeNumber: 77,
      reviewNumber: 107,
      isNew: true,
      quantity: 3,
      isLike: true,
      name: '우롱차',
    },
    {
      id: 5,
      productImg: [
        {
          id: 2,
          url: 'https://image.osulloc.com/upload/kr/ko/adminImage/NK/UF/304_20221114150238508QK.png',
        },

        {
          id: 1,
          url: 'https://image.osulloc.com/upload/kr/ko/adminImage/HW/AQ/304_20220921131344082JD.png',
        },
      ],
      category: '티 제품',
      price: 27000,
      // originalPrice: 30000,
      // discountRate: 10,
      likeNumber: 77,
      reviewNumber: 107,
      isNew: true,
      quantity: 0,
      isLike: true,
      name: '우롱차',
    },
    {
      id: 6,
      productImg: [
        {
          id: 2,
          url: 'https://image.osulloc.com/upload/kr/ko/adminImage/NK/UF/304_20221114150238508QK.png',
        },

        {
          id: 1,
          url: 'https://image.osulloc.com/upload/kr/ko/adminImage/HW/AQ/304_20220921131344082JD.png',
        },
      ],
      category: '티 제품',
      price: 27000,
      originalPrice: 30000,
      discountRate: 10,
      likeNumber: 77,
      reviewNumber: 107,
      isNew: false,
      quantity: 0,
      isLike: true,
      name: '우롱차',
    },
    {
      id: 7,
      productImg: [
        {
          id: 2,
          url: 'https://image.osulloc.com/upload/kr/ko/adminImage/NK/UF/304_20221114150238508QK.png',
        },

        {
          id: 1,
          url: 'https://image.osulloc.com/upload/kr/ko/adminImage/HW/AQ/304_20220921131344082JD.png',
        },
      ],
      category: '티 제품',
      price: 27000,
      originalPrice: 30000,
      discountRate: 10,
      likeNumber: 77,
      reviewNumber: 107,
      isNew: false,
      quantity: 0,
      isLike: true,
      name: '우롱차',
    },
    {
      id: 8,
      productImg: [
        {
          id: 2,
          url: 'https://image.osulloc.com/upload/kr/ko/adminImage/NK/UF/304_20221114150238508QK.png',
        },

        {
          id: 1,
          url: 'https://image.osulloc.com/upload/kr/ko/adminImage/HW/AQ/304_20220921131344082JD.png',
        },
      ],
      category: '티 제품',
      price: 27000,
      originalPrice: 30000,
      discountRate: 10,
      likeNumber: 77,
      reviewNumber: 107,
      isNew: true,
      quantity: 0,
      isLike: true,
      name: '우롱차',
    },
    {
      id: 9,
      productImg: [
        {
          id: 2,
          url: 'https://image.osulloc.com/upload/kr/ko/adminImage/NK/UF/304_20221114150238508QK.png',
        },

        {
          id: 1,
          url: 'https://image.osulloc.com/upload/kr/ko/adminImage/HW/AQ/304_20220921131344082JD.png',
        },
      ],
      category: '티 제품',
      price: 27000,
      originalPrice: 30000,
      discountRate: 10,
      likeNumber: 77,
      reviewNumber: 107,
      isNew: true,
      quantity: 0,
      isLike: true,
      name: '우롱차',
    },
  ],
  productCount: 150,
};
