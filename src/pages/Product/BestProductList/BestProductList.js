import React, { useState, useEffect } from 'react';
import './BestProductList.scss';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import GreenFilterButton from '../../../components/GreenFilterButton/GreenFilterButton';
import { useSearchParams } from 'react-router-dom';
import BestProductListContainer from '../../../components/BestProductListContainer/BestProductListContainer';
import Nav from '../../../components/Nav/Nav';
import Address from '../../../components/Address/Address';

const BestProductList = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [filter, setFilter] = useState('closed');
  const [filterResult, setFilterResult] = useState('판매순');
  const [searchParams, setSearchParams] = useSearchParams();
  const data = {
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

  const [dataList, setDataList] = useState({});
  const category = searchParams.get('category');
  const sort = searchParams.get('sort');

  const getList = async () => {
    // return await fetch(
    //   `http://${Address.address}/products/bestproducts${window.location.search}`,
    //   {
    //     method: 'GET',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       authorization: window.sessionStorage.getItem('token'),
    //     },
    //   },
    // )
    //   .then(res => res.json())
    //   .then(data => {
    //     setDataList(data);
    //   });
  };
  useEffect(() => {
    getList();
  }, []);

  // 배너 Img 설명
  let categoryImg;

  if (category) {
    categoryImg = `/images/${category}.jpg`;
  } else {
    categoryImg = '/images/teatotal.jpg';
  }

  // 타이틀 설명
  let categoryTitle;
  let weeklyBestFilter = 'unclicked';
  let bestFilter = 'unclicked';
  if (category === '1') {
    categoryTitle = '베스트';
    bestFilter = 'clicked';
  } else {
    categoryTitle = '위클리 베스트';
    weeklyBestFilter = 'clicked';
  }

  // 카테고리 함수
  const goToBestCategory = param => {
    if (!param) {
      searchParams.delete('category');
      setSearchParams(searchParams);
      return;
    }
    searchParams.delete('sort');
    setFilterResult('판매순');
    searchParams.set('category', param);
    setSearchParams(searchParams);
  };

  // 주계산법
  const currentDate = new Date();

  // 현재 날짜의 년도와 달을 가져옵니다.
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  // Date 객체를 이용하여 현재 주를 계산합니다.
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  const firstDayOfWeek = firstDayOfMonth.getDay(); // 0 (일요일)부터 6 (토요일)까지의 값
  const currentDay = currentDate.getDate();

  // 현재 주를 계산합니다.
  const currentWeek = Math.ceil((currentDay + firstDayOfWeek) / 7);

  const openFunction = () => {
    if (filter === 'open') {
      setFilter('closed');
    } else {
      setFilter('open');
    }
  };

  const filterBox = param => {
    setFilterResult(param);
    if (param === '리뷰순') {
      searchParams.set('sort', 'review');
      setSearchParams(searchParams);
    } else {
      searchParams.delete('sort');
      setSearchParams(searchParams);
    }
  };

  useEffect(() => {
    const sortChange = () => {
      if (sort) {
        setFilterResult('리뷰순');
      }
    };
    sortChange();
  }, []);

  const CATEGORY_LIST = [
    { id: 1, text: '위클리 베스트', category: null },
    { id: 2, text: '베스트', category: '1' },
  ];

  return (
    <div className="bestProductList">
      <Nav />
      <div className="bannerBox">
        <h2 className="bannerName">{categoryTitle}</h2>
        <img src={process.env.PUBLIC_URL + categoryImg} />
      </div>
      <div className="container">
        <div className="containerInside">
          <div className="categoryBox">
            {CATEGORY_LIST.map(({ id, text, category }) => (
              <GreenFilterButton
                key={id}
                text={text}
                isSelected={searchParams.get('category') === category}
                onClick={() => goToBestCategory(category)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="silverLine" />
      <div className="container">
        <div className="containerInside">
          <div className="bestProductListTitleBox">
            {!category ? (
              <>
                <div className="weekInf">{`${currentYear}년 ${
                  currentMonth + 1
                }월 ${currentWeek}째주`}</div>
                <div
                  onClick={openFunction}
                  className={`selectOption ${filter}`}
                >
                  <div className="selectTitle">
                    {filterResult}&nbsp;
                    <img src={process.env.PUBLIC_URL + '/images/up.png'} />
                  </div>
                  <ul className={`selectOptionList ${filter}`}>
                    <li
                      onClick={() => {
                        filterBox('판매순');
                      }}
                    >
                      판매순
                    </li>
                    <li
                      onClick={() => {
                        filterBox('리뷰순');
                      }}
                    >
                      리뷰순
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <div className="inf">
                오설록에서 많이 선물된 선물세트를 모았어요.
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="container listContainer">
        <div className="containerInside">
          <BestProductListContainer data={dataList.data} />
        </div>
      </div>
    </div>
  );
};
export default BestProductList;
