import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CartList from '../../components/CartList/CartList';
import Timer from '../../components/Timer/Timer';
import './Cart.scss';
import BASE_API from '../../config';

function Cart() {
  const [selectAll, setSelectAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState({});
  const [cartList, setCartList] = useState([]);
  const [todaySaleImg, setTodaySaleImg] = useState({});
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
      console.log(selectedItems);
      if (selectedItems[itemId]) {
        console.log('출력', cartList);
        const selectedItem = cartList.find(
          item => item.productId === parseInt(itemId),
        );
        // console.log(selectedItem);
        if (selectedItem) {
          console.log('pushed');
          items.push({
            id: selectedItem.productId,
            quantity: selectedItem.quantity,
          });
        }
      }
    }
    console.log(items);
    navigate('/order', { state: { items, cart: true } });
  };

  const getCart = () => {
    fetch(`${BASE_API}/carts`, {
      method: 'GET',
      headers: {
        authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        const updatedCartList = data.data.map(item => ({
          ...item,
        }));
        setCartList(updatedCartList);
      })
      .catch(error => {
        console.error('Error fetching cart data:', error);
      });
  };

  // const getTodaySale = () => {
  //   fetch(`${BASE_API}/products/specialPriceProduct`, {
  //     method: 'GET',
  //     headers: {
  //       authorization: localStorage.getItem('token'),
  //     },
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       setTodaySaleImg(data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching cart data:', error);
  //     });
  // };

  // 컴포넌트가 처음 렌더링될 때 장바구니 데이터를 가져오는 useEffect
  useEffect(() => {
    getCart();
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
      {/* <div className="onlyTodayBox">
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
          <div className="onlyTodayimg">{todaySaleImg.url}</div>
          <div className="onlyTodayItemInfo">
            <div className="onlyTodayItemName">{todaySaleImg.name}</div>
            <div className="originPrice">{todaySaleImg.originalPrice}</div>
            <div className="resultPrice">{todaySaleImg.price}</div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
export default Cart;
