import React, { useState, useEffect } from 'react';
import './ProductList.scss';
import { useNavigate, Link } from 'react-router-dom';
import ProductListContainer from '../../../components/ProductListContainer/ProductListContainer';
import WhiteFilterButton from '../../../components/WhiteFilterButton/WhiteFilterButton';
import GreenFilterButton from '../../../components/GreenFilterButton/GreenFilterButton';
import { useSearchParams } from 'react-router-dom';

const ProductList = () => {
  const navigate = useNavigate();

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
        likeNumber: 77,
        reviewNumber: 107,
        isNew: true,
        quantity: 0,
        isLike: true,
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
        likeNumber: 123,
        reviewNumber: 456,
        isNew: false,
        quantity: 10,
        isLike: false,
        name: '과자 세트',
      },
    ],
    productCount: 20,
  };

  const [dataList, setDataList] = useState(data);
  const page = searchParams.get('p');
  const category = searchParams.get('c');
  const sort = searchParams.get('sort');
  const teaSort = searchParams.get('teasort');

  // category 설명
  let categoryImg;

  if (category) {
    categoryImg = `/images/${category}.jpg`;
  }

  // sort 설명
  let recommendFilter = 'unclicked';
  let saleFilter = 'unclicked';
  let newFilter = 'unclicked';
  let highPriceFilter = 'unclicked';
  let lowPriceFilter = 'unclicked';

  if (sort === '추천순') {
    recommendFilter = 'clicked';
  } else if (sort === '판매순') {
    saleFilter = 'clicked';
  } else if (sort === '신상품순') {
    newFilter = 'clicked';
  } else if (sort === '높은가격순') {
    highPriceFilter = 'clicked';
  } else if (sort === '낮은가격순') {
    lowPriceFilter = 'clicked';
  }

  // teaSort 설명
  let teaTotalFilter = 'unclicked';
  let leafTeaFilter = 'unclicked';
  let pyramidFilter = 'unclicked';
  let teaBagFilter = 'unclicked';
  let powderFilter = 'unclicked';

  if (teaSort === '전체') {
    teaTotalFilter = 'clicked';
  } else if (teaSort === '잎차') {
    leafTeaFilter = 'clicked';
  } else if (teaSort === '피라미드') {
    pyramidFilter = 'clicked';
  } else if (teaSort === '티백') {
    teaBagFilter = 'clicked';
  } else if (teaSort === '파우더') {
    powderFilter = 'clicked';
  }

  // const getLIst = async () => {
  //   return await fetch(`http://10.58.52.244:8000/product?c=${category}&p=${page}&sort=${sort}}&teasort=${teaSort}`, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       // authorization: window.sessionStorage.getItem('token'),
  //     },
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       const result = data;
  //       setDataList(result);
  //     });
  // };
  // useEffect(() => {
  //   getLIst();
  // }, []);

  const goToRecommend = () => {
    searchParams.set('sort', '추천순');
    setSearchParams(searchParams);
    // getList();
  };
  const goToSale = () => {
    searchParams.set('sort', '판매순');
    setSearchParams(searchParams);
  };
  const goToNew = () => {
    searchParams.set('sort', '신상품순');
    setSearchParams(searchParams);
  };
  const goToHigh = () => {
    searchParams.set('sort', '높은가격순');
    setSearchParams(searchParams);
  };
  const goToLow = () => {
    searchParams.set('sort', '낮은가격순');
    setSearchParams(searchParams);
  };
  const goToTeaTotal = () => {
    searchParams.set('teasort', '전체');
    setSearchParams(searchParams);
  };
  const goToLeafTea = () => {
    searchParams.set('teasort', '잎차');
    setSearchParams(searchParams);
  };
  const goToPyramid = () => {
    searchParams.set('teasort', '피라미드');
    setSearchParams(searchParams);
  };
  const goToTeaBag = () => {
    searchParams.set('teasort', '티백');
    setSearchParams(searchParams);
  };
  const goToPowder = () => {
    searchParams.set('teasort', '파우더');
    setSearchParams(searchParams);
  };

  return (
    <div className="productList">
      <div className="bannerBox">
        <h2 className="bannerName">{category}</h2>
        <img src={process.env.PUBLIC_URL + categoryImg} />
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
                <WhiteFilterButton
                  text="추천순"
                  clicked={recommendFilter}
                  onClick={goToRecommend}
                />
                <WhiteFilterButton
                  text="판매순"
                  clicked={saleFilter}
                  onClick={goToSale}
                />
                <WhiteFilterButton
                  text="신상품순"
                  clicked={newFilter}
                  onClick={goToNew}
                />
                <WhiteFilterButton
                  text="높은 가격순"
                  clicked={highPriceFilter}
                  onClick={goToHigh}
                />
                <WhiteFilterButton
                  text="낮은 가격순"
                  clicked={lowPriceFilter}
                  onClick={goToLow}
                />
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
                <GreenFilterButton
                  text="전체"
                  clicked={teaTotalFilter}
                  onClick={goToTeaTotal}
                />
                <GreenFilterButton
                  text="잎차"
                  clicked={leafTeaFilter}
                  onClick={goToLeafTea}
                />
                <GreenFilterButton
                  text="피라미드"
                  clicked={pyramidFilter}
                  onClick={goToPyramid}
                />
                <GreenFilterButton
                  text="티백"
                  clicked={teaBagFilter}
                  onClick={goToTeaBag}
                />
                <GreenFilterButton
                  text="파우더"
                  clicked={powderFilter}
                  onClick={goToPowder}
                />
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
