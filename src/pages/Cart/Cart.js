import React, { useState, useEffect } from 'react';
import CheckBox from '../../components/CheckBox/CheckBox';
import Timer from '../../components/Timer/Timer';
import './Cart.scss';
import Address from '../../components/Address/Address';

const Cart = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch('/data/cartData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setProductList(data);
      });
  }, []);

  return (
    <div className="cart">
      <header className="header">
        <div className="pageTitle">장바구니</div>
      </header>
      <div className="cartCheck">
        <CheckBox className="checkAll" label="전체선택"></CheckBox>
        <button className="deleteBtn" type="button">
          ㅣ 선택삭제
        </button>
      </div>
      <div className="listBox">
        <div className="itemInfoBox">
          <CheckBox></CheckBox>
          <div className="image">이미지</div>
          <div className="itemInfo">
            <div className="itemName">상품이름</div>
            <div className="packingItem">포장여부</div>
            <div className="presentItem">선물여부</div>
          </div>
        </div>
        <div className="countPrice">
          <div className="count">수량</div>
          <div className="price">금액</div>
        </div>
        <div className="getBtnBox">
          <button className="getBtn" type="button">
            바로구매
          </button>
        </div>
      </div>

      <div className="cartBtnBox">
        <button className="getOptionItem">선택상품 주문하기</button>
        <button className="getAllItems">전체상품 주문하기</button>
      </div>
      <div className="cartinfo">
        <img className="cartimg"></img>
      </div>
      <div className="cartMsg">
        장바구니에 보관된 상품은 3개월 후에 삭제 됩니다.
      </div>

      <div className="onlyTodayBox">
        <div className="onlyToday">
          <div className="onlyTodayTitle">오늘만 이 가격</div>
          <div className="onlyTodayInfo">
            오늘 하루만 이 가격으로 구매할 수 있는 상품을 지금 바로 만나보세요.
          </div>
          <div className="countingTime">
            {' '}
            <Timer hh="10" mm="0" ss="0" />{' '}
          </div>
        </div>
        <div className="onlyTodayBottomBox">
          <div className="onlyTodayimg">오늘만 이미지</div>
          <div className="onlyTodayItemInfo">
            <div className="onlyTodayItemName">오늘만 상품명</div>
            <div className="originPrice">오늘만 할인 전 금액</div>
            <div className="resultPrice">오늘만 할인 후 금액</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
