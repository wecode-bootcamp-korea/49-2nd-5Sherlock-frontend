import React, { useState, useEffect } from 'react';
import './BestProductList.scss';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import ProductListContainer from '../../../components/ProductListContainer/ProductListContainer';
import WhiteFilterButton from '../../../components/WhiteFilterButton/WhiteFilterButton';
import GreenFilterButton from '../../../components/GreenFilterButton/GreenFilterButton';
import { useSearchParams } from 'react-router-dom';
import Pagination from '../../../components/Pagination/Pagination';

const BestProductList = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mainTitle, setMainTitle] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const data = {
    message: 'querySuccess',
    data: [
      {
        id: 1,
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
        isNew: true,
        quantity: 0,
        name: '우롱차',
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
        isNew: false,
        quantity: 10,
        name: '과자 세트',
      },
    ],
    productCount: 100,
  };

  const [dataList, setDataList] = useState(data);
  const offset = searchParams.get('offset');
  const limit = searchParams.get('limit');
  const category = searchParams.get('c');
  const sort = searchParams.get('sort');
  const product_type = searchParams.get('product_type');

  const getList = async () => {
    // const queryStringKey = {
    //   category: 'c',
    //   sort: 'sort',
    //   product_type: 'product_type',
    //   limit: 'limit',
    //   offset: 'offset',
    // };

    const queryStringBuilder = () => {
      let string = '?';
      if (category) {
        if (string[-1] !== '?') string += '&';
        string += `c=${category}`;
      }
      if (limit) {
        if (string[-1] !== '?') string += '&';
        string += `limit=${limit}&offset=${offset}`;
      }
      if (product_type) {
        if (string[-1] !== '?') string += '&';
        string += `product_type=${product_type}`;
      }
      if (sort) {
        if (string[-1] !== '?') string += '&';
        string += `sort=${sort}`;
      }
      return string;
    };
    const queryString = queryStringBuilder();
    // return await fetch(`http://10.58.52.244:8000/product${queryString}`, {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     // authorization: window.sessionStorage.getItem('token'),
    //   },
    // })
    //   .then(res => res.json())
    //   .then(data => {
    //     const result = data;
    //     setDataList(result);
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
  if (category === '2') {
    categoryTitle = '베스트';
  } else {
    categoryTitle = '위클리 베스트';
  }

  // sort clicked 설명
  let weeklyBestFilter = 'unclicked';
  let bestFilter = 'unclicked';

  if (sort === 'best') {
    bestFilter = 'clicked';
  } else {
    weeklyBestFilter = 'clicked';
  }

  //////////////////////////// 필터
  const goToSort = param => {
    searchParams.set('sort', param);
    setSearchParams(searchParams);
    // getList();
  };

  ////////////////////제품필터
  const goToProductType = param => {
    searchParams.set('product_type', param);
    setSearchParams(searchParams);
    setSearchParams(searchParams);
    // getList();
  };

  const goToBestCategory = param => {
    searchParams.set('c', param);
    setSearchParams(searchParams);
    setSearchParams(searchParams);
    // getList();
  };

  return (
    <div className="bestProductList">
      <div className="bannerBox">
        <h2 className="bannerName">{categoryTitle}</h2>
        <img src={process.env.PUBLIC_URL + categoryImg} />
      </div>
      <div className="container">
        <div className="filterBox">
          <GreenFilterButton
            text="위클리 베스트"
            clicked={weeklyBestFilter}
            onClick={() => goToBestCategory()}
          />
          <GreenFilterButton
            text="베스트"
            clicked={bestFilter}
            onClick={() => goToBestCategory('9')}
          />
        </div>
      </div>
    </div>
  );
};
export default BestProductList;
