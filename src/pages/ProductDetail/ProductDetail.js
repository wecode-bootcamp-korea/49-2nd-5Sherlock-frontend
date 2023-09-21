import './ProductDetail.scss';

const ProductDetail = () => {
  return (
    <div className="productDetail">
      <div className="productDetailInner">
        <div className="orderWrapper">
          <div className="leftWrapper">
            <div className="productImgWrapper">
              <div className="productImg">
                <p className="badge">추천</p>
                <img
                  src="/images/product-img1.jpg"
                  alt="제품상세 시크릿 티세트 이미지"
                />
              </div>
              <div className="relationTo">
                <ul>
                  <li className="toPoint">뷰티포인트 470P 적립</li>
                  <li className="toTeaPoint">찻잎 470P 적립</li>
                  <li className="toDeliveryFree">3만원 이상 무료배송</li>
                  <li className="toPackaging">(유료)포장가능</li>
                  <li className="toShoppingBag">쇼핑백 동봉</li>
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
                  REVIEW<span className="reviewNum">12 &gt;</span>
                </button>
              </div>
            </div>
          </div>
          <div className="rightWrapper">
            <p className="category">
              <a className="mainCategory">티제품 &gt;</a>
              <a className="subCategory"> 티 세트</a>
            </p>
            <div className="productInfo">
              <h1 className="productName">시크릿 티 스토리</h1>
              <p className="origin">(원산지 : 하단 상품고시정보에 표시)</p>
              <p className="productStory">
                신비로운 섬 제주의 다채로운 향기와 이야기를 품은, 취향 걱정없이
                선물하기 좋은 고급스러운 구성의 선물 세트
              </p>
            </div>
            <div className="iconAndPriceBox">
              <div className="btnBox">
                <button className="btnUrl">URL</button>
                <button className="btnFacebook">
                  <img src="/images/icon-facebook.png" alt="페이스북 아이콘" />
                </button>
                <button className="btnLike">
                  <img src="/images/btn-like.png" alt="좋아요 버튼 아이콘" />
                </button>
              </div>
              <p className="productPriceInfo">
                <span className="price">
                  <span>37,600</span>원
                </span>
                <span className="discount"> 20%</span>
                <span className="lineText">47,000원</span>
              </p>
            </div>
            <div className="productSeletWrapper">
              <div className="AdditionalSelect">
                <select>
                  <option>
                    <p className="productName">녹차 밀크 스프레드 세트</p>
                    <p>
                      <span className="optionLinePrice">20,000원</span>
                      <span className="optionPrice">20,000원</span>
                      <span className="optionDiscount">15 %</span>
                    </p>
                  </option>
                  <option>
                    <p className="productName">녹차 밀크 스프레드 세트</p>
                    <p>
                      <span className="optionLinePrice">20,000원</span>
                      <span className="optionPrice">20,000원</span>
                      <span className="optionDiscount">15 %</span>
                    </p>
                  </option>
                  <option>추가상품 선택</option>
                </select>
              </div>
              <div className="buyNumWrapper">
                <div className="buyNumCount">
                  <span>구매수량</span>
                  <p className="countButton">
                    <button className="minus">-</button>
                    <span>1</span>
                    <button className="plus">+</button>
                  </p>
                </div>
                <div className="packagingSelect">
                  <select>
                    <option>포장함</option>
                    <option>포장안함</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="priceSum">
              <p className="sumText">상품금액 합계</p>
              <p className="sum">
                <span>37,600</span> 원
              </p>
              <span className="freeDelivery">무료배송</span>
            </div>
            <div className="btnDecision">
              <button className="btnGift">선물하기</button>
              <button className="btnBasket">장바구니</button>
              <button className="btnBuy">바로구매</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;
