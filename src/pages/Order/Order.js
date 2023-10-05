import React, { useState, useEffect } from 'react';
import './Order.scss';
import Nav from '../../components/Nav/Nav';
import Address from '../../components/Address/Address';

const Order = () => {
  const [cartNumber, setCartNumber] = useState();

  const getCart = async () => {
    return await fetch(`http://${Address.address}/carts/count`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: window.localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(result => {
        setCartNumber(result.cartItemCount);
      });
  };

  useEffect(() => {
    getCart();
  }, []);

  return (
    <div className="order">
      <Nav cartNumber={cartNumber} />
      <div className="pageContainer">
        <div className="titleBox">결제하기</div>
        <div className="contentBox">
          <div className="orderCustomerInf">
            <div className="orderCustomerInfUp">
              <div className="orderCustomerInfUpLeft">주문고객정보</div>
              <div className="orderCustomerInfUpRgiht">
                박인국/010-8908-4135
              </div>
              <span>Down</span>
            </div>
            <div className="orderCustomerInfDown">
              <div classNaee="orderCustomerInfName">
                <div className="orderCustomerInfNameTitle">이름</div>
                <input type="text"></input>
              </div>
              <div classNaee="orderCustomerInfEmail">
                <div className="orderCustomerInfEmailTitle">이메일</div>
                <input type="text"></input>
              </div>
              <div classNaee="orderCustomerInfPhone">
                <div className="orderCustomerInfPhoneTitle">휴대전화</div>
                <input type="text"></input>
              </div>
              <div classNaee="orderCustomerInfSend">
                <div className="orderCustomerInfSendTitle">보내는 분</div>
                <div className="orderCustomerInfSendBox">
                  <input type="text" placeholder="보내는 분 입력"></input>
                  <div className="oderCustomerInfSendInf">
                    보내는 분 별도 표기하더라도 고객님 정보보호를 위해 마스킹
                    처리되어 발송됩니다. 예: 오설록 -&gt; 오*록 / 오설록몰 -&gt;
                    오설**
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="locationInf"></div>
          <div className="orderRequestMessage"></div>
          <div className="orderList"></div>
          <div className="payWay"></div>
          <div className="contract"></div>
        </div>
      </div>
    </div>
  );
};
export default Order;
