import React, { useState, useEffect } from 'react';
import './ProductList.scss';
import { useNavigate } from 'react-router-dom';
import ProductListContainer from '../../../components/ProductListContainer/ProductListContainer';

const ProductList = () => {
  return (
    <div className="productList">
      <div className="bannerBox">
        <h2 className="bannerName">티 제품</h2>
        <img src={process.env.PUBLIC_URL + '/images/teaProductBanner.jpg'} />
      </div>
      <div className="container">
        <div className="productListBox">
          <div className="leftMenu">
            <div className="leftMenuTitle">제품</div>
            <div className="leftMenuCategory">
              <div className="leftMenuTeaProduct leftMenuTeaBtn">티 제품</div>
              <div className="leftMenuTeaFood leftMenuTeaBtn">티푸드</div>
              <div className="leftMenuTeaLifeStyle leftMenuTeaBtn">
                라이프 스타일
              </div>
            </div>
          </div>
          <div className="rightMenu">
            <div className="rigthMenuTitleBox">
              <div className="rightMenuTitle">티 제품</div>
              <div className="rightMenuFilterBox">
                <div className="rightMenuFilter">추천순</div>
                <div className="rightMenuFilter">판매순</div>
                <div className="rightMenuFilter">신상품순</div>
                <div className="rightMenuFilter">높은 가격순</div>
                <div className="rightMenuFilter">낮은 가격순</div>
              </div>
            </div>
            <div className="rightMenuInfoBox">
              <div className="rightMenuInfo">
                총 <span className="rigthMenuInfoNumber">72</span>개의 상품이
                있습니다.
              </div>
              <div className="rightMenuTeaFilterBox">
                <div className="rightMenuTeaFilter">전체</div>
                <div className="rightMenuTeaFilter">잎차</div>
                <div className="rightMenuTeaFilter">피라미드</div>
                <div className="rightMenuTeaFilter">티백</div>
                <div className="rightMenuTeaFilter">파우더</div>
              </div>
            </div>
            <ProductListContainer />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductList;
