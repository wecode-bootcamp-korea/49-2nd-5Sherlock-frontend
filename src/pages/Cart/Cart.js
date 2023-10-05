import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CartList from '../../components/CartList/CartList';
import Timer from '../../components/Timer/Timer';
import './Cart.scss';

function Cart() {
  const [selectAll, setSelectAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState({});
  const [cartList, setCartList] = useState([]);
  const navigate = useNavigate();

  // 선택된 아이템 수
  const selectedCount = Object.values(selectedItems).reduce(
    (acc, cur) => (cur ? acc + 1 : acc),
    0,
  );
  const isSelected = Object.values(selectedItems).some(item => item);

  // 전체 선택/해제를 처리하는 함수
  const handleSelectAllChange = () => {
    const newSelectedItems = {};

    if (!selectAll) {
      cartList.forEach(item => {
        newSelectedItems[item.productId] = true;
      });
    }

    setSelectedItems(newSelectedItems);
  };

  // 선택된 데이터를 order 페이지로 전송하는 함수
  const sendData = () => {
    if (!isSelected) {
      alert('하나 이상의 상품을 선택해 주세요!');
      return;
    }

    const items = [];

    for (const itemId in selectedItems) {
      if (selectedItems[itemId]) {
        const selectedItem = cartList.find(
          item => item.id === parseInt(itemId),
        );

        if (selectedItem) {
          items.push({
            id: selectedItem.id,
            quantity: selectedItem.quantity,
          });
        }
      }
    }

    navigate('/order', { state: { items, cart: true } });
  };

  // 컴포넌트가 처음 렌더링될 때 장바구니 데이터를 가져오는 useEffect
  useEffect(() => {
    fetch('http://10.58.52.212:8000/carts', {
      method: 'GET',
      headers: {
        Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjk2NDkwOTk2fQ.cbj3xra35EJ3u_eumbfzfLSTksTN-UIl0UsyePsWDdc`,
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        const updatedCartList = data.data.map(item => ({
          ...item,
          quantity: 1,
        }));
        setCartList(updatedCartList);
      })
      .catch(error => {
        console.error('Error fetching cart data:', error);
      });
  }, []); // 빈 배열을 넘겨 컴포넌트가 마운트될 때 한 번만 실행됩

  // 선택된 아이템 수와 장바구니 목록 수를 비교하여 전체 선택 상태를 설정하는 useEffect
  useEffect(() => {
    if (isSelected && selectedCount === cartList.length) {
      setSelectAll(true);
    } else {
      setSelectAll(false);
    }
  }, [selectedItems, cartList]);

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
            checked={selectAll || selectedCount === cartList.length}
            onChange={handleSelectAllChange}
          />

          <label htmlFor="checkAll">전체선택</label>
        </div>
      </div>

      <div className="listBox">
        <div className="itemInfoBox">
          <CartList
            cartList={cartList}
            setCartList={setCartList}
            selectAll={selectAll}
            setSelectedItems={setSelectedItems}
            selectedItems={selectedItems}
          />
        </div>
      </div>

      <div className="cartBtnBox">
        <button className="getOptionItem" onClick={sendData}>
          주문하기
        </button>
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
            <Timer hh="10" mm="0" ss="0" />
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
