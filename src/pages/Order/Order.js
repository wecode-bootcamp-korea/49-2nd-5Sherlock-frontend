import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import './Order.scss';
import BASE_API from '../../config';

const Order = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [data, setData] = useState({});
  const { items, cart } = location.state;
  const [userInfo, setUserInfo] = useState({
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    shipperName: '',

    receiverName: '',
    receiverPhoneNumber: '',
    receiverAddress: '',
    defaultAddress: '',
    shippingMessage: '',
    payment: '',
  });

  // const saveUserInfo = event => {
  //   const {
  //     customerName,
  //     customerEmail,
  //     customerPhone,
  //     shipperName,
  //     receiverName,
  //     receiverPhoneNumber,
  //     receiverAddress,
  //     defaultAddress,
  //     shippingMessage,
  //     payment,
  //   } = event.target;
  //   setUserInfo({ ...userInfo, [name]: value });
  // };
  const getCart = async () => {
    return await fetch(`${BASE_API}/orders?items=${JSON.stringify(items)}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: window.localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(result => {
        setData(result);
      });
  };

  useEffect(() => {
    getCart();
  }, []);
  if (!location.state) return navigate('/');
  if (Object.keys(location.state).length === 0) {
    return navigate('/');
  }

  // const getCart = async () => {
  //   return await fetch(`http://${Address.address}/carts/count`, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       authorization: window.localStorage.getItem('token'),
  //     },
  //   })
  //     .then(res => res.json())
  //     .then(result => {
  //       setCartNumber(result.cartItemCount);
  //     });
  // };
  // useEffect(() => {
  //   getCart();
  // }, []);

  console.log(location.state);
  // useEffect(() => {
  //   fetch(
  //     `${BASE_API}/orders?items=${JSON.stringify(items).replaceAll('"', '')}`,
  //   );
  // }, []);

  console.log(data);

  return (
    <div className="order">
      <div className="orderInner">
        <div className="paymentBox">
          <div className="list">
            <p className="totalAmount">
              <span>총 상품 금액</span>
              <span>123,000원</span>
            </p>
            <p className="finalPayment">
              <span>결제 예상 금액</span>
              <span className="payment">123,000원</span>
            </p>
          </div>
          <button className="btnPayment">
            <span>20000</span>원 주문하기
          </button>
        </div>
        <div className="orderTitle">
          <h1></h1>
        </div>
        <div className="orderContainerWrapper">
          <div className="orderUserInfo">
            <p className="title">
              <h2>주문고객정보</h2>
              <span>김세연/010-9845-9524</span>
            </p>
            <div className="orderInfoInput">
              <div className="userName inputWrapper">
                <span className="inputTitle">이름</span>
                <input type="text" />
              </div>
              <div className="userEmail inputWrapper">
                <span className="inputTitle">이메일</span>
                <input type="text" />
              </div>
              <div className="userPhone inputWrapper">
                <span className="inputTitle">휴대전화</span>
                <input type="num" />
              </div>
              <div className="sender inputWrapper">
                <span className="inputTitle">보내는 분</span>
                <input type="text" />
              </div>
            </div>
            <div className="userNotice">
              <div className="noticeInner">
                <p className="noticeText">
                  보내는 분 별도 표기하더라도 고객님 정보보호를 위해 마스킹
                  처리되어 발송됩니다.
                </p>
                <p className="noticeEx">
                  예&#41; 오설록 -&#62; 오*록 / 오설록몰 -&#62; 오설**
                </p>
              </div>
            </div>
          </div>
          <div className="orderAddressInfo">
            <p className="title">
              <h2>배송지정보</h2>
              <botton>주문 고객과 동일</botton>
            </p>
            <div className="oderAddressInput">
              <div className="recipient inputWrapper">
                <span className="inputTitle">받는 분</span>
                <input type="text" />
              </div>
              <div className="userPhone inputWrapper">
                <span className="inputTitle">휴대전화</span>
                <input type="num" />
              </div>
              <div className="adrress inputWrapper">
                <span className="inputTitle">주소</span>
                <input type="text" />
              </div>
            </div>
            <div className="deliveryRequest">
              <p className="text">배송 요청사항</p>
              <select className="requestSelect">
                <option>배송 요청사항 선택</option>
                <option>경비실에 맡겨주세요</option>
                <option>배송전에 미리 연락주세요</option>
                <option>직접 입력</option>
              </select>
            </div>
          </div>
          <div className="orderProductInfo">
            <div className="title">
              <h2>주문상품</h2>
              <span className="total">총 3건</span>
            </div>
            <ul className="orderList">
              <li>
                <div className="productImgWrapper">
                  <p className="productImg">
                    <img src="/images/product-img.jpg" alt="주문상품" />
                  </p>
                  <p className="name">러블리 티 박스</p>
                </div>
                <p className="priceAndCount">
                  <span className="price">21,000원 /</span>
                  <span className="price">1개</span>
                </p>
              </li>
            </ul>
          </div>
          <div className="payWay">
            <div className="title">
              <h2>결제 수단 선택</h2>
            </div>
            <div className="payWayImg">
              <img src="/images/pay.png" alt="결제 수단" />
            </div>
          </div>
          <div className="purchaseConsent">
            <input type="checkbox" className="consentSelect" />
            <label>
              위 상품의 판매조건을 명확히 확인하였으며, 구매 진행에 동의 합니다.
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Order;
