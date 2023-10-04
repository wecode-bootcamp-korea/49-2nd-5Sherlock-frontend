import React, { useState, useEffect } from 'react';
import Counter from '../../components/Counter/Counter';
import './CartList.scss';

const CartList = ({ setSelectedItems, selectedItems }) => {
  const [cartList, setCartList] = useState([]);

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

  const handleCounterChange = (itemId, newQuantity) => {
    const updatedCartList = cartList.map(item => {
      if (item.id === itemId) {
        item.quantity = newQuantity;
        item.price = item.originalPrice * (1 - item.discountRate) * newQuantity;
      }
      return item;
    });
    console.log(updatedCartList);

    setCartList(updatedCartList);
  };

  const handleCheckboxChange = itemId => {
    setSelectedItems(prevSelectedItems => {
      return {
        ...prevSelectedItems,
        [itemId]: !prevSelectedItems[itemId],
      };
    });
  };

  const selectedData = [];
  for (const itemId in selectedItems) {
    if (selectedItems[itemId]) {
      // itemId를 가진 데이터가 선택되었으면 해당 데이터를 selectedData에 추가
      const selectedItem = cartList.find(item => item.id === parseInt(itemId));
      if (selectedItem) {
        selectedData.push(selectedItem);
      }
    }
  }

  console.log(selectedData);

  const selectedDataToSend = selectedData.map(item => ({
    id: item.id,
    quantity: item.quantity,
  }));

  console.log(selectedDataToSend);

  return (
    <>
      {cartList.map(item => (
        <div className="cartList" key={item.id}>
          <input
            className="checkBox"
            type="checkbox"
            checked={selectedItems[item.id]}
            onChange={() => handleCheckboxChange(item.id)}
          />
          <img className="image" src={item.imageUrl} alt={item.name} />
          <div className="itemInfo">
            <div className="itemName">{item.name}</div>
            <div className="packingItem">{item.package}</div>
            <div className="presentItem">{item.present}</div>
          </div>
          <div className="countPrice">
            <Counter
              itemId={item.id}
              quantity={item.quantity}
              onQuantityChange={handleCounterChange}
            />

            <div className="price">{item.price.toLocaleString()}원</div>
          </div>

          <button className="getBtn" type="button">
            바로구매
          </button>
        </div>
      ))}
    </>
  );
};

export default CartList;
