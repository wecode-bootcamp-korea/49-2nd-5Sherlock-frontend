import React, { useState, useEffect } from 'react';
import './ProductListCard.scss';
import { useNavigate, Link } from 'react-router-dom';
import ProductImgBox from '../ProductImgBox/ProductImgBox';

const ProductListCard = props => {
  const [change, setChange] = useState(true);

  const navigate = useNavigate();
  const { data } = props;
  // const [productImg, setProductImg] = useState(data.productImg[1].url);
  const goToDetail = id => {
    navigate(`/product-detail/${id}`);
  };

  // const likeClick= (param) => {
  //   fetch('http://10.58.52.96:8000/users/signup', {
  //       method: param,
  //       headers: {
  //         'Content-Type': 'application/json;charset=utf-8',
  //       },
  //       body: JSON.stringify({
  //         id: id,
  //         accessToken: localStorage.getItem('token'),
  //       }),
  //     }).then(() => {
  //       setChange(!change);
  //     });
  // }

  const clickLike = (id, isLike) => {
    if (!localStorage.getItem('token')) {
      return alert('로그인이 필요합니다.');
    }

    if (!isLike) {
      fetch('http://10.58.52.96:8000/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
          id: id,
          accessToken: localStorage.getItem('token'),
        }),
      }).then(() => {
        setChange(!change);
      });
    } else {
      fetch('http://10.58.52.96:8000/users/signup', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
          id: id,
          accessToken: localStorage.getItem('token'),
        }),
      }).then(() => {
        setChange(!change);
      });
    }
  };

  // const showSecondPage = () => {
  //   setProductImg(data.productImg[1].url);
  // };
  // const showFirstPage = () => {
  //   setProductImg(data.productImg[0].url);
  // };

  // const goToOrderBox = () => {
  //   navigate('/orderbox');
  // };

  return (
    <div className="productListCard">
      <ProductImgBox data={data} />
      <div className="titleBox">
        <div className="labelBox">
          {data.isNew ? <div className="newProduct">신제품</div> : null}
          {data.quantity === 0 ? (
            <div className="emptyQuantity">일시품절</div>
          ) : null}
        </div>
        <div
          onClick={() => {
            goToDetail(data.id);
          }}
          className="productListCardTitle"
        >
          {data.name}
        </div>
      </div>
      <div className="productListCardPriceBox">
        <div className="productListCardPrice">
          {data.price.toLocaleString('ko-KR')}&nbsp;원
        </div>
        {data.originalPrice ? (
          <div className="productListCardSaleBox">
            <div className="productListCardOriginalPrice">
              {data.originalPrice.toLocaleString('ko-KR')}
            </div>
            <div className="productListCardDiscountRate">
              {`(${data.discountRate}%↓)`}
            </div>
          </div>
        ) : null}
      </div>
      <div className="interactionBox">
        <div className="likeBox">
          <div
            className="likeBtn"
            onClick={() => {
              clickLike(data.id, data.isLike);
            }}
          >
            {data.isLike ? (
              <img
                className="likeBtnImg"
                src={process.env.PUBLIC_URL + '/images/btn-like.png'}
                alt="clickLikeButton"
              />
            ) : (
              <img
                className="likeBtnImg"
                src={process.env.PUBLIC_URL + '/images/btn-unlike.png'}
                alt="clickLikeButton"
              />
            )}
          </div>
          {data.likeNumber}
        </div>

        <div className="reviewBox">
          <div className="reviewBtn">
            <img
              className="reviewBtnImg"
              src={process.env.PUBLIC_URL + '/images/reviewIcon.png'}
              alt="goToReview"
            ></img>
          </div>
          {data.reviewNumber}
        </div>
      </div>
    </div>
  );
};
export default ProductListCard;
