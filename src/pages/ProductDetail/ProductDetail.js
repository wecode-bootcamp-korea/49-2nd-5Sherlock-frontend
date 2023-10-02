import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.scss';

import Modal from '../../components/Modal/Modal';

import Nav from '../../components/Nav/Nav';

const ProductDetail = () => {
  //   const { id } = useParams();
  const myData = {
    name: '시크릿 티',
    price: 77000,
    originalPrice: 80000,
    discount_rate: 20,
    description:
      '즐겁고 행복한 티타임을 선사하는 달콤하고 향긋한 오설록만의 특별한 블렌디드 티 선물 세트',
    provideBag: true,
    packageService: true,
    category_name: '티 세트',
    category_id: 1,
    descriptionImage: '/images/product-img1.png',
  };
  const [data, setData] = useState(myData);
  const [handleSelectToggle, sethandleSelectToggle] = useState(false);
  const [handleSelectToggle2, sethandleSelectToggle2] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [originalPrice, setOriginalPrice] = useState(47000);
  const [productCount, setProductCount] = useState(1);

  const [isModalOpen, setIsModalOpen] = useState(false);

  // useEffect(() => {
  //   fetch(`http://10.58.52.215:8000/threads${id}`, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json;charset=utf-8',
  //       authorization: localStorage.getItem('token'),
  //     },
  //   })
  //     .then(res => res.json())
  //     .then(result => {
  // setData(result)
  //       console.log(result);
  //       if (result.message === 'quarySuccess') {
  //         console.log(result.data);
  //       } else {
  //         alert('실패');
  //       }
  //     });
  // }, []);

  const [packaging, setPackaging] = useState(0);

  useEffect(() => {
    // fetch(`http://10.58.52.200:8000/products/1`, {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json;charset=utf-8',
    //     authorization: localStorage.getItem('token'),
    //   },
    // }).then(() => setData(myData));
    // //   .then(res => {
    // //     if (res.status !== 200) {
    // //       alert('실패');
    // //     }
    // //     return res.json();
    // //   })
    // //   .then(result => {
    // //     setData(result.data[0]);
    // //     console.log(result.data[0]);
    // //   });
  }, []);

  const selectToggle = () => {
    sethandleSelectToggle(!handleSelectToggle);
  };
  const selectToggle2 = () => {
    sethandleSelectToggle2(!handleSelectToggle2);
  };

  const handleCountPlus = () => {
    setProductCount(productCount + 1);
  };
  const handleCountMinus = () => {
    if (productCount > 1) {
      setProductCount(productCount - 1);
    }
  };
  const handleOptionClick = option => {
    setSelectedOption(option);
    sethandleSelectToggle2(false);
    if (option === '포장함') {
      setPackaging(2000);
    } else {
      setPackaging(0);
    }
  };

  const isPointReward = () => {
    const pointReward = originalPrice / 100;
    return pointReward;
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="productDetail">
      <Nav />
      {data && (
        <div className="productDetailInner">
          <div className="orderWrapper">
            <div className="leftWrapper">
              <div className="productImgWrapper">
                <div className="productImg">
                  <p className="badge">추천</p>
                  <img
                    src={`${data.descriptionImage}`}
                    alt="제품상세 시크릿 티세트 이미지"
                  />
                </div>
                <div className="relationTo">
                  <ul>
                    <li className="toPoint">
                      {`뷰티포인트 ${isPointReward()}P 적립`}
                    </li>
                    <li className="toTeaPoint">{`찻잎 ${isPointReward()}P 적립`}</li>
                    <li className="toDeliveryFree">
                      {' '}
                      <span>
                        <i className="fa-light fa-truck"></i>
                      </span>
                      3만원 이상 무료배송
                    </li>
                    <li
                      className={`toPackaging ${data.provideBag ? 'on' : ''}`}
                    >
                      (유료)포장가능
                    </li>
                    <li
                      className={`toShoppingBag ${
                        data.packageService ? 'on' : ''
                      }`}
                    >
                      쇼핑백 동봉
                    </li>
                  </ul>
                </div>
              </div>
              <div className="reviewWrapper">
                <div className="reviewGrade">
                  <span className="reviewText">리뷰 평점</span>
                  <p>
                    4.8
                    <span className="countStar">
                      <img src="/images/start-5.png" alt="별점 5점" />
                    </span>
                  </p>
                </div>
                <div className="goReview">
                  <button>
                    REVIEW <span className="reviewNum">12 &gt;</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="rightWrapper">
              <p className="category">
                <a className="mainCategory">티제품 &gt;</a>
                <a className="subCategory"> {data.category_name}</a>
              </p>
              <div className="productInfo">
                <h1 className="productName">{data?.name}</h1>
                <p className="origin">(원산지 : 하단 상품고시정보에 표시)</p>
                <p className="productStory">{data.description}</p>
              </div>
              <div className="iconAndPriceBox">
                <div className="btnBox">
                  <button className="btnUrl">URL</button>
                  <button className="btnFacebook">
                    <img
                      src="/images/icon-facebook.png"
                      alt="페이스북 아이콘"
                    />
                  </button>
                  <button className="btnLike">
                    <img src="/images/btn-like.png" alt="좋아요 버튼 아이콘" />
                  </button>
                </div>
                <p className="productPriceInfo">
                  <span className="price">
                    <span>
                      {data ? data.price.toLocaleString('ko-KR') : null}
                    </span>
                    원
                  </span>
                  <span className="discount"> {data.discount_rate}%</span>
                  <span className="lineText">{data.originalPrice}</span>
                </p>
              </div>
              <div className="productSeletWrapper">
                {/* <div className="additionalSelect">
                <div class="selected" onClick={selectToggle}>
                  <div className="selectedValue">추가상품 선택</div>
                  <div className="selectArrow">
                    <img
                      src="/images/select-arrow.png"
                      alt="셀렉트 박스 화살표 아이콘"
                    ></img>
                  </div>
                </div>
                <ul className={handleSelectToggle ? 'on' : ''}>
                  <li className="option">
                    <p className="optionText">녹차 밀크 스프레드 세트</p>
                    <p className="optionPrice">
                      <span className="lineText">20,000원</span>
                      <strong>
                        <span>&nbsp;&nbsp;17,000</span>원
                      </strong>
                      <span className="discount"> 15%</span>
                    </p>
                  </li>
                  <li className="option">
                    <p className="optionText">신 오브 제주</p>
                    <p className="optionPrice">
                      <span className="lineText">27,000원</span>
                      <strong>
                        <span>&nbsp;20,250</span>원
                      </strong>
                      <span className="discount"> 25%</span>
                    </p>
                  </li>
                </ul>
              </div> */}
                <div className="buyNumWrapper">
                  <div className="buyNumCount">
                    <span>구매수량</span>
                    <p className="countButton">
                      <button className="minus" onClick={handleCountMinus}>
                        -
                      </button>
                      <span>{productCount}</span>
                      <button className="plus" onClick={handleCountPlus}>
                        +
                      </button>
                    </p>
                  </div>
                  <div
                    className={`packagingSelect ${
                      data.packageService ? 'on' : ''
                    }`}
                  >
                    <div className="selected" onClick={selectToggle2}>
                      <div className="selectedValue">
                        {selectedOption || '포장가능 (+2000)'}
                      </div>
                      <div className="selectArrow">
                        <img
                          src="/images/select-arrow.png"
                          alt="아래 화살표"
                        ></img>
                      </div>
                    </div>
                    <ul className={handleSelectToggle2 ? 'on' : ''}>
                      <li
                        className={`option ${
                          selectedOption === '포장함' ? 'selected' : ''
                        }`}
                        onClick={() => handleOptionClick('포장함')}
                      >
                        포장함
                      </li>
                      <li
                        className={`option ${
                          selectedOption === '포장안함' ? 'selected' : ''
                        }`}
                        onClick={() => handleOptionClick('포장안함')}
                      >
                        포장안함
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="priceSum">
                <p className="sumText">상품금액 합계</p>
                <p className="sum">
                  <span>
                    {(data.price * productCount + packaging).toLocaleString(
                      'ko-KR',
                    )}
                    원
                  </span>
                </p>
                <span
                  className={`freeDelivery ${
                    data.price * productCount + packaging >= 30000 ? 'on' : ''
                  }`}
                >
                  무료배송
                </span>
              </div>
              <div className="btnDecision">
                <button className="btnGift">선물하기</button>
                <button className="btnBasket">장바구니</button>
                <button className="btnBuy">바로구매</button>
              </div>
            </div>
          </div>
          <div className="contentsWrapper">
            <div className="contentsNav">
              <ul>
                <li>
                  <a href="#">상품상세</a>
                </li>
                <li>
                  <a href="#">
                    고객리뷰 <span>492개</span>
                  </a>
                </li>
                <li>
                  <a href="#">상품고시정보</a>
                </li>
              </ul>
            </div>
            <div className="contentsImg">
              <img src="/images/Detail.png" alt="상품 디테일 이미지" />
            </div>
          </div>

          <div className="contentsWrapper">
            <div className="contentsNav">
              <ul>
                <li>
                  <a href="javascript:;">상품상세</a>
                </li>
                <li>
                  <a href="javascript:;">
                    고객리뷰 <span>492개</span>
                  </a>
                </li>
                <li>
                  <a href="javascript:;">상품고시정보</a>
                </li>
              </ul>
            </div>
            <div className="contentsImg">
              <img src="/images/Detail.png" alt="상품 디테일 이미지" />
            </div>
          </div>
          {isModalOpen && (
            <Modal>
              <p>선물하기는 로그인 후 이용가능합니다.</p>
              <button className="btnOk" onClick={closeModal}>
                확인
              </button>
            </Modal>
          )}
        </div>
      )}
    </div>
  );
};
export default ProductDetail;
