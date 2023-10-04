import React, { useState, useEffect } from 'react';
import './BestProductListCard.scss';
import { useNavigate, Link } from 'react-router-dom';
import ProductImgBox from '../ProductImgBox/ProductImgBox';

const BestProductListCard = props => {
  const { data, index } = props;
  const navigate = useNavigate();

  const [productImg, setProductImg] = useState(data.productImg[1].url);

  const goToDetail = id => {
    navigate(`/product-detail/${id}`);
  };

  const showSecondPage = () => {
    setProductImg(data.productImg[1].url);
  };
  const showFirstPage = () => {
    setProductImg(data.productImg[0].url);
  };

  const goToOrderBox = () => {
    navigate('/orderbox');
  };

  return (
    <div className="bestProductListCard">
      <ProductImgBox data={data}>
        <div className="numberBox">{index + 1}</div>
      </ProductImgBox>
      <div className="titleBox">
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
        {data.originalPrice ? (
          <div className="productListCardOriginalPrice">
            {data.originalPrice.toLocaleString('ko-KR')}
          </div>
        ) : null}
        <div className="productListCardSaleBox">
          <div className="productListCardPrice ">
            {data.price.toLocaleString('ko-KR')}
            {data.originalPrice ? '원' : null}
          </div>
          {data.discountRate ? (
            <div className="productListCardDiscountRate">
              {`${data.discountRate}%`}
            </div>
          ) : null}
        </div>
        <div className="labelBox">
          {data.isNew ? <div className="newProduct">신제품</div> : null}
          {data.quantity === 0 ? (
            <div className="emptyQuantity">일시품절</div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
export default BestProductListCard;
