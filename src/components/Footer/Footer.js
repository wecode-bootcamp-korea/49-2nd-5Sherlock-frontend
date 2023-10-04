import React from 'react';
import './Footer.scss';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="footer">
      <div className="onlineBar">
        <div className="onlineBarInside">
          <div className="onlineBarRight">
            <div
              className="loginBox"
              onClick={() => {
                navigate('/login');
              }}
            >
              로그인
            </div>
            <div className="onlinebarIcon">
              <img
                className="tiktokImg"
                src={process.env.PUBLIC_URL + '/images/footer/tiktok.png'}
                alt="tiktok"
              />
            </div>
            <div className="onlinebarIcon">
              <img
                className="youtubeImg"
                src={process.env.PUBLIC_URL + '/images/footer/youtube.png'}
                alt="youtube"
              />
            </div>
            <div className="onlinebarIcon">
              <img
                className="instagramImg"
                src={process.env.PUBLIC_URL + '/images/footer/instagram.png'}
                alt="instagram"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="infBar">
        <div className="infBarInside">
          <div className="infBarLeft">
            <div className="customer">
              <div className="customerTitle">고객상담센터 · 주문/배송문의</div>
              <div className="customerEmail">help@5sherlock.com</div>
              <div className="customerPhone">080-707-7007</div>
              <div className="customerTime">
                평일 09:30 - 17:00 (점심 11:30 - 13:00)
              </div>
            </div>
            <div className="bigSale">
              <div className="bigSaleTitle">특판, 대량구매 문의</div>
              <div className="bigSaleEmail">mall@5sherlock.com</div>
              <div className="bigSalekakaotalkId">
                카카오톡ID : 5sherlockmall
              </div>
              <div className="bigSaleTime">
                평일 09:30 - 17:00 (점심 11:30 - 13:00)
              </div>
            </div>
          </div>
          <div className="infBarRight">
            <div className="infBarIcon">
              <img
                className="locationImg"
                src={process.env.PUBLIC_URL + '/images/footer/location.png'}
                alt="location"
              />
              매장안내
            </div>
            <div className="infBarIcon">
              <img
                className="giftImg"
                src={process.env.PUBLIC_URL + '/images/footer/gift.png'}
                alt="gift"
              />
              멤버십혜택
            </div>
            <div className="infBarIcon">
              <img
                className="boxesImg"
                src={process.env.PUBLIC_URL + '/images/footer/boxes.png'}
                alt="boxes"
              />
              단체 및 기업 구매
            </div>
            <div className="infBarIcon">
              <img
                className="talking"
                src={process.env.PUBLIC_URL + '/images/footer/talking.png'}
                alt="talking"
              />
              1:1문의
            </div>
            <div className="infBarIcon">
              <img
                className="beautyPointImg"
                src={process.env.PUBLIC_URL + '/images/footer/beautyPoint.png'}
                alt="beautyPoint"
              />
              뷰티포인트 추후적립
            </div>
          </div>
        </div>
      </div>
      <div className="mainFooterBar">
        <div className="mainFooterBarInside">
          <div className="leftBox">
            <div className="footerLogo">
              <img
                className="talking"
                src={process.env.PUBLIC_URL + '/images/logo.png'}
                alt="talking"
              />
            </div>
            <div className="mainFooterLeft">
              <div className="companyNav">
                <ul>
                  <li>회사소개</li>
                  <li>서비스 이용약관</li>
                  <li className="personalInf">개인정보 처리방침</li>
                  <li>영상정보 처리방침</li>
                  <li>뷰티포인트</li>
                  <li>임직원할인</li>
                  <li>사이트맵</li>
                  <li>전자공고</li>
                </ul>
              </div>
              <div className="companyInf">
                ㈜ 오설록
                <br />
                대표이사:서혁제 주소:서울특별시 용산구 한강대로 100,
                14층(한강로2가) 사업자등록번호: 390-87-01499{' '}
                <span className="infBtn">사업자 정보확인</span> <br />
                통신판매업신고번호:2019-서울용산-1173호 호스팅제공자: ㈜오설록
                <br />
                <br />
                (주)오설록은 오설록 브랜드를 제외한 입점 브랜드에 대해서는
                통신판매중개자 이며 통신판매의 당사자가 아닙니다.
                <br />
                따라서 입점판매자가 등록한 상품정보 및 거래에 대해 책임을 지지
                않습니다.
              </div>
            </div>
          </div>
          <div className="mainFooterRight">
            <div className="safeService">
              <div className="safeServiceTitle">
                NHN KCP 구매안전(에스크로)서비스
              </div>
              <div className="safeServiceInfBox">
                <img
                  className="safeServiceIcon"
                  src={process.env.PUBLIC_URL + '/images/footer/happy-face.png'}
                  alt="boxes"
                />
                <div className="safeServiceInf">
                  고객님의 안전거래를 위해 현금 등으로 결제 시 저희 쇼핑몰에
                  가입한 NHN KCP의 구매안전서비스를 이용하실 수 있습니다.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
