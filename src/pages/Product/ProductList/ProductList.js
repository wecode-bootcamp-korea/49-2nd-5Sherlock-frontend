import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductListContainer from '../../../components/ProductListContainer/ProductListContainer';
import WhiteFilterButton from '../../../components/WhiteFilterButton/WhiteFilterButton';
import GreenFilterButton from '../../../components/GreenFilterButton/GreenFilterButton';
import { useSearchParams } from 'react-router-dom';
import Pagination from '../../../components/Pagination/Pagination';
import './ProductList.scss';
import Nav from '../../../components/Nav/Nav';

const ProductList = () => {
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
        quantity: 0,
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
        isNew: true,
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
        isNew: true,
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

  const [dataList, setDataList] = useState(data);
  const offset = searchParams.get('offset');
  const limit = searchParams.get('limit');
  const category = searchParams.get('category');
  const sort = searchParams.get('sort');
  const product_type = searchParams.get('product_type');

  const getList = async () => {
    // return await fetch(
    //   `http://10.58.52.176:8000/products?${searchParams.toString()}`,
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
  }, [searchParams]);

  // 배너 Img 설명
  let categoryImg;

  if (category) {
    categoryImg = `/images/${category}.jpg`;
  } else {
    categoryImg = '/images/teatotal.jpg';
  }

  // 타이틀 설명
  let categoryTitle;
  if (category === 'tea') {
    categoryTitle = '티 제품';
  } else if (category === '1') {
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
    categoryTitle = '전체 상품';
  }

  // category clicked 설명
  let teaCategory = 'unclicked';
  let teaSetCategory = 'unclicked';
  let myungTeaCategory = 'unclicked';
  let greenTeaCategory = 'unclicked';
  let redTeaCategory = 'unclicked';
  let teaFoodCategory = 'unclicked';
  let chocolateCategory = 'unclicked';
  let bakeryCategory = 'unclicked';
  let iceCreamCategory = 'unclicked';
  let bigTeaCategory = 'unclicked';
  let bigTeaFoodCategory = 'unclicked';
  let total = 'unclicked';

  if (category === 'tea') {
    teaCategory = 'clicked';
    bigTeaCategory = 'clicked';
  } else if (category === '1') {
    teaSetCategory = 'clicked';
    bigTeaCategory = 'clicked';
  } else if (category === '2') {
    myungTeaCategory = 'clicked';
    bigTeaCategory = 'clicked';
  } else if (category === '3') {
    greenTeaCategory = 'clicked';
    bigTeaCategory = 'clicked';
  } else if (category === '4') {
    redTeaCategory = 'clicked';
    bigTeaCategory = 'clicked';
  } else if (category === 'teafood') {
    teaFoodCategory = 'clicked';
    bigTeaFoodCategory = 'clicked';
  } else if (category === '5') {
    chocolateCategory = 'clicked';
    bigTeaFoodCategory = 'clicked';
  } else if (category === '6') {
    bakeryCategory = 'clicked';
    bigTeaFoodCategory = 'clicked';
  } else if (category === '7') {
    iceCreamCategory = 'clicked';
    bigTeaFoodCategory = 'clicked';
  } else {
    total = 'clicked';
  }

  // teaSort clicked 설명
  let teaTotalFilter = 'unclicked';
  let leafTeaFilter = 'unclicked';
  let pyramidFilter = 'unclicked';
  let teaBagFilter = 'unclicked';
  let powderFilter = 'unclicked';

  if (product_type && product_type.includes('1')) {
    leafTeaFilter = 'clicked';
  }
  if (product_type && product_type.includes('2')) {
    pyramidFilter = 'clicked';
  }
  if (product_type && product_type.includes('3')) {
    teaBagFilter = 'clicked';
  }
  if (product_type && product_type.includes('4')) {
    powderFilter = 'clicked';
  }
  if (!product_type) {
    teaTotalFilter = 'clicked';
  }

  //////////////////////////// sort 필터
  const goToSort = param => {
    if (!param) {
      searchParams.delete('sort');
    } else {
      searchParams.set('sort', param);
    }
    setSearchParams(searchParams);
  };

  ////////////////////product_type 필터
  const goToProductType = param => {
    let product_type_box = [];
    let product_type_result = '';
    // 전체 누르기
    if (!param) {
      searchParams.delete('product_type');
      setSearchParams(searchParams);

      return;
    }

    if (!product_type) {
      searchParams.set('product_type', param);
      console.log(param);
      setSearchParams(searchParams);

      return;
    }

    for (let i = 0; i < product_type.length; i++) {
      if (product_type.substring(i, i + 1) === ',') {
        continue;
      } else {
        product_type_box.push(product_type.substring(i, i + 1));
      }
    }

    if (product_type_box.includes(param)) {
      product_type_box = product_type_box.filter(element => element !== param);
      if (product_type_box.length === 0) {
        searchParams.delete('product_type');
        setSearchParams(searchParams);

        return;
      }
    } else {
      product_type_box.push(param);
    }

    for (let i = 0; i < product_type_box.length; i++) {
      if (product_type_result === '') {
        product_type_result = product_type_result + product_type_box[i];
      } else {
        product_type_result = product_type_result + ',' + product_type_box[i];
      }
    }
    searchParams.set('product_type', product_type_result);
    console.log(product_type_result);
    setSearchParams(searchParams);
  };

  /////////////////////////카테고리
  const goToCategory = param => {
    searchParams.delete('category');
    searchParams.delete('sort');
    searchParams.delete('product_type');
    searchParams.delete('limit');
    searchParams.delete('offset');
    searchParams.set('category', param);
    if (!param) {
      searchParams.delete('category');
    }
    setSearchParams(searchParams);
  };

  const SORTING_LIST = [
    { id: 1, text: '추천순', sort: null },
    { id: 2, text: '판매순', sort: 'review' },
    { id: 3, text: '신상품순', sort: 'created_at' },
    { id: 4, text: '높은 가격순', sort: 'price' },
    { id: 5, text: '낮은 가격순', sort: '-price' },
  ];

  console.log(sort);
  return (
    <div className="productList">
      <Nav />
      <div className="bannerBox">
        <h2 className="bannerName">{categoryTitle}</h2>
        <img src={process.env.PUBLIC_URL + categoryImg} />
      </div>
      <div className="container">
        <div className="containerInside">
          <div className="productListBox">
            <div className="leftMenu">
              <div
                className={`leftMenuTitle ${total}`}
                onClick={() => {
                  goToCategory();
                }}
              >
                제품
              </div>
              <div className="leftMenuCategory">
                <div
                  className={`leftMenuTeaProduct leftMenuTeaBtn ${bigTeaCategory}`}
                  onClick={() => {
                    goToCategory('tea');
                  }}
                >
                  티 제품
                  <div className="leftMenuTeaSubBox">
                    <div
                      className="leftMenuTeaSubContent"
                      onClick={e => {
                        e.stopPropagation();
                        goToCategory('tea');
                      }}
                    >
                      <div className={teaCategory}>전체상품</div>
                    </div>
                    <div
                      className="leftMenuTeaSubContent"
                      onClick={e => {
                        e.stopPropagation();
                        goToCategory('1');
                      }}
                    >
                      <div className={teaSetCategory}>티세트</div>
                    </div>
                    <div
                      className="leftMenuTeaSubContent"
                      onClick={e => {
                        e.stopPropagation();
                        goToCategory('2');
                      }}
                    >
                      <div className={myungTeaCategory}>명차</div>
                    </div>
                    <div
                      className="leftMenuTeaSubContent"
                      onClick={e => {
                        e.stopPropagation();
                        goToCategory('3');
                      }}
                    >
                      <div className={greenTeaCategory}>녹차/말차</div>
                    </div>
                    <div
                      className="leftMenuTeaSubContent"
                      onClick={e => {
                        e.stopPropagation();
                        goToCategory('4');
                      }}
                    >
                      <div className={redTeaCategory}>발효차/홍차</div>
                    </div>
                  </div>
                </div>
                <div
                  className={`leftMenuTeaFood leftMenuTeaBtn ${bigTeaFoodCategory}`}
                  onClick={() => goToCategory('teafood')}
                >
                  티푸드
                  <div className="leftMenuTeaSubBox">
                    <div
                      className="leftMenuTeaSubContent"
                      onClick={e => {
                        e.stopPropagation();
                        goToCategory('teafood');
                      }}
                    >
                      <div className={teaFoodCategory}>전체상품</div>
                    </div>
                    <div
                      className="leftMenuTeaSubContent"
                      onClick={e => {
                        e.stopPropagation();
                        goToCategory('5');
                      }}
                    >
                      <div className={chocolateCategory}>과자/초콜릿</div>
                    </div>
                    <div
                      className="leftMenuTeaSubContent"
                      onClick={e => {
                        e.stopPropagation();
                        goToCategory('6');
                      }}
                    >
                      <div className={bakeryCategory}>베이커리</div>
                    </div>
                    <div
                      className="leftMenuTeaSubContent"
                      onClick={e => {
                        e.stopPropagation();
                        goToCategory('7');
                      }}
                    >
                      <div className={iceCreamCategory}>아이스크림</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rightMenu">
              <div className="rigthMenuTitleBox">
                <div className="rightMenuTitle">{categoryTitle}</div>
                <div className="rightMenuFilterBox">
                  {SORTING_LIST.map(({ id, text, sort }) => (
                    <WhiteFilterButton
                      key={id}
                      text={text}
                      isSelected={searchParams.get('sort') === sort}
                      onClick={() => goToSort(sort)}
                    />
                  ))}
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
                {category === '1' ||
                category === '2' ||
                category === '3' ||
                category === '4' ||
                !category ||
                category === 'tea' ? (
                  <div className="rightMenuTeaFilterBox">
                    <GreenFilterButton
                      text="전체"
                      clicked={teaTotalFilter}
                      onClick={() => goToProductType()}
                    />
                    <GreenFilterButton
                      text="잎차"
                      clicked={leafTeaFilter}
                      onClick={() => goToProductType('1')}
                    />
                    <GreenFilterButton
                      text="피라미드"
                      clicked={pyramidFilter}
                      onClick={() => goToProductType('2')}
                    />
                    <GreenFilterButton
                      text="티백"
                      clicked={teaBagFilter}
                      onClick={() => goToProductType('3')}
                    />
                    <GreenFilterButton
                      text="파우더"
                      clicked={powderFilter}
                      onClick={() => goToProductType('4')}
                    />
                  </div>
                ) : null}
              </div>
              <ProductListContainer data={dataList.data} />
              <Pagination
                productCount={dataList.productCount}
                getList={getList}
                offset={offset}
                limit={limit}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductList;
