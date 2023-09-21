import React, { useState, useEffect } from 'react';
import './ProductList.scss';
import { useNavigat, Link } from 'react-router-dom';
import ProductListContainer from '../../../components/ProductListContainer/ProductListContainer';
import WhiteFilterButton from '../../../components/WhiteFilterButton/WhiteFilterButton';
import GreenFilterButton from '../../../components/GreenFilterButton/GreenFilterButton';
import { useSearchParams } from 'react-router-dom';

const ProductList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  // const data = {
  //   message: 'querySuccess',
  //   data: [
  //     {
  //       id: 1,
  //       productImg: [
  //         {
  //           id: 2,
  //           url: 'https://image.osulloc.com/upload/kr/ko/adminImage/NK/UF/304_20221114150238508QK.png',
  //         },

  //         {
  //           id: 1,
  //           url: 'https://image.osulloc.com/upload/kr/ko/adminImage/HW/AQ/304_20220921131344082JD.png',
  //         },
  //       ],
  //       category: '티 제품',
  //       price: 27000,
  //       originalPrice: 30000,
  //       discountRate: 10,
  //       likeNumber: 77,
  //       reviewNumber: 107,
  //       isNew: true,
  //       quantity: 0,
  //       isLike: true,
  //       name: '우롱차',
  //     },
  //     {
  //       id: 2,
  //       productImg: [
  //         {
  //           id: 2,
  //           url: 'https://image.osulloc.com/upload/kr/ko/adminImage/NK/UF/304_20221114150238508QK.png',
  //         },

  //         {
  //           id: 1,
  //           url: 'https://image.osulloc.com/upload/kr/ko/adminImage/HW/AQ/304_20220921131344082JD.png',
  //         },
  //       ],
  //       category: '과자 세트',
  //       price: 41000,
  //       // originalPrice: 10000,
  //       // discountRate: 70,
  //       likeNumber: 123,
  //       reviewNumber: 456,
  //       isNew: false,
  //       quantity: 10,
  //       isLike: false,
  //       name: '과자 세트',
  //     },
  //   ],
  //   productCount: 20,
  // };

  const [dataList, setDataList] = useState([]);
  const category = searchParams.get('category');
  const filter = searchParams.get('filter');
  const teaFilter = searchParams.get('teafilter');

  // if (filter === '추천순') {
  // }

  const getLIst = async () => {
    return await fetch('http://10.58.52.244:8000/product', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // authorization: window.sessionStorage.getItem('accessToken'),
      },
    })
      .then(res => res.json())
      .then(data => {
        const result = data;
        setDataList(result);
      });
  };
  useEffect(() => {
    getLIst();
  }, []);

  return (
    <div className="productList">
      <div className="bannerBox">
        <h2 className="bannerName">{category}</h2>
        <img src={process.env.PUBLIC_URL + '/images/teaProductBanner.jpg'} />
      </div>
      <div className="container">
        <div className="productListBox">
          <div className="leftMenu">
            <div className="leftMenuTitle">제품</div>
            <div className="leftMenuCategory">
              <div className="leftMenuTeaProductBox">
                <div className="leftMenuTeaProduct leftMenuTeaBtn">티 제품</div>
              </div>
              <div className="leftMenuTeaFood leftMenuTeaBtn">티푸드</div>
              <div className="leftMenuTeaLifeStyle leftMenuTeaBtn">
                라이프 스타일
              </div>
            </div>
          </div>
          <div className="rightMenu">
            <div className="rigthMenuTitleBox">
              <div className="rightMenuTitle">{category}</div>
              <div className="rightMenuFilterBox">
                <WhiteFilterButton text="추천순" />
                <WhiteFilterButton text="판매순" />
                <WhiteFilterButton text="신상품순" />
                <WhiteFilterButton text="높은 가격순" />
                <WhiteFilterButton text="낮은 가격순" />
              </div>
            </div>
            <div className="rightMenuInfoBox">
              <div className="rightMenuInfo">
                총&nbsp;
                <span className="rigthMenuInfoNumber">
                  {dataList.productCount}
                </span>
                개의 상품이 있습니다.
              </div>
              <div className="rightMenuTeaFilterBox">
                <GreenFilterButton text="전체" />
                <GreenFilterButton text="잎차" />
                <GreenFilterButton text="피라미드" />
                <GreenFilterButton text="티백" />
                <GreenFilterButton text="파우더" />
              </div>
            </div>
            <ProductListContainer data={dataList.data} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductList;
