import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductListContainer from '../../../components/ProductListContainer/ProductListContainer';
import WhiteFilterButton from '../../../components/WhiteFilterButton/WhiteFilterButton';
import GreenFilterButton from '../../../components/GreenFilterButton/GreenFilterButton';
import { useSearchParams } from 'react-router-dom';
import Pagination from '../../../components/Pagination/Pagination';
import './ProductList.scss';
import Nav from '../../../components/Nav/Nav';
import Address from '../../../components/Address/Address';

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
    return await fetch(
      `http://${Address.address}/products?${searchParams.toString()}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          authorization: window.sessionStorage.getItem('token'),
        },
      },
    )
      .then(res => res.json())
      .then(data => {
        setDataList(data);
      });
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

    // product_type_box안에 기존 요소 넣기
    for (let i = 0; i < product_type.length; i++) {
      if (product_type.substring(i, i + 1) === ',') {
        continue;
      } else {
        product_type_box.push(product_type.substring(i, i + 1));
      }
    }

    // box에서 param과 같으면 삭제, 아니면 추가
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

  const TEA_PRODUCT_LIST = [
    { id: 1, text: '전체상품', category: 'tea' },
    { id: 2, text: '티세트', category: '1' },
    { id: 3, text: '명차', category: '2' },
    { id: 4, text: '녹차/말차', category: '3' },
    { id: 5, text: '발효차/홍차', category: '4' },
  ];

  const TEA_FOOD_LIST = [
    { id: 1, text: '전체상품', category: 'teafood' },
    { id: 2, text: '과자/초콜릿', category: '5' },
    { id: 3, text: '베이커리', category: '6' },
    { id: 4, text: '아이스크림', category: '7' },
  ];

  const SORTING_LIST = [
    { id: 1, text: '추천순', sort: null },
    { id: 2, text: '판매순', sort: 'review' },
    { id: 3, text: '신상품순', sort: 'created_at' },
    { id: 4, text: '높은 가격순', sort: 'price' },
    { id: 5, text: '낮은 가격순', sort: '-price' },
  ];

  const PRODUCT_TYPE_LIST = [
    { id: 1, text: '전체', productType: undefined },
    { id: 2, text: '잎차', productType: '1' },
    { id: 3, text: '피라미드', productType: '2' },
    { id: 4, text: '티백', productType: '3' },
    { id: 5, text: '파우더', productType: '4' },
  ];

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
                className={
                  !category
                    ? 'leftMenuTitle clicked'
                    : 'leftMenuTitle unclicked'
                }
                onClick={() => {
                  goToCategory();
                }}
              >
                제품
              </div>
              <div className="leftMenuCategory">
                <div
                  className={
                    ['tea', '1', '2', '3', '4'].includes(category)
                      ? 'leftMenuTeaProduct leftMenuTeaBtn clicked'
                      : 'leftMenuTeaProduct leftMenuTeaBtn unclicked'
                  }
                  onClick={() => {
                    goToCategory('tea');
                  }}
                >
                  티 제품
                  <div className="leftMenuTeaSubBox">
                    {TEA_PRODUCT_LIST.map(({ id, text, category }) => (
                      <div
                        className="leftMenuTeaSubContent"
                        onClick={e => {
                          e.stopPropagation();
                          goToCategory(category);
                        }}
                        key={id}
                      >
                        <div
                          className={
                            searchParams.get('category') === category
                              ? 'clicked'
                              : 'unclicked'
                          }
                        >
                          {text}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div
                  className={
                    ['teafood', '5', '6', '7'].includes(category)
                      ? 'leftMenuTeaFood leftMenuTeaBtn clicked'
                      : 'leftMenuTeaFood leftMenuTeaBtn unclicked'
                  }
                  onClick={() => goToCategory('teafood')}
                >
                  티푸드
                  <div className="leftMenuTeaSubBox">
                    {TEA_FOOD_LIST.map(({ id, text, category }) => (
                      <div
                        className="leftMenuTeaSubContent"
                        onClick={e => {
                          e.stopPropagation();
                          goToCategory(category);
                        }}
                        key={id}
                      >
                        <div
                          className={
                            searchParams.get('category') === category
                              ? 'clicked'
                              : 'unclicked'
                          }
                        >
                          {text}
                        </div>
                      </div>
                    ))}
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
                {!category || ['1', '2', '3', '4', 'tea'].includes(category) ? (
                  <div className="rightMenuTeaFilterBox">
                    {PRODUCT_TYPE_LIST.map(({ id, text, productType }) => (
                      <GreenFilterButton
                        key={id}
                        text={text}
                        isSelected={searchParams
                          .get('product_type')
                          ?.includes(productType)}
                        onClick={() => goToProductType(productType)}
                      />
                    ))}
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
