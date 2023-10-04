import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductReview.scss';
import ReviewGrade from '../ReviewGrade/ReviewGrade';

const ProuductReview = props => {
  return (
    <div className="ProuductReview">
      <div className="contour"></div>
      <div className="productTitleInner">
        <h1>고객리뷰</h1>
        <p>
          상품을 직접 구매하여 경험하신 분들의 솔직담백한 후기들을 확인해보세요
        </p>
        <div className="ratingWrapper">
          <div className="reviewCount">
            <h2>프리미엄 티 컬렉션</h2>
            <p>
              총<span>737</span>개의 고객후기가 있습니다.
            </p>
          </div>
          <ReviewGrade />
        </div>
      </div>
      <div className="reviewAllWrapper">
        <div className="reviewAll">
          <p>
            전체리뷰 <span>720</span>
          </p>
        </div>
        <div className="reviewList">
          <ul className="listInner">
            <li>
              <div className="dateAndGrade">
                <p className="date">2023.10.02</p>
                <p className="grade">
                  <ReviewGrade />
                </p>
              </div>
              <div className="idAndreviewText">
                <p className="useId">김세연</p>
                <p className="reviewText">너무 좋아염~</p>
              </div>
            </li>
          </ul>
        </div>
        <Pagination />
      </div>
      <div className="productNoticeWrapper">
        <div className="noticeText">
          <p className="title">상품의 자세한 사항을 확인해보세요.</p>
          <p className="cont">
            상품에 대한 디테일한 사항을 하단에서 확인해보세요. <br />
            상품정보제공 고시부터 상품청약 조회안내까지 모든 사항을 확인하실 수
            있습니다.
          </p>
        </div>
        <div className="Notice">
          <p>상품정보제공고시</p>
          <img src="/images/product-notice.png" alt="상품정보제공고시" />
        </div>
      </div>
    </div>
  );
};

export default ProuductReview;
