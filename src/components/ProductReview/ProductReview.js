import React, { useState, useEffect } from 'react';

import './ProductReview.scss';
import ReviewGrade from '../ReviewGrade/ReviewGrade';
import Pagination from '../Pagination/Pagination';
import StarRating from '../StarRating/StarRating';

const ProductReview = props => {
  const { reviewsList, reviewsCount, averageRating, onClick, offset } = props;
  const [maskedUserId, setMaskedUserId] = useState(''); // 마스킹된 아이디 상태
  console.log(`리뷰 리스트 : ${reviewsList}`);
  console.log(`리뷰 카운트 : ${reviewsCount}`);
  console.log(averageRating);
  console.log(onClick);
  console.log(offset);
  // const getList = async () => {
  //   return await fetch(
  //     `http://${Address.address}/products?${searchParams.toString()}`,
  //     {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         authorization: window.sessionStorage.getItem('token'),
  //       },
  //     },
  //   )
  //     .then(res => res.json())
  //     .then(data => {
  //       setData(data);
  //     });
  // };

  // useEffect(() => {
  //   if (reviewsList.authorName.length > 0) {
  //     const maskedId =
  //       reviewsList.authorName.substring(0, 2) +
  //       '*'.repeat(reviewsList.authorName.length - 2);
  //     setMaskedUserId(maskedId);
  //   }
  // }, [reviewsList]);

  console.log(reviewsList);
  // console.log(reviewsList.authorName);
  return (
    <div className="ProductReview">
      <div className="contour"></div>
      <div className="productTitleInner">
        <h1 className="Title">고객리뷰</h1>
        <p className="cont">
          상품을 직접 구매하여 경험하신 분들의 솔직담백한 후기들을 확인해보세요
        </p>
        <div className="ratingWrapper">
          <div className="reviewCount">
            <h2 className="productName">프리미엄 티 컬렉션</h2>
            <p className="productNum">
              <span>{`총 ${reviewsCount}개`}</span>의 고객후기가 있습니다.
            </p>
          </div>
          <ReviewGrade data={averageRating} />
        </div>
      </div>
      <div className="reviewAllWrapper">
        <div className="reviewAll">
          <p>
            전체리뷰 <span>{reviewsCount}</span>
          </p>
        </div>
        <div className="reviewList">
          <div className="listInner">
            {reviewsList.map(info => (
              <div className="reviewList">
                <div className="dateAndGrade">
                  <p className="date">{info.updatedAt}</p>
                  <p className="grade">
                    <StarRating data={info.rating} />
                  </p>
                </div>
                <div className="idAndreviewText">
                  <p className="useId">
                    <span className={`${info.authorId}`}>구매자 </span>
                    {maskedUserId}
                  </p>
                  <p className="reviewText">{info.content}</p>
                  <p className="reviewImg">
                    <img src={`${info.url}`} />
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Pagination
          productCount={reviewsCount}
          onClick={onClick}
          offset={offset}
          pageLength="5"
          pageProductNumber="10"
        />
      </div>
      <div className="productNotice">
        <div className="productNoticeInner">
          <div className="noticeText">
            <p className="title">상품의 자세한 사항을 확인해보세요.</p>
            <p className="cont">
              상품에 대한 디테일한 사항을 하단에서 확인해보세요. <br />
              상품정보제공 고시부터 상품청약 조회안내까지 모든 사항을 확인하실
              수 있습니다.
            </p>
          </div>
          <div className="notice">
            <p>상품정보제공고시</p>
            <img src="/images/product-notice.png" alt="상품정보제공고시" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductReview;
