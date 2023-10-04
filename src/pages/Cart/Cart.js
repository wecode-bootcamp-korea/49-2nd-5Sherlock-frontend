import React, { useState, useEffect } from 'react';
import CartList from '../../components/CartList/CartList';
import Timer from '../../components/Timer/Timer';
import './Cart.scss';

function Cart() {
  const [selectAll, setSelectAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState({});
  const [cartList, setCartList] = useState([]);
  const selectedObjectLength = Object.keys(selectedItems).length;
  console.log(selectedItems);
  const handleSelectAllChange = () => {
    setSelectAll(!selectAll);
    const newSelectedItems = {};
    if (!selectAll) {
      cartList.forEach(item => {
        newSelectedItems[item.id] = true;
      });
    }
    setSelectedItems(newSelectedItems);
  };

  useEffect(() => {
    fetch('/data/cartData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        const updatedCartList = data.list.map(item => ({
          ...item,
          quantity: 1,
        }));
        setCartList(updatedCartList);
      });
  }, []);

  useEffect(() => {
    if (selectedObjectLength > 0 && selectedObjectLength === cartList.length) {
      setSelectAll(true);
    } else {
      return;
    }
  }, [selectedObjectLength]);

  return (
    <div className="cart">
      <header className="header">
        <div className="pageTitle">장바구니</div>
      </header>

      <div className="cartCheck">
        <div className="checkAllBox">
          <input
            id="checkAll"
            className="checkAll"
            type="checkbox"
            checked={selectAll || selectedObjectLength === cartList.length}
            onChange={handleSelectAllChange}
          />
          <label htmlFor="checkAll">전체선택</label>
        </div>
        <button className="deleteBtn" type="button">
          ㅣ 선택삭제
        </button>
      </div>
      <div className="listBox">
        <div className="itemInfoBox">
          <CartList
            cartList={cartList}
            selectAll={selectAll}
            setSelectedItems={setSelectedItems}
            selectedItems={selectedItems}
          />
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
}

export default Cart;
