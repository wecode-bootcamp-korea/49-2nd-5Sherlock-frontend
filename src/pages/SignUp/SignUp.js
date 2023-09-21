import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Input/Input';
import './SignUp.scss';

const idReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const pwReg = /^[a-zA-Z0-9]{6,16}$/;

const SignUp = () => {
  const navigate = useNavigate();
  const [joinUserInfo, setJoinUserInfo] = useState({
    name: '',
    phoneNumber: '',
    birthday: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const saveJoinUserInfo = event => {
    const { name, value } = event.target;
    setJoinUserInfo({ ...joinUserInfo, [name]: value });
  };

  const handleSignUp = e => {
    console.log('clicked');
    fetch('http://10.58.52.229:8000/users/signUp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        name,
        phoneNumber,
        email,
        password,
      }),
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        if (data.message === 'userCreated') {
          navigate('/login');
        } else {
          alert('회원가입에 실패했습니다.');
        }
      });
  };

  const { name, phoneNumber, birthday, email, password, confirmPassword } =
    joinUserInfo;

  const isUserInputValid =
    name.length > 0 &&
    phoneNumber.length > 0 &&
    birthday.length === 8 &&
    idReg.test(email) &&
    pwReg.test(password) &&
    password === confirmPassword;

  console.log(joinUserInfo);

  return (
    <div className="signUp">
      <header className="header">
        <span className="headerText">뷰티포인트 X 오설록 쇼핑몰 회원가입</span>
        <img
          className="deleteBtn"
          src="/images/login-img1.png"
          alt="취소버튼"
          onClick={() => navigate('/login')}
        />
      </header>
      <div className="container">
        <span className="joinGuideText">
          뷰티포인트 통합멤버십 회원가입을
          <br />
          환영합니다!
        </span>
        <span className="joinGuideTextSmall">
          아모레퍼시픽 통합멤버십 뷰티포인트에 가입하시면 오설록 쇼핑몰 외
          <br />
          모든 브랜드 온/오프 매장에서 상품을 구매할 때마다 현금처럼 사용할 수
          <br />
          있는 포인트 적립과 사용 등 다양한 혜택을 받으실 수 있습니다.
        </span>

        <form className="joinForm">
          <Input
            scale="first"
            placeholder="이름(실명으로 입력해주세요)"
            type="text"
            name="name"
            onChange={saveJoinUserInfo}
          />
          <Input
            scale="first"
            placeholder="생년월일 8자리(ex.19980905)"
            type="text"
            name="birthday"
            onChange={saveJoinUserInfo}
          />

          <Input
            scale="first"
            placeholder="휴대폰번호"
            type="text"
            name="phoneNumber"
            onChange={saveJoinUserInfo}
          />

          <Input
            scale="first"
            placeholder="이메일"
            type="text"
            name="email"
            onChange={saveJoinUserInfo}
          />
          <Input
            scale="first"
            placeholder="비밀번호 (6~16자)"
            type="password"
            name="password"
            onChange={saveJoinUserInfo}
          />
          <Input
            scale="first"
            placeholder="비밀번호 확인"
            type="password"
            name="confirmPassword"
            onChange={saveJoinUserInfo}
          />
          <button
            type="button"
            className="signupButton"
            onClick={handleSignUp}
            disabled={!isUserInputValid}
          >
            본인인증 및 회원가입
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
