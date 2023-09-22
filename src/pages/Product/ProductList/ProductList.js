import React, { useState, useEffect } from 'react';
import './ProductList.scss';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import ProductListContainer from '../../../components/ProductListContainer/ProductListContainer';
import WhiteFilterButton from '../../../components/WhiteFilterButton/WhiteFilterButton';
import GreenFilterButton from '../../../components/GreenFilterButton/GreenFilterButton';
import { useSearchParams } from 'react-router-dom';

const ProductList = () => {
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
  const offset = searchParams.get('offset');
  const limit = searchParams.get('limit');
  const category = searchParams.get('c');
  const sort = searchParams.get('sort');
  const product_type = searchParams.get('product_type');

  // category 설명
  let categoryImg;
  let categoryTitle;
  if (category) {
    categoryImg = `/images/${category}.jpg`;
  } else {
    categoryImg = '/images/tea.jpg';
  }

  if (category === '1') {
    categoryTitle = '티 세트';
  } else if (category === '2') {
    categoryTitle = '명차';
  } else if (category === '3') {
    categoryTitle = '녹차/말차';
  } else if (category === '4') {
    categoryTitle = '발효차/홍차';
  } else if (category === 'teafood') {
    categoryTitle = '티푸드';
  } else if (category === '5') {
    categoryTitle = '과자/초콜릿';
  } else if (category === '6') {
    categoryTitle = '베이커리';
  } else if (category === '7') {
    categoryTitle = '아이스크림';
  } else {
    categoryTitle = '티제품';
  }

  // sort 설명
  let recommendFilter = 'unclicked';
  let saleFilter = 'unclicked';
  let newFilter = 'unclicked';
  let highPriceFilter = 'unclicked';
  let lowPriceFilter = 'unclicked';

  if (sort === '판매순') {
    saleFilter = 'clicked';
  } else if (sort === '신상품순') {
    newFilter = 'clicked';
  } else if (sort === '높은가격순') {
    highPriceFilter = 'clicked';
  } else if (sort === '낮은가격순') {
    lowPriceFilter = 'clicked';
  } else {
    recommendFilter = 'clicked';
  }

  // teaSort 설명
  let teaTotalFilter = 'unclicked';
  let leafTeaFilter = 'unclicked';
  let pyramidFilter = 'unclicked';
  let teaBagFilter = 'unclicked';
  let powderFilter = 'unclicked';

  if (product_type === '잎차') {
    leafTeaFilter = 'clicked';
  } else if (product_type === '피라미드') {
    pyramidFilter = 'clicked';
  } else if (product_type === '티백') {
    teaBagFilter = 'clicked';
  } else if (product_type === '파우더') {
    powderFilter = 'clicked';
  } else {
    teaTotalFilter = 'clicked';
  }

  const getLIst = async () => {
    const queryStringKey = {
      category: 'c',
      sort: 'sort',
      product_type: 'product_type',
      limit: 'limit',
      offset: 'offset',
    };

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
    getLIst();
  }, []);

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
  };

  /////////////////////////카테고리
  const goToCategory = param => {
    searchParams.delete('c');
    searchParams.delete('sort');
    searchParams.delete('product_type');
    searchParams.delete('limit');
    searchParams.delete('offset');
    searchParams.set('c', param);
    setSearchParams(searchParams);
    // getList();
  };
  // console.log(window.history);
  return (
    <div className="productList">
      <div className="bannerBox">
        <h2 className="bannerName">{categoryTitle}</h2>
        <img src={process.env.PUBLIC_URL + categoryImg} />
      </div>
      <div className="container">
        <div className="productListBox">
          <div className="leftMenu">
            <div className="leftMenuTitle">제품</div>
            <div className="leftMenuCategory">
              <div className="leftMenuTeaProduct leftMenuTeaBtn">
                티 제품
                <div className="leftMenuTeaSubBox">
                  <div
                    className="leftMenuTeaSubContent"
                    onClick={() => goToCategory('tea')}
                  >
                    <div>전체상품</div>
                  </div>
                  <div
                    className="leftMenuTeaSubContent"
                    onClick={() => goToCategory('1')}
                  >
                    <div>티세트</div>
                  </div>
                  <div
                    className="leftMenuTeaSubContent"
                    onClick={() => goToCategory('2')}
                  >
                    <div>명차</div>
                  </div>
                  <div
                    className="leftMenuTeaSubContent"
                    onClick={() => goToCategory('3')}
                  >
                    <div>녹차/말차</div>
                  </div>
                  <div
                    className="leftMenuTeaSubContent"
                    onClick={() => goToCategory('4')}
                  >
                    <div>발효차/홍차</div>
                  </div>
                </div>
              </div>
              <div className="leftMenuTeaFood leftMenuTeaBtn">
                티푸드
                <div className="leftMenuTeaSubBox">
                  <div
                    className="leftMenuTeaSubContent"
                    onClick={() => goToCategory('teafood')}
                  >
                    <div>전체상품</div>
                  </div>
                  <div
                    className="leftMenuTeaSubContent"
                    onClick={() => goToCategory('5')}
                  >
                    <div>과자/초콜릿</div>
                  </div>
                  <div
                    className="leftMenuTeaSubContent"
                    onClick={() => goToCategory('6')}
                  >
                    <div>베이커리</div>
                  </div>
                  <div
                    className="leftMenuTeaSubContent"
                    onClick={() => goToCategory('7')}
                  >
                    <div>아이스크림</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rightMenu">
            <div className="rigthMenuTitleBox">
              <div className="rightMenuTitle">{categoryTitle}</div>
              <div className="rightMenuFilterBox">
                <WhiteFilterButton
                  text="추천순"
                  clicked={recommendFilter}
                  onClick={() => goToSort('추천순')}
                />
                <WhiteFilterButton
                  text="판매순"
                  clicked={saleFilter}
                  onClick={() => goToSort('판매순')}
                />
                <WhiteFilterButton
                  text="신상품순"
                  clicked={newFilter}
                  onClick={() => goToSort('신상품순')}
                />
                <WhiteFilterButton
                  text="높은 가격순"
                  clicked={highPriceFilter}
                  onClick={() => goToSort('높은가격순')}
                />
                <WhiteFilterButton
                  text="낮은 가격순"
                  clicked={lowPriceFilter}
                  onClick={() => goToSort('낮은가격순')}
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
                  onClick={() => goToProductType('전체')}
                />
                <GreenFilterButton
                  text="잎차"
                  clicked={leafTeaFilter}
                  onClick={() => goToProductType('잎차')}
                />
                <GreenFilterButton
                  text="피라미드"
                  clicked={pyramidFilter}
                  onClick={() => goToProductType('피라미드')}
                />
                <GreenFilterButton
                  text="티백"
                  clicked={teaBagFilter}
                  onClick={() => goToProductType('티백')}
                />
                <GreenFilterButton
                  text="파우더"
                  clicked={powderFilter}
                  onClick={() => goToProductType('파우더')}
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
