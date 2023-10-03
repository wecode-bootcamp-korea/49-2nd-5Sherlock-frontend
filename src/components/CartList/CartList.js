import React, { useState } from 'react';
import CheckBox from '../../components/CheckBox/CheckBox';
import './CartList.scss';

const CartList = () => {
  const [productList, setProductList] = useState({});

  useEffect(() => {
    fetch('/data/cartData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setProductList(data);
      });
  }, []);

  <CheckBox></CheckBox>;
  {
    productList.list?.map(item => {
      return (
        <div className="cartList" key={item.id}>
          <img className="image" src={item.imageUrl} alt={item.name} />
          <div className="itemInfo">
            <div className="itemName">{item.name}</div>
            <div className="packingItem">{item.package}</div>
            <div className="presentItem">{item.present}</div>
          </div>
          <div className="countPrice">
            <div className="count">수량</div>
            <div className="price">{item.price * (1 - item.discountRate)}</div>
          </div>
        </div>
      );
    });
  }
};

export default CartList;
