import React, { useState } from 'react';
import './ProductImgBox.scss';
import { useNavigate } from 'react-router-dom';
import Address from '../Address/Address';

const ProductImgBox = ({ data, children }) => {
  const navigate = useNavigate();
  const [productImg, setProductImg] = useState(data.productImg[0].url);
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
    goCart();
    console.log('장바구니 담김');
  };

  const goCart = async () => {
    // return await fetch(
    //   `http://10.58.52.176:8000/cart?${searchParams.toString()}`,
    //   {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       authorization: window.sessionStorage.getItem('token'),
    //     },
    //   },
    // )
    //   .then(res => res.json())
    //   .then(data => {
    // if(data.message==='querySuccess'){
    //   alert('장바구니 추가되었습니다!')
    // }
    //   });
  };

  return (
    <div
      className="productImgBox"
      onClick={() => {
        goToDetail(data.id);
      }}
      onMouseEnter={showSecondPage}
      onMouseLeave={showFirstPage}
    >
      <img className="pic" src={productImg} alt="cardImage" />

      <div
        className="picCartBox"
        onClick={e => {
          e.stopPropagation();
          goToOrderBox();
        }}
      >
        <img
          className="picCart"
          src={process.env.PUBLIC_URL + '/images/shopping-cart.png'}
          alt="cardImage"
        />
      </div>
      {children}
    </div>
  );
};
export default ProductImgBox;
